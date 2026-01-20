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
      <span className="text-xs font-semibold tracking-wide text-ink mb-2">
        {label}
      </span>
      <div className="h-2 w-20 bg-border-subtle rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-[10px] font-medium text-subtle mt-1.5">
        {current + 1} / {total}
      </span>
    </div>
  );
};