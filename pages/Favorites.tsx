import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';

// Sample favorites data - in production this would come from state/context
const FAVORITES = [
    { id: 1, sanskrit: 'धर्म', title: 'Dharma', meaning: 'Görev / Yasa' },
    { id: 2, sanskrit: 'शान्ति', title: 'Śānti', meaning: 'Barış / Huzur' },
    { id: 3, sanskrit: 'योग', title: 'Yoga', meaning: 'Birlik' },
    { id: 4, sanskrit: 'कर्म', title: 'Karma', meaning: 'Eylem' },
    { id: 5, sanskrit: 'प्रेम', title: 'Prema', meaning: 'İlahi Aşk' },
];

const Favorites: React.FC = () => {
    const navigate = useNavigate();

    return (
        <MobileLayout className="bg-paper-dark font-sans text-ink flex flex-col relative">
            {/* Header */}
            <header className="bg-paper-dark flex items-end justify-between px-6 pt-14 pb-6 bg-paper z-10 sticky top-0 shrink-0">
                <div className="flex flex-col gap-1">
                    <h1 className="text-[28px] font-semibold text-ink tracking-tight leading-tight">Favoriler</h1>
                    <p className="text-sm text-subtle font-medium">Kaydettiğin kartlar</p>
                </div>
                <button
                    onClick={() => navigate('/settings')}
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-surface-card hover:bg-primary-light transition-all duration-200 shadow-sm border border-border-subtle"
                >
                    <span className="material-symbols-outlined text-ink-light text-[22px]">settings</span>
                </button>
            </header>

            {/* Search Bar */}
            <div className="mx-6 mb-6">
                <div className="flex w-full items-center rounded-xl bg-surface-card border border-border-subtle h-14 shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/40">
                    <div className="flex items-center justify-center pl-5 pr-3 text-subtle">
                        <span className="material-symbols-outlined text-[22px]">search</span>
                    </div>
                    <input 
                        className="w-full bg-transparent border-none py-2 pr-4 text-ink placeholder:text-subtle focus:ring-0 text-base" 
                        placeholder="Favorilerde ara..." 
                    />
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto no-scrollbar px-6 pb-32 space-y-4">
                {FAVORITES.map((item) => (
                    <div 
                        key={item.id} 
                        className="group bg-surface-card rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border-subtle flex items-center gap-5 cursor-pointer hover:-translate-y-0.5"
                    >
                        {/* Sanskrit Character Box */}
                        <div className="flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center border border-border-subtle rounded-xl bg-paper-dark">
                            <span className="text-2xl text-ink font-medium font-sanskrit">{item.sanskrit}</span>
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                            <p className="text-sm text-subtle font-medium">{item.meaning}</p>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center gap-1">
                            <button className="w-10 h-10 flex items-center justify-center text-primary hover:bg-primary-light rounded-xl transition-colors">
                                <span className="material-symbols-outlined text-[22px] filled">favorite</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center text-subtle group-hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-[20px]">arrow_forward_ios</span>
                            </button>
                        </div>
                    </div>
                ))}
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
                <button className="flex flex-col items-center justify-center gap-1.5 text-primary w-16 py-1">
                    <span className="material-symbols-outlined text-[26px] filled">favorite</span>
                    <span className="text-[11px] font-semibold tracking-wide">FAVORİLER</span>
                </button>
                <button
                    onClick={() => navigate('/statistics')}
                    className="flex flex-col items-center justify-center gap-1.5 text-subtle hover:text-primary transition-colors w-16 py-1 group"
                >
                    <span className="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">bar_chart</span>
                    <span className="text-[11px] font-medium tracking-wide">İSTATİSTİK</span>
                </button>
            </nav>
        </MobileLayout>
    );
};

export default Favorites;
