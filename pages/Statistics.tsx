import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';
import { DECKS } from '../constants';

const Statistics: React.FC = () => {
    const navigate = useNavigate();

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
        <MobileLayout className="bg-paper-dark font-sans text-ink flex flex-col relative">
            {/* Header */}
            <header className="flex items-end justify-between px-6 pt-14 pb-6 bg-paper-dark z-10 sticky top-0 shrink-0">
                <div className="flex flex-col gap-1">
                    <h1 className="text-[28px] font-semibold text-ink tracking-tight leading-tight">İstatistikler</h1>
                    <p className="text-sm text-subtle font-medium">Gelişim raporun</p>
                </div>
                <button
                    onClick={() => navigate('/settings')}
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-surface-card hover:bg-primary-light transition-all duration-200 shadow-sm border border-border-subtle"
                >
                    <span className="material-symbols-outlined text-ink-light text-[22px]">settings</span>
                </button>
            </header>

            <main className="flex-1 overflow-y-auto px-6 pb-32 scroll-smooth z-0">
                {/* Summary Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-surface-card rounded-2xl p-6 shadow-card border border-border-subtle flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-bold text-primary mb-2">{stats.startedDecks}</span>
                        <span className="text-xs uppercase tracking-wider text-subtle font-semibold">Aktif Deste</span>
                    </div>
                    <div className="bg-surface-card rounded-2xl p-6 shadow-card border border-border-subtle flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-bold text-primary mb-2">{stats.learnedCards}</span>
                        <span className="text-xs uppercase tracking-wider text-subtle font-semibold">Çalışılan Kart</span>
                    </div>
                </div>

                {/* Daily Streak */}
                <div className="bg-surface-card rounded-2xl p-6 shadow-card border border-border-subtle mb-8">
                    <div className="flex justify-between items-start mb-5">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-subtle font-semibold mb-2">Günlük Seri</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold text-primary">5</span>
                                <span className="text-base text-subtle font-medium">gün</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-between">
                        {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day, i) => (
                            <div key={day} className="flex flex-col items-center gap-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${i < 5 ? 'bg-primary text-white shadow-sm' : 'bg-paper-dark text-subtle border border-border-subtle'}`}>
                                    {i < 5 && <span className="material-symbols-outlined text-[16px]">check</span>}
                                </div>
                                <span className="text-[10px] font-semibold text-subtle uppercase">{day.charAt(0)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Title */}
                <h2 className="text-sm font-semibold text-ink tracking-wide uppercase mb-4 px-1">Deste İlerlemesi</h2>

                {/* Deck Progress Cards */}
                <div className="flex flex-col gap-4">
                    {stats.deckStats.map(deck => (
                        <div key={deck.id} className="bg-surface-card rounded-2xl p-5 border border-border-subtle shadow-card">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${deck.themeColor || 'from-gray-100 to-gray-200'} flex items-center justify-center text-ink shadow-sm`}>
                                        <span className="material-symbols-outlined text-[22px]">leaderboard</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-ink text-base">{deck.title}</p>
                                        <p className="text-xs text-subtle font-medium mt-0.5">{deck.current} / {deck.cards.length} kart</p>
                                    </div>
                                </div>
                                <span className="text-2xl font-bold text-primary">
                                    %{deck.progress}
                                </span>
                            </div>
                            <div className="w-full h-2 bg-paper-dark rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r ${deck.themeColor || 'from-primary to-accent'} rounded-full transition-all duration-700 ease-out`}
                                    style={{ width: `${deck.progress}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="absolute bottom-0 left-0 right-0 mx-4 mb-4 bg-surface-card/95 backdrop-blur-xl rounded-2xl border border-border-subtle shadow-float px-6 py-3 flex items-center justify-around z-20">
                <button
                    onClick={() => navigate('/decks')}
                    className="flex flex-col items-center justify-center gap-1.5 text-subtle hover:text-primary transition-colors w-16 py-1 group"
                >
                    <span className="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">grid_view</span>
                    <span className="text-[11px] font-medium tracking-wide">DESTELER</span>
                </button>
                <button
                    onClick={() => navigate('/favorites')}
                    className="flex flex-col items-center justify-center gap-1.5 text-subtle hover:text-primary transition-colors w-16 py-1 group"
                >
                    <span className="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">favorite</span>
                    <span className="text-[11px] font-medium tracking-wide">FAVORİLER</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-1.5 text-primary w-16 py-1">
                    <span className="material-symbols-outlined text-[26px]">bar_chart</span>
                    <span className="text-[11px] font-semibold tracking-wide">İSTATİSTİK</span>
                </button>
            </nav>
        </MobileLayout>
    );
};

export default Statistics;
