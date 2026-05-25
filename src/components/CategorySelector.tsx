import React, { useState } from 'react';
import { PART_CATEGORIES, WHATSAPP_PHONE } from '../data';
import * as LucideIcons from 'lucide-react';
import { Package, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CategorySelector() {
  const [activeCategory, setActiveCategory] = useState<string | null>(PART_CATEGORIES[0].id);

  // Dynamic Lucide icon lookup
  const renderIcon = (name: string, className = "w-6 h-6 text-amber-500") => {
    // Lookup matching key safely
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Package className={className} />;
  };

  const currentCategoryData = PART_CATEGORIES.find(c => c.id === activeCategory);

  const getWhatsAppLinkForCategory = (catName: string) => {
    const text = `Olá Coreauto! Estou checando a categoria de *${catName}* da sua landing page e gostaria de consultar a disponibilidade de peças dessa linha no estoque.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-10">
      {/* Visual Navigation Tabs (Big grid of buttons on top) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {PART_CATEGORIES.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`p-4 rounded-xl border transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-pointer ${
                isActive
                  ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10'
              }`}
            >
              <div className={`p-2 rounded-lg transition-transform group-hover:scale-110 ${isActive ? 'bg-white/20' : 'bg-white/5'}`}>
                {renderIcon(cat.iconName, isActive ? "w-5 h-5 text-white" : "w-5 h-5 text-slate-400 group-hover:text-amber-400")}
              </div>
              <span className={`text-xs font-bold tracking-wide ${isActive ? 'text-slate-950' : 'text-slate-400 group-hover:text-white'}`}>
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Expanded Category Showcase */}
      {currentCategoryData && (
        <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl shadow-black/40 group">
          
          {/* Card Left: Text Detail */}
          <div className="p-6 sm:p-10 lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  {renderIcon(currentCategoryData.iconName, "w-6 h-6 text-amber-400")}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">Linha de Produtos</span>
                  <h4 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                    {currentCategoryData.name}
                  </h4>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                {currentCategoryData.description}
              </p>

              {/* Authority highlights for categories */}
              {currentCategoryData.verifiedHighlights && currentCategoryData.verifiedHighlights.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentCategoryData.verifiedHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-300 font-semibold">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {currentCategoryData.popularItems && currentCategoryData.popularItems.length > 0 && (
              <div className="space-y-4">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                  Itens Populares Mais Fornecidos:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentCategoryData.popularItems.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 font-mono text-xs px-3.5 py-1.5 border border-white/5 text-slate-300 rounded-lg font-bold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-white/5">
              <a
                href={getWhatsAppLinkForCategory(currentCategoryData.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-black text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CONSULTAR ESTOQUE DESTA LINHA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card Right: Contextual Image Overlay */}
          <div className="relative min-h-[250px] lg:col-span-5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-transparent z-10 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10 lg:hidden" />
            <img
              src={currentCategoryData.imageName}
              alt={currentCategoryData.name}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Visual overlay sticker */}
            <div className="absolute right-4 bottom-4 z-20 bg-amber-500 px-3 py-1.5 rounded-lg text-[10px] text-slate-950 font-black tracking-tighter uppercase">
              Hyundai / Kia Specialist
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
