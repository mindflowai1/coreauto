import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = '', iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/logo coreauto.png"
        alt="COREAUTO"
        className={`${iconOnly ? 'h-[86px]' : 'h-[115px] sm:h-[144px]'} w-auto object-contain flex-shrink-0`}
      />
    </div>
  );
}
