import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <Star
        key={idx}
        className={`w-4 h-4 ${idx < rating ? 'text-amber-500 fill-amber-500' : 'text-slate-200'}`}
      />
    ));
  };

  return (
    <div className="space-y-12">
      {/* Testimonials Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-slate-900/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between relative group hover:border-amber-500/50 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
          >
            {/* Visual Quote Icon Accent */}
            <div className="absolute top-6 right-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
              <Quote className="w-16 h-16 text-white" />
            </div>

            <div className="space-y-5">
              {/* Stars Row */}
              <div className="flex items-center gap-1">
                {renderStars(t.rating)}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-white/5">
              <img
                src={t.avatar}
                alt={t.name}
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all border border-white/10"
              />
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <h5 className="font-display font-black text-sm text-white">
                    {t.name}
                  </h5>
                  {t.verified && (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 animate-pulse" title="Perfil Verificado" />
                  )}
                </div>
                <div className="flex flex-col text-[10px] text-slate-400 mt-0.5 space-y-0.5">
                  <span className="font-bold text-slate-300">{t.role}</span>
                  <span className="font-mono text-slate-500">{t.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Pilot Style Badging - Dark Badge Core */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 p-6 bg-slate-950 border border-slate-900 rounded-xl text-center shadow-lg">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Google Avaliações</span>
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-white font-display font-black text-lg">4.9</span>
            <div className="flex text-amber-500">{renderStars(5)}</div>
            <span className="text-xs text-slate-400">(1.240+ votos)</span>
          </div>
        </div>
        
        <div className="hidden sm:block w-[1px] h-8 bg-slate-800" />

        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Taxa de Devolução</span>
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-white font-display font-black text-lg">0.4%</span>
            <span className="text-xs text-slate-400 font-medium">(Média nacional é 12%)</span>
          </div>
        </div>

        <div className="hidden sm:block w-[1px] h-8 bg-slate-800" />

        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Satisfação de Mecânicos</span>
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-white font-display font-black text-lg">99.2%</span>
            <span className="text-xs text-emerald-400 font-bold">Excelente</span>
          </div>
        </div>
      </div>

    </div>
  );
}
