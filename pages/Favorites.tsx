import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';

const Favorites: React.FC = () => {
    const navigate = useNavigate();

    return (
        <MobileLayout className="bg-texture-fav text-ink font-noto-serif antialiased h-full overflow-hidden flex flex-col relative border-x border-stone-200/50">
            <header className="pt-6 pb-2 px-6 flex items-center justify-between z-20 sticky top-0 bg-texture-fav/90 backdrop-blur-sm shrink-0">
                <button
                    onClick={() => navigate(-1)}
                    className="text-ink-light hover:text-primary-fav transition-colors p-2 -ml-2 rounded-full hover:bg-stone-100"
                >
                    <span className="material-symbols-outlined text-2xl">arrow_back</span>
                </button>
                <h1 className="font-dancing text-3xl text-primary-fav tracking-wide">Favoriler</h1>
                <div className="w-10"></div>
            </header>
            <div className="px-6 py-2 shrink-0">
                <div className="relative border-b border-stone-300 focus-within:border-primary-fav transition-colors">
                    <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-stone-400 text-[20px]">search</span>
                    <input className="w-full bg-transparent border-none py-2 pl-8 pr-4 text-ink placeholder:text-stone-400 focus:ring-0 font-noto-sans text-sm" placeholder="Ara..." />
                </div>
            </div>
            <main className="flex-1 overflow-y-auto no-scrollbar px-6 py-6 space-y-6">
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
            <div className="h-8 w-full bg-gradient-to-t from-paper via-paper/50 to-transparent pointer-events-none sticky bottom-0 shrink-0"></div>
        </MobileLayout>
    );
};

export default Favorites;
