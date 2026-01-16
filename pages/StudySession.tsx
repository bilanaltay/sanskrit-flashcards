import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';
import { SAMPLE_DECK } from '../constants';
import { StudyState } from '../types';
import { getShuffledIndices } from '../utils/shuffle';
import { ProgressBar } from '../components/ProgressBar';
import { StudyCard } from '../components/StudyCard';
import { Controls } from '../components/Controls';

const STORAGE_KEY = 'sanskrit-flow-state';

const StudySession: React.FC = () => {
    const navigate = useNavigate();

    // State initialization
    const [state, setState] = useState<StudyState>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Simple validation to ensure deck matches
                if (parsed.deckId === SAMPLE_DECK.id && parsed.shuffledOrder.length === SAMPLE_DECK.cards.length) {
                    return parsed;
                }
            } catch (e) {
                console.error("Failed to parse saved state", e);
            }
        }
        // Default initial state
        return {
            deckId: SAMPLE_DECK.id,
            currentCardIndex: 0,
            shuffledOrder: getShuffledIndices(SAMPLE_DECK.cards.length),
            isFlipped: false,
        };
    });

    // Persist state changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    // Handlers
    const handleFlip = useCallback(() => {
        setState(prev => ({ ...prev, isFlipped: !prev.isFlipped }));
    }, []);

    const handleNext = useCallback(() => {
        setState(prev => {
            // Loop back to start if at end
            const nextIndex = (prev.currentCardIndex + 1) % SAMPLE_DECK.cards.length;
            return {
                ...prev,
                currentCardIndex: nextIndex,
                isFlipped: false // Reset flip on next
            };
        });
    }, []);

    const handleShuffle = useCallback(() => {
        // Re-shuffle and reset index to 0
        setState(prev => ({
            ...prev,
            shuffledOrder: getShuffledIndices(SAMPLE_DECK.cards.length),
            currentCardIndex: 0,
            isFlipped: false
        }));
    }, []);

    const handleSave = useCallback(() => {
        // Just a visual interaction for this demo
        // In a real app, this would add to a favorites list
        console.log("Saved card:", currentCard.id);
    }, []);

    // Derived state
    const currentCardId = state.shuffledOrder[state.currentCardIndex];
    // Safe lookup incase data changed
    const currentCard = SAMPLE_DECK.cards[currentCardId] || SAMPLE_DECK.cards[0];

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
                    total={SAMPLE_DECK.cards.length}
                    label={SAMPLE_DECK.title}
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
