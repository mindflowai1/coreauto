import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  imgClassName?: string;
}

export default function Logo({ className = '', iconOnly = false, imgClassName = '' }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/logo uai koreia.png"
        alt="Uai Koreia"
        className={`${imgClassName ? imgClassName : (iconOnly ? 'h-[86px]' : 'h-[115px] sm:h-[144px]')} w-auto object-contain flex-shrink-0`}
      />
    </div>
  );
}
