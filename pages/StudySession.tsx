import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';
import { DECKS } from '../constants';
import { StudyState, Deck, Card } from '../types';
import { getShuffledIndices } from '../utils/shuffle';
import { ProgressBar } from '../components/ProgressBar';
import { StudyCard } from '../components/StudyCard';
import { Controls } from '../components/Controls';
import { supabase } from '../utils/supabaseClient';

const StudySession: React.FC = () => {
    const navigate = useNavigate();
    const { deckId } = useParams<{ deckId: string }>();

    const [currentDeck, setCurrentDeck] = useState<Deck | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState<StudyState>({
        deckId: '',
        currentCardIndex: 0,
        shuffledOrder: [],
        isFlipped: false,
    });

    // Fetch deck and cards from Supabase
    useEffect(() => {
        const fetchDeckData = async () => {
            if (!deckId) {
                setLoading(false);
                return;
            }

            try {
                // 1. Fetch Deck Metadata
                const { data: deckData, error: deckError } = await supabase
                    .from('decks')
                    .select('*')
                    .eq('id', deckId)
                    .single();

                if (deckError) {
                    console.error('Error fetching deck:', deckError);
                    // Fallback to local constant if DB fails or not found
                    if (DECKS[deckId]) {
                        setCurrentDeck(DECKS[deckId]);
                    }
                    setLoading(false);
                    return;
                }

                // 2. Fetch Cards with Translations
                const { data: cardsData, error: cardsError } = await supabase
                    .from('cards')
                    .select(`
                        *,
                        card_translations (
                            lang,
                            meaning,
                            description
                        )
                    `)
                    .eq('deck_id', deckId);

                if (cardsError) {
                    console.error('Error fetching cards:', cardsError);
                    // If we have deck metadata but cards fail, we might still want to fallback?
                    // For now, let's just proceed with empty cards or fallback deck
                     if (DECKS[deckId]) {
                        setCurrentDeck(DECKS[deckId]);
                    } else {
                        // Map partial data if we can't get cards
                         setCurrentDeck({
                            id: deckData.id,
                            title: deckData.title,
                            description: deckData.description,
                            version: deckData.version,
                            themeColor: deckData.theme_color,
                            defaultLang: deckData.default_lang,
                            cards: []
                        });
                    }
                    setLoading(false);
                    return;
                }

                // 3. Transform Data to match Deck interface
                const storedLang = localStorage.getItem('app_language') || 'tr';
                
                const mappedCards: Card[] = cardsData.map((c: any) => {
                    // Find best translation: selectedLang -> fallback (tr/en) -> first available
                    const selectedTrans = c.card_translations.find((t: any) => t.lang === storedLang);
                    const tr = c.card_translations.find((t: any) => t.lang === 'tr');
                    const en = c.card_translations.find((t: any) => t.lang === 'en');
                    const translation = selectedTrans || tr || en || c.card_translations[0];

                    return {
                        id: c.id,
                        sanskrit: c.sanskrit,
                        transliteration: c.transliteration,
                        imageUrl: c.image_url,
                        // DB doesn't have 'type' column yet, defaulting to Neutral
                        type: 'Neutral', 
                        meaning: translation ? translation.meaning : '',
                        description: translation ? translation.description : '',
                    };
                });

                const loadedDeck: Deck = {
                    id: deckData.id,
                    title: deckData.title,
                    description: deckData.description,
                    version: deckData.version,
                    themeColor: deckData.theme_color,
                    defaultLang: deckData.default_lang,
                    cards: mappedCards,
                };
                
                // If DB returned no cards (maybe deleted?), fallback or show empty
                if (loadedDeck.cards.length === 0 && DECKS[deckId]) {
                     // Optionally fallback to local if DB has deck but no cards
                     // But user wants to check DB content, so let's trust DB even if empty
                     console.log('DB Deck has 0 cards.');
                }

                setCurrentDeck(loadedDeck);

            } catch (err) {
                console.error('Unexpected error loading deck:', err);
                if (deckId && DECKS[deckId]) {
                    setCurrentDeck(DECKS[deckId]);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchDeckData();
    }, [deckId]);

    // Initialize/Restore State once currentDeck is loaded
    useEffect(() => {
        if (!currentDeck) return;

        const STORAGE_KEY = `flashcards:v1:${currentDeck.id}`;
        const saved = localStorage.getItem(STORAGE_KEY);
        
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                const savedVersion = parsed.version || 0;
                const currentVersion = currentDeck.version || 0;

                // Validate saved state against current deck cards
                if (savedVersion === currentVersion && parsed.shuffledOrder.length === currentDeck.cards.length) {
                    setState({
                        ...parsed,
                        isFlipped: false,
                        // Ensure deckId matches
                        deckId: currentDeck.id
                    });
                    return;
                } else {
                    console.log(`Version mismatch (Saved: ${savedVersion}, Current: ${currentVersion}). Resetting state.`);
                }
            } catch (e) {
                console.error("Failed to parse saved state", e);
            }
        }

        // Default initialization
        setState({
            deckId: currentDeck.id,
            currentCardIndex: 0,
            shuffledOrder: getShuffledIndices(currentDeck.cards.length),
            isFlipped: false,
        });

    }, [currentDeck]); // Only run when currentDeck is set

    // Save state changes
    useEffect(() => {
        if (!currentDeck || !state.deckId) return;

        const STORAGE_KEY = `flashcards:v1:${currentDeck.id}`;
        const stateToSave = {
            ...state,
            isFlipped: false,
            version: currentDeck.version
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }, [state, currentDeck]);


    const handleFlip = useCallback(() => {
        setState(prev => ({ ...prev, isFlipped: !prev.isFlipped }));
    }, []);

    const handleNext = useCallback(() => {
        if (!currentDeck) return;
        setState(prev => {
            const nextIndex = (prev.currentCardIndex + 1) % currentDeck.cards.length;
            return {
                ...prev,
                currentCardIndex: nextIndex,
                isFlipped: false
            };
        });
    }, [currentDeck]);

    const handleShuffle = useCallback(() => {
        if (!currentDeck) return;
        setState(prev => ({
            ...prev,
            shuffledOrder: getShuffledIndices(currentDeck.cards.length),
            currentCardIndex: 0,
            isFlipped: false
        }));
    }, [currentDeck]);

    const handleSave = useCallback(() => {
         if (currentCard) {
            console.log("Saved card:", currentCard.id);
        }
    }, [currentDeck]); // Removed currentCard from dependency to avoid loop? No, it's computed.


    if (loading) {
        return (
            <MobileLayout className="bg-paper-dark min-h-screen flex items-center justify-center font-sans text-ink">
                 <div className="flex flex-col items-center gap-3">
                    <div className="animate-spin rounded-full h-10 w-10 border-[3px] border-primary/20 border-t-primary"></div>
                    <p className="text-subtle font-medium text-sm">Desteler yükleniyor...</p>
                 </div>
            </MobileLayout>
        );
    }

    if (!currentDeck) {
         // Could not load deck and no fallback
         return <Navigate to="/decks" replace />;
    }
    
    // Safety check for empty decks
    if (currentDeck.cards.length === 0) {
         return (
            <MobileLayout className="bg-paper-dark min-h-screen flex flex-col font-sans text-ink">
                <header className="flex items-center px-6 pt-12 pb-4">
                     <button onClick={() => navigate('/decks')} className="text-subtle hover:text-ink">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                </header>
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <span className="material-symbols-outlined text-4xl text-subtle mb-3">content_paste_off</span>
                    <p className="text-ink font-medium mb-1">{currentDeck.title}</p>
                    <p className="text-subtle text-sm">Bu destede henüz kart bulunmuyor.</p>
                </div>
            </MobileLayout>
         );
    }

    const currentCardId = state.shuffledOrder[state.currentCardIndex];
    // Fallback significantly refactored to ensure safety
    const currentCard = currentDeck.cards[currentCardId] || currentDeck.cards[0];

    return (
        <MobileLayout className="bg-paper-dark min-h-screen flex flex-col overflow-hidden font-sans text-ink relative">
            {/* Header */}
            <header className="flex items-center px-6 pt-12 pb-4 justify-between z-10 w-full shrink-0">
                <button
                    onClick={() => navigate('/decks')}
                    className="text-subtle hover:text-ink transition-colors w-11 h-11 flex items-center justify-center rounded-xl bg-surface-card hover:bg-primary-light border border-border-subtle shadow-sm"
                >
                    <span className="material-symbols-outlined text-[22px]">arrow_back</span>
                </button>

                <ProgressBar
                    current={state.currentCardIndex}
                    total={currentDeck.cards.length}
                    label={currentDeck.title}
                />

                <button className="text-subtle hover:text-ink transition-colors w-11 h-11 flex items-center justify-center rounded-xl bg-surface-card hover:bg-primary-light border border-border-subtle shadow-sm">
                    <span className="material-symbols-outlined text-[22px]">more_horiz</span>
                </button>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 relative flex flex-col items-center justify-center w-full px-6 pb-8 perspective-1000 z-0">
                {currentCard && (
                    <StudyCard
                        card={currentCard}
                        isFlipped={state.isFlipped}
                        onFlip={handleFlip}
                        themeColor={currentDeck.themeColor}
                    />
                )}
            </main>

            {/* Footer Controls */}
            <Controls
                onNext={handleNext}
                onShuffle={handleShuffle}
                onSave={handleSave}
            />

            {/* Bottom spacer for safe area on mobile */}
            <div className="h-4 w-full" />
        </MobileLayout>
    );
};

export default StudySession;

