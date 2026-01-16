import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';

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

                <div className="flex flex-col gap-6">
                    <div
                        onClick={() => navigate('/flashcard')}
                        className="group relative flex flex-col bg-gradient-to-br from-[#fed9b7] to-[#f07e6e] rounded-xl p-5 shadow-sm border border-black/5 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer"
                    >
                        <div className="relative flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center rounded-full border border-white/20 bg-white/30 shadow-sm shrink-0 size-12 backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-[22px] text-[#2d2a2a]">menu_book</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-xl font-playfair font-medium leading-tight text-[#2d2a2a]">Sanskrit Sözlük</p>
                                    <p className="text-[#2d2a2a]/70 text-xs mt-1 font-medium">500+ Kelime • Temel</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-2">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-[10px] text-[#2d2a2a]/60 font-bold tracking-wider uppercase">İlerleme</span>
                                <span className="text-sm font-playfair italic text-[#2d2a2a]">%80</span>
                            </div>
                            <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                                <div className="h-full bg-[#2d2a2a] rounded-full opacity-80" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative flex flex-col bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] rounded-xl p-5 shadow-sm border border-black/5 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer">
                        <div className="relative flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center rounded-full border border-white/20 bg-white/30 shadow-sm shrink-0 size-12 backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-[22px] text-[#2d2a2a]">self_improvement</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-xl font-playfair font-medium leading-tight text-[#2d2a2a]">Çakralar</p>
                                    <p className="text-[#2d2a2a]/70 text-xs mt-1 font-medium">7 Enerji Merkezi • Teori</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-2">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-[10px] text-[#2d2a2a]/60 font-bold tracking-wider uppercase">İlerleme</span>
                                <span className="text-sm font-playfair italic text-[#2d2a2a]">%45</span>
                            </div>
                            <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                                <div className="h-full bg-[#2d2a2a] rounded-full opacity-80" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative flex flex-col bg-gradient-to-br from-[#f6d365] to-[#fda085] rounded-xl p-5 shadow-sm border border-black/5 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer">
                        <div className="relative flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center rounded-full border border-white/20 bg-white/30 shadow-sm shrink-0 size-12 backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-[22px] text-[#2d2a2a]">back_hand</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-xl font-playfair font-medium leading-tight text-[#2d2a2a]">Mudralar</p>
                                    <p className="text-[#2d2a2a]/70 text-xs mt-1 font-medium">El Yogasının Gücü</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-2">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-[10px] text-[#2d2a2a]/60 font-bold tracking-wider uppercase">İlerleme</span>
                                <span className="text-sm font-playfair italic text-[#2d2a2a]">%12</span>
                            </div>
                            <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                                <div className="h-full bg-[#2d2a2a] rounded-full opacity-80" style={{ width: '12%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative flex flex-col bg-gradient-to-br from-[#e6b980] to-[#eacda3] rounded-xl p-5 shadow-sm border border-black/5 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer">
                        <div className="relative flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center rounded-full border border-white/20 bg-white/30 shadow-sm shrink-0 size-12 backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-[22px] text-[#2d2a2a]">fitness_center</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-xl font-playfair font-medium leading-tight text-[#2d2a2a]">Asanalar</p>
                                    <p className="text-[#2d2a2a]/70 text-xs mt-1 font-medium">Temel Duruşlar</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-2">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-[10px] text-[#2d2a2a]/60 font-bold tracking-wider uppercase">İlerleme</span>
                                <span className="text-sm font-playfair italic text-[#2d2a2a]">%5</span>
                            </div>
                            <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                                <div className="h-full bg-[#2d2a2a] rounded-full opacity-80" style={{ width: '5%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <nav className="absolute bottom-0 w-full bg-[#f0ede6]/90 backdrop-blur-md border-t border-stone-200/60 px-8 py-2 pb-6 flex items-center justify-between z-20">
                <button className="flex flex-col items-center justify-center gap-1 text-primary-decks w-16">
                    <span className="material-symbols-outlined text-[26px]">grid_view</span>
                    <span className="text-[10px] font-bold tracking-wide mt-0.5">DESTELER</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-1 text-stone-400 hover:text-primary-decks transition-colors w-16 group">
                    <span className="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">bar_chart</span>
                    <span className="text-[10px] font-medium tracking-wide mt-0.5">İSTATİSTİK</span>
                </button>
                <button
                    onClick={() => navigate('/settings')}
                    className="flex flex-col items-center justify-center gap-1 text-stone-400 hover:text-primary-decks transition-colors w-16 group">
                    <span className="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">person</span>
                    <span className="text-[10px] font-medium tracking-wide mt-0.5">PROFİL</span>
                </button>
            </nav>
        </MobileLayout>
    );
};

export default Decks;
