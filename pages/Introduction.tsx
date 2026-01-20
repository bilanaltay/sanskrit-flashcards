import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';

const Introduction: React.FC = () => {
    const navigate = useNavigate();

    return (
        <MobileLayout className="bg-paper font-sans text-ink">
            <div className="flex flex-col flex-1 h-full min-h-0 overflow-hidden">
                {/* Top Spacer */}
                <div className="h-12 w-full shrink-0" />
                
                {/* Main Content */}
                <div className="flex flex-col flex-1 items-center justify-center overflow-y-auto no-scrollbar px-8">
                    {/* Image Card */}
                    <div className="w-full max-w-[320px] mb-10 shrink-0">
                        <div className="w-full bg-surface-card flex flex-col items-center justify-center rounded-2xl aspect-[3/4] shadow-card relative p-4 border border-border-subtle overflow-hidden">
                            <div 
                                className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl grayscale opacity-90 contrast-125 mix-blend-multiply" 
                                style={{ 
                                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoBmnlTHF7dQULYWW02Tq6wcckCKH_S9cDAa3UV7FuBxPakVKIUaFKodNhtoMxD2PoWdpEjXUVID0ea2coo2AjOnmYoUIZB3nBnANxLZ3JHnt_xDz4sz8Ut_tDPZ3vJIW1ySN1HM5-y6Q-zzLZdpSL0_VdBwKauBRO4UmSQeZfjs9mvq3UJR2kyFbxLyVbu_lWV0M3YVjUsNKw-IFXy2ADZLiQ0weluTv24iFsXzTRFEyVRg3PrDkVGgTexAc1sc_0y1nzrjQW0BQ")', 
                                    backgroundSize: '140%', 
                                    backgroundPosition: 'center 30%' 
                                }}
                            />
                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary opacity-30 rounded-tl-lg" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary opacity-30 rounded-br-lg" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-center text-center shrink-0 mb-8">
                        <h1 className="text-ink tracking-tight text-4xl font-semibold leading-tight mb-4">
                            <span className="text-primary">Sanskrit</span> Öğren
                        </h1>
                        <p className="text-subtle text-base font-medium leading-relaxed max-w-[280px]">
                            Günlük flashcard'larla antik bilgeliği keşfet.
                        </p>
                    </div>

                    {/* Page Indicators */}
                    <div className="flex w-full flex-row items-center justify-center gap-3 py-6 shrink-0">
                        <div className="h-2 w-8 rounded-full bg-primary transition-all" />
                        <div className="h-2 w-2 rounded-full bg-border-subtle transition-all" />
                        <div className="h-2 w-2 rounded-full bg-border-subtle transition-all" />
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-auto w-full pb-10 pt-4 px-8 shrink-0">
                    <button
                        onClick={() => navigate('/auth')}
                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-ink text-white text-lg font-semibold tracking-wide hover:bg-black active:scale-[0.98] transition-all shadow-card"
                    >
                        Başla
                    </button>
                    <button
                        onClick={() => navigate('/auth')}
                        className="flex w-full cursor-pointer items-center justify-center mt-5 h-6 text-subtle hover:text-primary text-sm font-medium transition-colors"
                    >
                        Mevcut hesabına giriş yap
                    </button>
                </div>

                {/* Safe Area Spacer */}
                <div className="h-5 w-full shrink-0" />
            </div>
        </MobileLayout>
    );
};

export default Introduction;
