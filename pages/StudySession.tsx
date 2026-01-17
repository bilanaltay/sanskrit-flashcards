import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';
import { DECKS } from '../constants';
import { StudyState } from '../types';
import { getShuffledIndices } from '../utils/shuffle';
import { ProgressBar } from '../components/ProgressBar';
import { StudyCard } from '../components/StudyCard';
import { Controls } from '../components/Controls';

const StudySession: React.FC = () => {
    const navigate = useNavigate();
    const { deckId } = useParams<{ deckId: string }>();

    // 1. Resolve Deck
    const currentDeck = deckId ? DECKS[deckId] : undefined;

    // 2. Storage Key Construction
    const STORAGE_KEY = currentDeck ? `flashcards:v1:${currentDeck.id}` : '';

    // State initialization
    const [state, setState] = useState<StudyState>(() => {
        // Fallback for invalid deck, handled by render redirect
        if (!currentDeck) {
            return {
                deckId: '',
                currentCardIndex: 0,
                shuffledOrder: [],
                isFlipped: false,
            };
        }

        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);

                // Version Check Strategy:
                // If versions match, trust the saved state.
                // If mismatch (undefined vs 1, or 1 vs 2), perform soft reset
                // Soft Reset: Re-shuffle, reset index, but we COULD keep 'learned' stats if we had them.
                // For now, simpler approach: if version mismatch, just reset flow to ensure all new cards are seen.
                const savedVersion = parsed.version || 0;
                const currentVersion = currentDeck.version || 0;

                if (savedVersion === currentVersion && parsed.shuffledOrder.length === currentDeck.cards.length) {
                    // Ensure non-persisted state is clean
                    return {
                        ...parsed,
                        isFlipped: false
                    };
                } else {
                    console.log(`Version mismatch or deck update (Saved: ${savedVersion}, Current: ${currentVersion}). Resetting state.`);
                }
            } catch (e) {
                console.error("Failed to parse saved state", e);
            }
        }

        // Default initial state
        return {
            deckId: currentDeck.id,
            currentCardIndex: 0,
            shuffledOrder: getShuffledIndices(currentDeck.cards.length),
            isFlipped: false,
        };
    });

    // Handle invalid deck redirect
    if (!currentDeck) {
        return <Navigate to="/decks" replace />;
    }

    // Persist state changes
    useEffect(() => {
        if (!currentDeck) return;

        // Exclude isFlipped from persistence
        const stateToSave = {
            ...state,
            isFlipped: false,
            version: currentDeck.version // Save current version
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }, [state, currentDeck, STORAGE_KEY]);

    // Handlers
    const handleFlip = useCallback(() => {
        setState(prev => ({ ...prev, isFlipped: !prev.isFlipped }));
    }, []);

    const handleNext = useCallback(() => {
        setState(prev => {
            // Loop back to start if at end
            const nextIndex = (prev.currentCardIndex + 1) % currentDeck.cards.length;
            return {
                ...prev,
                currentCardIndex: nextIndex,
                isFlipped: false // Reset flip on next
            };
        });
    }, [currentDeck]);

    const handleShuffle = useCallback(() => {
        // Re-shuffle and reset index to 0
        setState(prev => ({
            ...prev,
            shuffledOrder: getShuffledIndices(currentDeck.cards.length),
            currentCardIndex: 0,
            isFlipped: false
        }));
    }, [currentDeck]);

    const handleSave = useCallback(() => {
        // Just a visual interaction for this demo
        // In a real app, this would add to a favorites list
        console.log("Saved card:", currentCard.id);
    }, [currentDeck]); // Warning: currentCard dep missing in original but derived from state

    // Derived state
    const currentCardId = state.shuffledOrder[state.currentCardIndex];
    // Safe lookup incase data changed
    const currentCard = currentDeck.cards[currentCardId] || currentDeck.cards[0];

    return (
        <MobileLayout className="bg-[#f0ede6] min-h-screen flex flex-col overflow-hidden font-sans text-ink selection:bg-accent selection:text-white relative">

            {/* Header */}
            <header className="flex items-center px-6 pt-12 pb-4 justify-between z-10 w-full shrink-0">
                <button
                    onClick={() => navigate('/decks')}
                    className="text-subtle hover:text-ink transition-colors size-10 flex items-center justify-center rounded-full hover:bg-black/5 active:bg-black/10"
                >
                    <span className="material-symbols-outlined !text-[24px]">arrow_back</span>
                </button>

                <ProgressBar
                    current={state.currentCardIndex}
                    total={currentDeck.cards.length}
                    label={currentDeck.title}
                />

                <button className="text-subtle hover:text-ink transition-colors size-10 flex items-center justify-center rounded-full hover:bg-black/5 active:bg-black/10">
                    <span className="material-symbols-outlined !text-[24px]">more_horiz</span>
                </button>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 relative flex flex-col items-center justify-center w-full px-8 pb-8 perspective-1000 z-0">
                <StudyCard
                    card={currentCard}
                    isFlipped={state.isFlipped}
                    onFlip={handleFlip}
                    themeColor={currentDeck.themeColor}
                />
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
