import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = '', iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* S. Korea Inspired Stylized Emblem in Black and Yellow */}
      <svg
        id="coreauto-emblem"
        viewBox="0 0 100 100"
        className="w-12 h-12 flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Elements - South Korean Trigram Starburst */}
        <circle cx="50" cy="50" r="46" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-60" />
        
        {/* Curved Trigram Blocks surrounding the circle */}
        {/* Top-Left: Heaven */}
        <path d="M26 26 L18 34 M21 21 L13 29 M31 31 L23 39" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        {/* Bottom-Right: Earth */}
        <path d="M69 69 L74 64 M76 76 L81 71 M64 64 L71 57 M73 73 L78 68 M81 81 L86 76 M78 78 L83 73" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        {/* Top-Right: Water */}
        <path d="M69 31 L74 36 M64 36 L71 43 M78 22 L83 27 M73 27 L78 32 M81 19 L86 24 M78 22 L83 27" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
        {/* Bottom-Left: Fire */}
        <path d="M31 69 L23 77 M26 74 L18 82 M36 64 L29 71" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />

        {/* Outer Ring with segmented yellow/black curves */}
        <path d="M12 50 A38 38 0 0 1 88 50" stroke="#eab308" strokeWidth="3" fill="none" />
        <path d="M88 50 A38 38 0 0 1 12 50" stroke="#0f172a" strokeWidth="3" fill="none" />

        {/* Central Taegeuk (Yin-Yang) - Yellow/Amber on Top, Black on Bottom styled elegantly */}
        <path
          d="M18 50 A32 32 0 0 1 82 50 A16 16 0 0 1 50 50 A16 16 0 0 0 18 50 Z"
          fill="#eab308"
        />
        <path
          d="M82 50 A32 32 0 0 1 18 50 A16 16 0 0 1 50 50 A16 16 0 0 0 82 50 Z"
          fill="#0f172a"
        />
      </svg>
      
      {!iconOnly && (
        <div id="coreauto-text" className="flex flex-col leading-none">
          <span className="font-display font-extrabold text-2xl tracking-tighter text-slate-950">
            CORE<span className="text-amber-500">AUTO</span>
          </span>
          <span className="font-sans font-semibold text-[10px] uppercase tracking-[0.25em] text-neutral-600 mt-1">
            Peças Automotivas
          </span>
        </div>
      )}
    </div>
  );
}
