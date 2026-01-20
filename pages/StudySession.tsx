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

    const currentDeck = deckId ? DECKS[deckId] : undefined;
    const STORAGE_KEY = currentDeck ? `flashcards:v1:${currentDeck.id}` : '';

    const [state, setState] = useState<StudyState>(() => {
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
                const savedVersion = parsed.version || 0;
                const currentVersion = currentDeck.version || 0;

                if (savedVersion === currentVersion && parsed.shuffledOrder.length === currentDeck.cards.length) {
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

        return {
            deckId: currentDeck.id,
            currentCardIndex: 0,
            shuffledOrder: getShuffledIndices(currentDeck.cards.length),
            isFlipped: false,
        };
    });

    if (!currentDeck) {
        return <Navigate to="/decks" replace />;
    }

    useEffect(() => {
        if (!currentDeck) return;

        const stateToSave = {
            ...state,
            isFlipped: false,
            version: currentDeck.version
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }, [state, currentDeck, STORAGE_KEY]);

    const handleFlip = useCallback(() => {
        setState(prev => ({ ...prev, isFlipped: !prev.isFlipped }));
    }, []);

    const handleNext = useCallback(() => {
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
        setState(prev => ({
            ...prev,
            shuffledOrder: getShuffledIndices(currentDeck.cards.length),
            currentCardIndex: 0,
            isFlipped: false
        }));
    }, [currentDeck]);

    const handleSave = useCallback(() => {
        console.log("Saved card:", currentCard.id);
    }, [currentDeck]);

    const currentCardId = state.shuffledOrder[state.currentCardIndex];
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
