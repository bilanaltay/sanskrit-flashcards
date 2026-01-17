import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';

const Favorites: React.FC = () => {
    const navigate = useNavigate();

    return (
        <MobileLayout className="bg-texture-fav text-ink font-noto-serif antialiased h-full overflow-hidden flex flex-col relative border-x border-stone-200/50">
            <header className="mt-6 pt-6 pb-2 px-6 flex items-center justify-between z-20 sticky top-0 bg-texture-fav/90 backdrop-blur-sm shrink-0">
                <div className="flex flex-col">
                    <h2 className="font-dancing text-3xl text-primary-fav tracking-wide">Favoriler</h2>
                    <p className="text-xs text-primary-decks font-medium tracking-widest uppercase mt-1">Favori Sanskrit Kartlar</p>
                </div>
                <button
                    onClick={() => navigate('/settings')}
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors group"
                >
                    <span className="material-symbols-outlined text-text-muted group-hover:text-primary-decks transition-colors">settings</span>
                </button>
            </header>
            <div className="mt-6 mx-6 py-2 shrink-0">
                <div className="relative border-b border-stone-300 focus-within:border-primary-fav transition-colors">
                    <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-stone-400 text-[20px]">search</span>
                    <input className="w-full bg-transparent border-none py-2 pl-8 pr-4 text-ink placeholder:text-stone-400 focus:ring-0 font-noto-sans text-sm" placeholder="Ara..." />
                </div>
            </div>
            <main className="flex-1 overflow-y-auto no-scrollbar px-6 pt-6 pb-28 space-y-6">
                {/* Dharma */}
                <div className="group bg-white card-texture-fav rounded-[2px] p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-stone-100 flex items-center gap-5 relative">
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-stone-200"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-stone-200"></div>
                    <div className="flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center border border-stone-100 rounded-sm bg-stone-50/50">
                        <span className="text-2xl text-ink font-medium font-sanskrit">धर्म</span>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h3 className="font-dancing text-2xl text-primary-fav mb-1">Dharma</h3>
                        <p className="text-xs font-noto-sans text-ink-light tracking-wide uppercase">Görev / Yasa</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center text-primary-fav/40 hover:text-primary-fav transition-colors">
                            <span className="material-symbols-outlined text-[20px] filled">favorite</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-stone-300 group-hover:text-primary-fav transition-colors">
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </button>
                    </div>
                </div>

                {/* Santi */}
                <div className="group bg-white card-texture-fav rounded-[2px] p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-stone-100 flex items-center gap-5 relative">
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-stone-200"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-stone-200"></div>
                    <div className="flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center border border-stone-100 rounded-sm bg-stone-50/50">
                        <span className="text-2xl text-ink font-medium font-sanskrit">शान्ति</span>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h3 className="font-dancing text-2xl text-primary-fav mb-1">Śānti</h3>
                        <p className="text-xs font-noto-sans text-ink-light tracking-wide uppercase">Barış / Huzur</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center text-primary-fav/40 hover:text-primary-fav transition-colors">
                            <span className="material-symbols-outlined text-[20px] filled">favorite</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-stone-300 group-hover:text-primary-fav transition-colors">
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </button>
                    </div>
                </div>

                {/* Yoga */}
                <div className="group bg-white card-texture-fav rounded-[2px] p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-stone-100 flex items-center gap-5 relative">
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-stone-200"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-stone-200"></div>
                    <div className="flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center border border-stone-100 rounded-sm bg-stone-50/50">
                        <span className="text-2xl text-ink font-medium font-sanskrit">योग</span>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h3 className="font-dancing text-2xl text-primary-fav mb-1">Yoga</h3>
                        <p className="text-xs font-noto-sans text-ink-light tracking-wide uppercase">Birlik</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center text-primary-fav/40 hover:text-primary-fav transition-colors">
                            <span className="material-symbols-outlined text-[20px] filled">favorite</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-stone-300 group-hover:text-primary-fav transition-colors">
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </button>
                    </div>
                </div>

                {/* Karma */}
                <div className="group bg-white card-texture-fav rounded-[2px] p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-stone-100 flex items-center gap-5 relative">
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-stone-200"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-stone-200"></div>
                    <div className="flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center border border-stone-100 rounded-sm bg-stone-50/50">
                        <span className="text-2xl text-ink font-medium font-sanskrit">कर्म</span>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h3 className="font-dancing text-2xl text-primary-fav mb-1">Karma</h3>
                        <p className="text-xs font-noto-sans text-ink-light tracking-wide uppercase">Eylem</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center text-primary-fav/40 hover:text-primary-fav transition-colors">
                            <span className="material-symbols-outlined text-[20px] filled">favorite</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-stone-300 group-hover:text-primary-fav transition-colors">
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </button>
                    </div>
                </div>

                {/* Prema */}
                <div className="group bg-white card-texture-fav rounded-[2px] p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-stone-100 flex items-center gap-5 relative">
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-stone-200"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-stone-200"></div>
                    <div className="flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center border border-stone-100 rounded-sm bg-stone-50/50">
                        <span className="text-2xl text-ink font-medium font-sanskrit">प्रेम</span>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h3 className="font-dancing text-2xl text-primary-fav mb-1">Prema</h3>
                        <p className="text-xs font-noto-sans text-ink-light tracking-wide uppercase">İlahi Aşk</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center text-primary-fav/40 hover:text-primary-fav transition-colors">
                            <span className="material-symbols-outlined text-[20px] filled">favorite</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-stone-300 group-hover:text-primary-fav transition-colors">
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </button>
                    </div>
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
                    className="flex flex-col items-center justify-center gap-1 text-primary-fav w-16">
                    <span className="material-symbols-outlined text-[26px] filled">favorite</span>
                    <span className="text-[10px] font-bold tracking-wide mt-0.5">FAVORİLER</span>
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

export default Favorites;
