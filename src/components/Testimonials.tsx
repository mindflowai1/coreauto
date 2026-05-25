import React, { useEffect, useRef } from 'react';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear any existing content
      containerRef.current.innerHTML = '';
      
      // Create script element
      const script = document.createElement('script');
      script.src = 'https://cdn.trustindex.io/loader.js?e05be94723a27279559654d1572';
      script.defer = true;
      script.async = true;
      
      // Append to the container
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Container for Trustindex Widget */}
      <div 
        ref={containerRef} 
        id="trustindex-container" 
        className="w-full min-h-[220px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center p-4 relative"
      >
        {/* Modern styled loading fallback */}
        <div className="flex flex-col items-center gap-3 py-16 text-slate-400">
          <div className="w-8 h-8 rounded-full border-4 border-amber-500/20 border-t-amber-500 animate-spin" />
          <span className="text-xs font-semibold tracking-wider font-sans uppercase">Carregando avaliações em tempo real do Google...</span>
        </div>
      </div>

      {/* Trust Pilot Style Badging - Dark Badge Core */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 p-6 bg-slate-950 border border-slate-900 rounded-xl text-center shadow-lg">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Google Avaliações</span>
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-white font-display font-black text-lg">4.9</span>
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg key={idx} className="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-slate-400">(COREAUTO - Antiga Só Hyundai)</span>
          </div>
        </div>
        
        <div className="hidden sm:block w-[1px] h-8 bg-slate-800" />

        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Satisfação Geral</span>
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-white font-display font-black text-lg">99.2%</span>
            <span className="text-xs text-emerald-400 font-bold">Excelente</span>
          </div>
        </div>
      </div>
    </div>
  );
}
