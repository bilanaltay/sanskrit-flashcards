import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';
import { DECKS } from '../constants';

const Statistics: React.FC = () => {
    const navigate = useNavigate();

    // Calculate stats purely from localStorage
    const stats = useMemo(() => {
        let totalCards = 0;
        let learnedCards = 0;
        let startedDecks = 0;

        const deckStats = Object.values(DECKS).map(deck => {
            const storageKey = `flashcards:v1:${deck.id}`;
            const saved = localStorage.getItem(storageKey);
            let progress = 0;
            let current = 0;

            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    current = parsed.currentCardIndex || 0;
                    // Simple progress calculation: index / length. 
                    // Note: This is an approximation since shuffle changes order.
                    // For better stats, we'd track "knownCards" set.
                    // For now, index is a fair proxy for "progress through the stack".
                    progress = Math.min(100, Math.round((current / deck.cards.length) * 100));
                    if (current > 0) startedDecks++;
                    learnedCards += current;
                } catch (e) {
                    console.error(e);
                }
            }

            totalCards += deck.cards.length;

            return {
                ...deck,
                progress,
                current
            };
        });

        const overallProgress = Math.round((learnedCards / totalCards) * 100) || 0;

        return {
            deckStats,
            totalCards,
            learnedCards,
            startedDecks,
            overallProgress
        };
    }, []);

    return (
        <MobileLayout className="bg-[#f0ede6] font-lato text-text-main flex flex-col relative">
            <header className="flex items-end justify-between px-6 pt-12 pb-4 bg-[#f0ede6] z-10 sticky top-0 shrink-0">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-playfair font-semibold text-text-main tracking-tight">İstatistikler</h2>
                    <p className="text-xs text-primary-decks font-medium tracking-widest uppercase mt-1">Gelişim Raporu</p>
                </div>
                <button
                    onClick={() => navigate('/settings')}
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors group"
                >
                    <span className="material-symbols-outlined text-text-muted group-hover:text-primary-decks transition-colors">settings</span>
                </button>
            </header>
            <main className="flex-1 overflow-y-auto px-6 pb-28 scroll-smooth z-0">

                {/* Summary Cards */}
                <div className="grid grid-cols-2 gap-4 mt-2 mb-8">
                    <div className="bg-white card-texture-fav rounded-[2px] p-5 shadow-card border border-stone-100 flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-playfair font-bold text-primary-fav mb-1">{stats.startedDecks}</span>
                        <span className="text-[10px] items-center uppercase tracking-widest text-ink-light font-bold">Aktif Deste</span>
                    </div>
                    <div className="bg-white card-texture-fav rounded-[2px] p-5 shadow-card border border-stone-100 flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-playfair font-bold text-primary-fav mb-1">{stats.learnedCards}</span>
                        <span className="text-[10px] items-center uppercase tracking-widest text-ink-light font-bold">Çalışılan Kart</span>
                    </div>
                </div>

                {/* Daily Streak Bar */}
                <div className="bg-white card-texture-fav rounded-[2px] p-5 shadow-card border border-stone-100 mb-8 relative overflow-hidden">
                    <div className="flex justify-between items-end mb-4 relative z-10">
                        <div>
                            <p className="text-[10px] items-center uppercase tracking-widest text-ink-light font-bold mb-1">GÜNLÜK SERİ</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-playfair font-bold text-primary-fav">5</span>
                                <span className="text-sm font-playfair italic text-ink-light">gün</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day, i) => (
                                <div key={day} className="flex flex-col items-center gap-1">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border ${i < 5 ? 'bg-primary-fav text-white border-primary-fav' : 'bg-transparent text-stone-300 border-stone-200'}`}>
                                        {i < 5 && <span className="material-symbols-outlined text-[14px]">check</span>}
                                    </div>
                                    <span className="text-[9px] font-bold text-stone-300 uppercase tracking-tighter">{day.charAt(0)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <h3 className="text-sm font-bold text-ink-light tracking-widest uppercase mb-4 pl-1">Deste İlerlemesi</h3>

                <div className="flex flex-col gap-4">
                    {stats.deckStats.map(deck => (
                        <div key={deck.id} className="bg-white card-texture-fav rounded-[2px] p-4 border border-stone-100 shadow-card">
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${deck.themeColor || 'from-gray-100 to-gray-200'} flex items-center justify-center text-[#2d2a2a] shadow-inner`}>
                                        <span className="material-symbols-outlined text-[18px]">leaderboard</span>
                                    </div>
                                    <div>
                                        <p className="font-playfair font-medium text-ink">{deck.title}</p>
                                        <p className="text-[10px] text-ink-light font-bold tracking-wide">{deck.current} / {deck.cards.length} KART</p>
                                    </div>
                                </div>
                                <span className="text-xl font-playfair font-bold text-primary-fav opacity-90">
                                    %{deck.progress}
                                </span>
                            </div>
                            <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r ${deck.themeColor || 'from-[#f07e6e] to-[#f07e6e]'} rounded-full opacity-80 transition-all duration-1000`}
                                    style={{ width: `${deck.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>

            <nav className="absolute bottom-0 w-full bg-texture-fav/90 backdrop-blur-md border-t border-stone-200/60 px-8 py-2 pb-6 flex items-center justify-between z-20">
                <button
                    onClick={() => navigate('/decks')}
                    className="flex flex-col items-center justify-center gap-1 text-stone-400 hover:text-primary-decks transition-colors w-16 group">
                    <span className="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">grid_view</span>
                    <span className="text-[10px] font-medium tracking-wide mt-0.5">DESTELER</span>
                </button>
                <button
                    onClick={() => navigate('/favorites')}
                    className="flex flex-col items-center justify-center gap-1 text-stone-400 hover:text-primary-decks transition-colors w-16 group">
                    <span className="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">favorite</span>
                    <span className="text-[10px] font-medium tracking-wide mt-0.5">FAVORİLER</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-1 text-primary-decks w-16">
                    <span className="material-symbols-outlined text-[26px]">bar_chart</span>
                    <span className="text-[10px] font-bold tracking-wide mt-0.5">İSTATİSTİK</span>
                </button>
            </nav>
        </MobileLayout>
    );
};

export default Statistics;
