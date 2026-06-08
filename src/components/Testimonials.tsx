import React, { useState, useEffect } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

// Google G logo helper SVG
const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items count listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <div className="space-y-10">
      
      {/* Clean & Minimalist Header Row */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 border-b border-slate-900 pb-8 text-slate-300">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          {/* Crisp Google Icon Badge (Link to Google Reviews search page) */}
          <a 
            href="https://www.google.com/search?q=COREAUTO+(Antiga+S%C3%B3+Hyundai)+Coment%C3%A1rios"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner flex-shrink-0 hover:border-amber-500/50 hover:bg-slate-850/80 transition-all cursor-pointer"
            title="Ver avaliações no Google"
          >
            <GoogleIcon className="w-7 h-7" />
          </a>
          
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 justify-center sm:justify-start">
              <h3 className="font-display font-bold text-lg text-white tracking-wide uppercase">
                Uai Koreia
              </h3>
              <span className="text-slate-500 text-xs font-sans">(Antiga Só Hyundai)</span>
            </div>
            
            {/* Address (Link to Google Maps search query) */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=COREAUTO+(Antiga+S%C3%B3+Hyundai)+Av.+Dom+Pedro+II,+1178+-+Bonfim,+Belo+Horizonte+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-1 text-xs text-slate-400 hover:text-slate-200 hover:underline transition-all cursor-pointer"
              title="Ver no Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
              <span>Av. Dom Pedro II, 1178 - Bonfim, Belo Horizonte - MG, Brasil</span>
            </a>
          </div>
        </div>

        {/* Rating Summary Block */}
        <div className="flex flex-col items-center md:items-end gap-1 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display font-black text-white">4.9</span>
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
          </div>
          <a 
            href="https://www.google.com/search?q=COREAUTO+(Antiga+S%C3%B3+Hyundai)+Coment%C3%A1rios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider hover:text-amber-500 hover:underline transition-all cursor-pointer"
            title="Ver todos os comentários no Google"
          >
            Média de 245 avaliações no Google
          </a>
        </div>
      </div>

      {/* Custom Carousel Container */}
      <div className="relative group/carousel">
        {/* Navigation Arrows (Only show if there are scrollable items) */}
        {maxIndex > 0 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-slate-900 border border-slate-850 hover:border-slate-750 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
              aria-label="Avaliação anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-slate-900 border border-slate-850 hover:border-slate-750 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Sliding Viewport */}
        <div className="overflow-hidden w-full px-1 py-4">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ 
              transform: `translateX(-${activeIndex * (100 / itemsPerView + (activeIndex > 0 ? 0.3 : 0))}%)` 
            }}
          >
            {TESTIMONIALS.map((item) => (
              <div 
                key={item.id}
                style={{ 
                  width: itemsPerView === 1 
                    ? '100%' 
                    : itemsPerView === 2 
                      ? 'calc(50% - 12px)' 
                      : 'calc(33.333% - 16px)'
                }}
                className="flex-shrink-0 bg-slate-900/10 hover:bg-slate-900/20 border border-slate-900 hover:border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between gap-5 transition-all duration-300 relative select-none"
              >
                {/* Tiny Google G Logo at top right to signify source */}
                <div className="absolute top-6 right-6 opacity-35">
                  <GoogleIcon className="w-4 h-4" />
                </div>

                <div className="space-y-3">
                  {/* Rating Stars & Time */}
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500">
                      {Array.from({ length: item.rating }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    {item.timeAgo && (
                      <span className="text-[10px] text-slate-500 font-medium">
                        {item.timeAgo}
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-slate-300 leading-relaxed font-sans font-normal italic">
                    "{item.text}"
                  </p>

                  {/* Owner Response Box (Nested Speech Bubble) */}
                  {item.ownerReply && (
                    <div className="mt-4 p-3.5 bg-slate-950/40 rounded-xl border border-slate-900/60 text-[11px] text-slate-400 space-y-1 text-left relative before:absolute before:top-[-6px] before:left-5 before:w-3 before:h-3 before:bg-slate-950/40 before:border-t before:border-l before:border-slate-900/60 before:rotate-45">
                      <div className="flex items-center gap-1.5 font-bold text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>Resposta da Uai Koreia (Proprietário)</span>
                      </div>
                      <p className="italic leading-normal">"{item.ownerReply}"</p>
                    </div>
                  )}
                </div>

                {/* Author info */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-900/40">
                  {/* Minimalist Avatar Circle with Initials */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-[11px] font-black text-slate-400">
                      {item.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs text-white truncate">{item.name}</h4>
                    <p className="text-[10px] text-slate-500 truncate">{item.role}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Indicator dots */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-amber-500 w-3' : 'bg-slate-800'}`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
