import React from 'react';
import { cn } from '../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
      secondary: 'bg-surface-base border border-primary-500 text-primary-500 hover:bg-primary-100',
      ghost: 'bg-transparent text-primary-500 hover:bg-primary-100',
      danger: 'bg-error-500 text-white hover:bg-red-600',
    };

    const sizes = {
      sm: 'h-[32px] px-2 text-body-sm gap-1',
      md: 'h-[40px] px-4 text-body-md gap-2',
      lg: 'h-[48px] px-6 text-body-lg gap-2',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center rounded-sm transition-all duration-fast font-medium disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            {leftIcon && <span className="flex items-center">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex items-center">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
