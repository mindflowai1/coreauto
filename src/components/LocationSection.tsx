import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const address = "Av. Dom Pedro II, 1178 - Bonfim, Belo Horizonte - MG, 31210-442";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}`;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="como-chegar" className="py-16 sm:py-24 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Address, Copy, and Map Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
                Localização e Retirada
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-950 tracking-tight uppercase">
                Como Chegar até Nós
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nosso Centro de Distribuição Logístico está estrategicamente posicionado para garantir despachos rápidos para todo o país e retirada imediata de autopeças.
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-slate-50 border border-slate-200/70 p-5 rounded-2xl space-y-4 shadow-sm relative group">
              <div className="flex gap-3 items-start">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-600 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 pr-8">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                    Endereço Oficial
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="absolute right-4 top-4 p-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/80 transition-all cursor-pointer flex items-center gap-1.5"
                title="Copiar endereço"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-[10px] text-emerald-600 font-bold uppercase">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* GPS Navigators Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-700 hover:text-slate-950 font-display font-black text-xs tracking-wider uppercase px-5 py-4 rounded-xl transition-all shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <ExternalLink className="w-4 h-4 text-amber-500" />
                <span>Abrir no Google Maps</span>
              </a>
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-700 hover:text-slate-950 font-display font-black text-xs tracking-wider uppercase px-5 py-4 rounded-xl transition-all shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-sky-500" />
                <span>Navegar pelo Waze</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Maps Box */}
          <div className="lg:col-span-7">
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden shadow-lg relative group/map glow-border">
              {/* Decorative gradient glowing border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/15 to-sky-500/15 rounded-2xl opacity-40 blur-sm group-hover/map:opacity-100 transition-opacity pointer-events-none" />
              
              <iframe
                title="Localização Coreauto"
                src={embedUrl}
                className="absolute inset-0 w-full h-full border-0 opacity-95 group-hover/map:opacity-100 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
