import React from 'react';
import { cn } from '../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  type?: 'patient' | 'appointment' | 'diagnosis' | 'lab' | 'ai';
  size?: 'sm' | 'md' | 'lg' | 'full';
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, size = 'md', header, footer }) => {
  const sizeClasses = {
    sm: 'w-full md:w-[320px]',
    md: 'w-full md:w-[480px]',
    lg: 'w-full md:w-[640px]',
    full: 'w-full',
  };

  return (
    <div
      className={cn(
        'bg-surface-base border border-neutral-200 rounded-md overflow-hidden transition-all duration-base flex flex-col',
        'dark:border-neutral-700 shadow-sm hover:shadow-md',
        sizeClasses[size],
        className
      )}
    >
      {header && (
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 font-semibold text-neutral-900">
          {header}
        </div>
      )}
      <div className="p-4 flex-grow flex flex-col gap-3">
        {children}
      </div>
      {footer && (
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
