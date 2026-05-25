import React, { useState, useMemo } from 'react';
import { HelpCircle, ChevronRight, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { VEHICLE_MODELS, PART_CATEGORIES, WHATSAPP_PHONE } from '../data';

export default function QuoteWidget() {
  const [selectedBrand, setSelectedBrand] = useState<'Hyundai' | 'Kia'>('Hyundai');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [partDescription, setPartDescription] = useState<string>('');
  const [customModel, setCustomModel] = useState<string>('');
  const [customYear, setCustomYear] = useState<string>('');
  const [customCategory, setCustomCategory] = useState<string>('');
  
  // Form focus or warnings states
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Dynamically load models for the selected brand
  const brandModels = useMemo(() => {
    const models = VEHICLE_MODELS.filter(m => m.brand === selectedBrand);
    // Reset model and year when changing brand
    return models;
  }, [selectedBrand]);

  // Handle brand switch
  const handleBrandChange = (brand: 'Hyundai' | 'Kia') => {
    setSelectedBrand(brand);
    setSelectedModel('');
    setSelectedYear('');
    setCustomModel('');
    setCustomYear('');
  };

  // Find valid years for the selected model
  const availableYears = useMemo(() => {
    if (!selectedModel) return [];
    const modelObj = brandModels.find(m => m.name === selectedModel);
    return modelObj ? modelObj.years : [];
  }, [selectedModel, brandModels]);

  // When model changes, reset year
  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    setSelectedYear('');
    if (model !== 'Outro') {
      setCustomModel('');
      setCustomYear('');
    }
  };

  // Compile standard WhatsApp Message
  const whatsappUrl = useMemo(() => {
    let modelName = selectedModel;
    if (selectedModel === 'Outro') {
      modelName = customModel ? `Outro (${customModel})` : 'Outro / Não listado';
    }

    let yearVal = selectedYear;
    if (selectedModel === 'Outro') {
      yearVal = customYear;
    }

    let categoryName = '';
    if (selectedCategory) {
      if (selectedCategory === 'Outra') {
        categoryName = customCategory ? `Outra (${customCategory})` : 'Outra / Não listada';
      } else {
        const catObj = PART_CATEGORIES.find(c => c.id === selectedCategory);
        categoryName = catObj ? catObj.name : selectedCategory;
      }
    }

    // Standard text
    let messageText = `Olá Coreauto! Vim pela Landing Page e pretendo realizar um orçamento rápido de peça:\n\n`;
    messageText += `• *Marca:* ${selectedBrand}\n`;
    messageText += `• *Modelo:* ${modelName || '(Não especificado)'}\n`;
    if (yearVal) messageText += `• *Ano:* ${yearVal}\n`;
    if (categoryName) {
      messageText += `• *Categoria:* ${categoryName}\n`;
    }
    if (partDescription.trim()) {
      messageText += `• *Peça específica:* ${partDescription.trim()}\n`;
    } else {
      messageText += `• *Peça específica:* Consultar estoque\n`;
    }
    
    messageText += `\nGostaria de verificar a disponibilidade desta peça em seu estoque e as fotos reais do item.`;
    
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(messageText)}`;
  }, [selectedBrand, selectedModel, selectedYear, selectedCategory, partDescription, customModel, customYear, customCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedModel) {
      setErrorMsg('Por favor, selecione primeiro o modelo do seu veículo!');
      return;
    }
    if (selectedModel === 'Outro' && !customModel.trim()) {
      setErrorMsg('Por favor, especifique o modelo do seu veículo!');
      return;
    }
    if (selectedCategory === 'Outra' && !customCategory.trim()) {
      setErrorMsg('Por favor, especifique a categoria de peça!');
      return;
    }
    setErrorMsg('');
    window.open(whatsappUrl, '_blank', 'noreferrer');
  };

  return (
    <div
      id="cotador-orçamento"
      className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-4 xl:p-6 border border-white/20 shadow-2xl shadow-black/40"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      {/* Title */}
      <div className="flex items-center gap-2 mb-4 lg:mb-2 xl:mb-4">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <h3 className="font-display font-black text-base sm:text-lg text-white uppercase tracking-tight">
          Cote sua Peça em 1 Clique
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-2.5 xl:space-y-4">
        {/* Step 1: Brand Selection (Exclusive Tabs) */}
        <div>
          <label className="block text-[10px] lg:text-[9px] xl:text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1.5">
            Passo 1: Escolha a Marca do Veículo
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleBrandChange('Hyundai')}
              className={`py-2 px-3 xl:py-3 px-4 rounded-lg xl:rounded-xl font-display font-extrabold text-xs tracking-wider transition-all border flex items-center justify-center gap-2 cursor-pointer ${
                selectedBrand === 'Hyundai'
                  ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${selectedBrand === 'Hyundai' ? 'bg-slate-950 animate-pulse' : 'bg-transparent border border-slate-500'}`}></span>
              HYUNDAI
            </button>
            <button
              type="button"
              onClick={() => handleBrandChange('Kia')}
              className={`py-2 px-3 xl:py-3 px-4 rounded-lg xl:rounded-xl font-display font-extrabold text-xs tracking-wider transition-all border flex items-center justify-center gap-2 cursor-pointer ${
                selectedBrand === 'Kia'
                  ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${selectedBrand === 'Kia' ? 'bg-slate-950 animate-pulse' : 'bg-transparent border border-slate-500'}`}></span>
              KIA MOTORS
            </button>
          </div>
        </div>



        {/* Step 2: Model and Year Dual Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-2 xl:gap-3">
          <div>
            <label className="block text-[10px] lg:text-[9px] xl:text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">
              Passo 2: Modelo <span className="text-amber-500">*</span>
            </label>
            <select
              required
              value={selectedModel}
              onChange={(e) => handleModelChange(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg py-2 lg:py-1.5 xl:py-2.5 px-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 cursor-pointer font-semibold appearance-none"
              style={{ colorScheme: 'dark' }}
            >
              <option value="" className="bg-slate-900">-- Escolher Modelo --</option>
              {brandModels.map((m) => (
                <option key={m.name} value={m.name} className="bg-slate-900">
                  {m.name}
                </option>
              ))}
              <option value="Outro" className="bg-slate-900">Outro Modelo / Não listado</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] lg:text-[9px] xl:text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1 block">
              Passo 3: Ano
            </label>
            <select
              disabled={!selectedModel}
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className={`w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg py-2 lg:py-1.5 xl:py-2.5 px-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 ${
                !selectedModel ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
              } font-semibold appearance-none`}
              style={{ colorScheme: 'dark' }}
            >
              <option value="" className="bg-slate-900">{selectedModel ? '-- Escolher Ano --' : 'Aguardando modelo...'}</option>
              {availableYears.map((y) => (
                <option key={y} value={y} className="bg-slate-900">
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Custom Model & Year Inputs */}
        {selectedModel === 'Outro' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-2 xl:gap-3">
            <div>
              <label className="block text-[10px] lg:text-[9px] xl:text-[10px] font-bold text-slate-350 uppercase tracking-widest mb-1">
                Qual o modelo? <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                required
                value={customModel}
                onChange={(e) => setCustomModel(e.target.value)}
                placeholder="Exemplo: Hyundai Veracruz V6"
                className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg py-2 lg:py-1.5 xl:py-2.5 px-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 font-semibold"
              />
            </div>
            <div>
              <label className="block text-[10px] lg:text-[9px] xl:text-[10px] font-bold text-slate-350 uppercase tracking-widest mb-1">
                Qual o ano?
              </label>
              <input
                type="text"
                value={customYear}
                onChange={(e) => setCustomYear(e.target.value)}
                placeholder="Exemplo: 2011/2012"
                className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg py-2 lg:py-1.5 xl:py-2.5 px-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 font-semibold"
              />
            </div>
          </div>
        )}

        {/* Step 3: Part Category Selection */}
        <div>
          <label className="block text-[10px] lg:text-[9px] xl:text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">
            Passo 4: Qual Categoria de Peça?
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg py-2 lg:py-1.5 xl:py-2.5 px-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 cursor-pointer font-semibold appearance-none"
            style={{ colorScheme: 'dark' }}
          >
            <option value="" className="bg-slate-900">-- Todas as Categorias (Geral) --</option>
            {PART_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id} className="bg-slate-900">
                {cat.name}
              </option>
            ))}
            <option value="Outra" className="bg-slate-900">Outra Categoria / Não listada</option>
          </select>
        </div>

        {/* Custom Category Input */}
        {selectedCategory === 'Outra' && (
          <div>
            <label className="block text-[10px] lg:text-[9px] xl:text-[10px] font-bold text-slate-350 uppercase tracking-widest mb-1">
              Qual a Categoria? <span className="text-amber-500">*</span>
            </label>
            <input
              type="text"
              required
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              placeholder="Exemplo: Rodas, Som, Acabamento, etc..."
              className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg py-2 lg:py-1.5 xl:py-2.5 px-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 font-semibold"
            />
          </div>
        )}

        {/* Step 4: Describe Parts Needed */}
        <div>
          <label className="block text-[10px] lg:text-[9px] xl:text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">
            Passo 5: Qual Peça Você Precisa?
          </label>
          <textarea
            value={partDescription}
            onChange={(e) => setPartDescription(e.target.value)}
            placeholder="Exemplo: Amortecedores dianteiros, faróis, câmbio..."
            rows={2}
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg py-2 lg:py-1.5 xl:py-2 px-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 resize-none font-medium"
          />
        </div>

        {/* Error Messages */}
        {errorMsg && (
          <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-[11px] text-red-200 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Pre-visualization draft - Premium technical touch */}
        {selectedModel && (
          <div className="bg-white/5 border border-white/10 rounded-lg p-2 px-3 space-y-0.5">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
              Mensagem a ser enviada:
            </span>
            <p className="text-[11px] text-slate-300 font-mono italic truncate">
              {selectedBrand} {selectedModel === 'Outro' ? (customModel || 'Outro') : selectedModel} {selectedModel === 'Outro' ? (customYear ? `/ Ano: ${customYear}` : '') : (selectedYear ? `/ Ano: ${selectedYear}` : '')}
              {partDescription.trim() ? ` » "${partDescription}"` : ' » "Consultar estoque..."'}
            </p>
          </div>
        )}

        {/* CTA Launch Code */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-2.5 lg:py-2 xl:py-3 rounded-lg xl:rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-display font-black text-xs sm:text-sm uppercase tracking-wide transition-all shadow-xl shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 flex-shrink-0" />
          <span>Solicitar Orçamento via WhatsApp</span>
          <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
        </button>

        {/* Meta badges under form */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[9px] text-slate-400 pt-1.5 border-t border-white/10">
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Resposta rápida ~5min
          </span>
          <span className="opacity-40 font-mono text-white">•</span>
          <span className="flex items-center gap-1 font-medium text-white/70">
            Compatibilidade confirmada na hora
          </span>
        </div>
      </form>
    </div>
  );
}
