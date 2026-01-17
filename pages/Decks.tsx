import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';
import { DECKS } from '../constants'; // ... (inside the component)


const Decks: React.FC = () => {
    const navigate = useNavigate();

    return (
        <MobileLayout className="bg-[#f0ede6] font-lato text-text-main flex flex-col relative">
            <header className="flex items-end justify-between px-6 pt-12 pb-4 bg-[#f0ede6] z-10 sticky top-0 shrink-0">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-playfair font-semibold text-text-main tracking-tight">Desteler</h2>
                    <p className="text-xs text-primary-decks font-medium tracking-widest uppercase mt-1">Sanskritçe Kartlar</p>
                </div>
                <button
                    onClick={() => navigate('/settings')}
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors group"
                >
                    <span className="material-symbols-outlined text-text-muted group-hover:text-primary-decks transition-colors">settings</span>
                </button>
            </header>
            <main className="flex-1 overflow-y-auto px-6 pb-28 scroll-smooth z-0">
                <div className="mb-6 mt-2 flex w-full items-center rounded-2xl bg-white border border-stone-200 h-12 shadow-sm transition-all focus-within:ring-1 focus-within:ring-primary-decks/30 focus-within:border-primary-decks/30">
                    <div className="flex items-center justify-center pl-4 pr-3 text-stone-400">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                    </div>
                    <input className="w-full bg-transparent border-none text-base text-text-main placeholder:text-stone-400 focus:ring-0 focus:outline-none h-full font-playfair italic" placeholder="Destelerde ara..." />
                </div>
                <div className="mt-4 flex flex-col gap-6">
                    {Object.values(DECKS).map((deck) => {
                        return (
                            <div
                                key={deck.id}
                                onClick={() => navigate(`/study/${deck.id}`)}
                                className={`group relative flex flex-col bg-gradient-to-br ${deck.themeColor || 'from-[#fed9b7] to-[#f07e6e]'} rounded-xl p-5 shadow-sm border border-black/5 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer`}
                            >
                                <div className="relative flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center justify-center rounded-full border border-white/20 bg-white/30 shadow-sm shrink-0 size-12 backdrop-blur-sm">
                                            <span className="material-symbols-outlined text-[22px] text-[#2d2a2a]">menu_book</span>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-xl font-playfair font-medium leading-tight text-[#2d2a2a]">{deck.title}</p>
                                            <p className="text-[#2d2a2a]/70 text-xs mt-1 font-medium">{deck.description} • {deck.cards.length} Kart</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
            <nav className="absolute bottom-0 w-full bg-[#f0ede6]/90 backdrop-blur-md border-t border-stone-200/60 px-8 py-2 pb-6 flex items-center justify-between z-20">
                <button className="flex flex-col items-center justify-center gap-1 text-primary-decks w-16">
                    <span className="material-symbols-outlined text-[26px]">grid_view</span>
                    <span className="text-[10px] font-bold tracking-wide mt-0.5">DESTELER</span>
                </button>
                <button
                    onClick={() => navigate('/favorites')}
                    className="flex flex-col items-center justify-center gap-1 text-stone-400 hover:text-primary-decks transition-colors w-16 group">
                    <span className="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">favorite</span>
                    <span className="text-[10px] font-medium tracking-wide mt-0.5">FAVORİLER</span>
                </button>
                <button
                    onClick={() => navigate('/statistics')}
                    className="flex flex-col items-center justify-center gap-1 text-stone-400 hover:text-primary-decks transition-colors w-16 group">
                    <span className="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">bar_chart</span>
                    <span className="text-[10px] font-medium tracking-wide mt-0.5">İSTATİSTİK</span>
                </button>
            </nav>
        </MobileLayout>
    );
};

export default Decks;
