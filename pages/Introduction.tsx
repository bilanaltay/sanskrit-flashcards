import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';

const Introduction: React.FC = () => {
    const navigate = useNavigate();

    return (
        <MobileLayout>
            <div className="flex flex-col flex-1 h-full min-h-0 bg-paper overflow-hidden">
                <div className="h-12 w-full bg-transparent shrink-0"></div>
                <div className="flex flex-col flex-1 items-center justify-center overflow-y-auto no-scrollbar">
                    <div className="@container w-full px-10 mb-8 flex items-center justify-center shrink-0">
                        <div className="w-full bg-white flex flex-col items-center justify-center rounded-sm aspect-[3/4] shadow-card relative p-4 border border-[#e5e0d6]">
                            <div className="w-full h-full bg-center bg-no-repeat bg-cover rounded-sm grayscale opacity-90 contrast-125 mix-blend-multiply" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoBmnlTHF7dQULYWW02Tq6wcckCKH_S9cDAa3UV7FuBxPakVKIUaFKodNhtoMxD2PoWdpEjXUVID0ea2coo2AjOnmYoUIZB3nBnANxLZ3JHnt_xDz4sz8Ut_tDPZ3vJIW1ySN1HM5-y6Q-zzLZdpSL0_VdBwKauBRO4UmSQeZfjs9mvq3UJR2kyFbxLyVbu_lWV0M3YVjUsNKw-IFXy2ADZLiQ0weluTv24iFsXzTRFEyVRg3PrDkVGgTexAc1sc_0y1nzrjQW0BQ")', backgroundSize: '140%', backgroundPosition: 'center 30%' }}>
                            </div>
                            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary-intro opacity-20"></div>
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary-intro opacity-20"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center px-8 pb-4 text-center shrink-0">
                        <h1 className="text-ink-intro tracking-tight text-[36px] font-playfair italic font-medium leading-tight pb-4">
                            Learn <span className="text-primary-intro not-italic">Sanskrit</span>
                        </h1>
                        <p className="text-subtle text-[15px] font-normal leading-relaxed max-w-[280px]">
                            Master ancient wisdom through simple, daily flashcards.
                        </p>
                    </div>
                    <div className="flex w-full flex-row items-center justify-center gap-3 py-8 shrink-0">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-intro transition-all"></div>
                        <div className="h-1.5 w-1.5 rounded-full bg-[#dcd7cd] transition-all"></div>
                        <div className="h-1.5 w-1.5 rounded-full bg-[#dcd7cd] transition-all"></div>
                    </div>
                </div>
                <div className="mt-auto w-full pb-10 pt-4 px-8 bg-paper shrink-0">
                    <button
                        onClick={() => navigate('/auth')}
                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 bg-ink text-white text-lg font-playfair tracking-wide hover:bg-black active:scale-[0.99] transition-all shadow-paper"
                    >
                        <span className="">Begin Journey</span>
                    </button>
                    <button
                        onClick={() => navigate('/auth')}
                        className="flex w-full cursor-pointer items-center justify-center mt-5 h-6 text-subtle hover:text-primary-intro text-sm font-medium transition-colors"
                    >
                        Log in to existing account
                    </button>
                </div>
                <div className="h-5 bg-paper w-full shrink-0"></div>
            </div>
        </MobileLayout>
    );
};

export default Introduction;
