import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded uppercase font-['Barlow_Condensed'] font-bold tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        {
          'bg-[#ff4d00] text-white hover:bg-[#e64500] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,77,0,0.4)]': variant === 'primary',
          'border-2 border-[#ff4d00] text-[#ff4d00] hover:bg-[#ff4d00] hover:text-white': variant === 'outline',
          'text-white hover:text-[#ff4d00]': variant === 'ghost',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-xl': size === 'md',
          'px-8 py-4 sm:px-12 sm:py-5 text-lg sm:text-2xl': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
}