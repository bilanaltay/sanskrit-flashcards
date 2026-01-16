import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  label: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, label }) => {
  const percentage = Math.min(100, Math.max(0, ((current + 1) / total) * 100));

  return (
    <div className="flex flex-col items-center w-full max-w-[200px]">
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-subtle mb-2">
        {label}
      </span>
      <div className="h-1.5 w-16 bg-accent/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-accent rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};