import React from 'react';

interface MobileLayoutProps {
    children: React.ReactNode;
    className?: string; // For inner container specific styles
    bgColor?: string; // Optional override for the outer background
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({ children, className = '', bgColor = 'bg-[#E6E2D8]' }) => {
    return (
        // Outer Container: full screen, centers content
        // Uses a neutral beige/grey background similar to the reference image
        <div className={`min-h-screen w-full ${bgColor} flex items-center justify-center font-noto-sans p-0 sm:py-8 transition-colors duration-500`}>

            {/* 
        Inner "Phone" Container: 
        - Mobile: Full width/height (100dvh)
        - Desktop: Max width 480px, fixed height or max-height
      */}
            <div className={`w-full h-[100dvh] sm:w-[400px] sm:h-[800px] sm:max-h-[90vh] sm:rounded-[32px] sm:shadow-2xl overflow-hidden relative flex flex-col bg-paper border-x sm:border-0 border-stone-200/50 ring-1 ring-black/5 ${className}`}>
                {children}
            </div>
        </div>
    );
};
