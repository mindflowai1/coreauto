import React from 'react';
import Logo from './Logo';
import { WHATSAPP_PHONE } from '../data';
import { Clock, MapPin, Phone, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-50 border-t border-slate-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="cursor-pointer inline-block" onClick={scrollToTop}>
              <Logo />
            </div>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Sua melhor alternativa inteligente para autopeças premium no Brasil. Especialistas dedicados a fornecer componentes novos e seminovos rigorosamente selecionados e testados para automóveis Hyundai e Kia.
            </p>
            {/* Badges of trust */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5 bg-white border border-slate-200/80 p-1.5 rounded-lg text-[9px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Desmonte Autorizado Detran</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-slate-200/80 p-1.5 rounded-lg text-[9px] text-slate-500">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Empresa Certificada</span>
              </div>
            </div>
          </div>

          {/* Column 2: Working Hours / Operation */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-slate-800">
              Expediente & Atendimento
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-700">Segunda a Sexta</span>
                  <span>08:00 às 17:30</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-700">Sábados</span>
                  <span>08:00 às 12:00</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-500">Domingos e Feriados</span>
                  <span className="text-red-600 font-medium">Fechado</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-slate-800">
              Canais Oficiais
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Av. Dom Pedro II, 1178 - Bonfim, Belo Horizonte - MG, 31210-442</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-emerald-600 transition-colors font-semibold"
                >
                  Whats: (31) 3309-5890 (Linha Direta de Cotações)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box - Core component of Trust */}
        <div className="mt-8 pt-5 border-t border-slate-200 space-y-4">
          <div className="py-2.5 px-3.5 bg-white border border-slate-200 rounded-xl text-[10px] text-slate-500 leading-relaxed">
            <p>
              <strong>AVISO DE ISENÇÃO DE RESPONSABILIDADE (DISCLAIMER LEGAL):</strong> COREAUTO é um distribuidor independente de peças automotivas novas, seminovas e usadas e não possui qualquer tipo de vínculo comercial direto, licenciamento, representação oficial ou afiliação societária com as montadoras <strong>HYUNDAI MOTOR COMPANY</strong>® ou <strong>KIA CORPORATION</strong>® de forma direta. Todas as marcas nominativas, logos de fabricantes, nomes de modelos (Creta, Sportage, HB20, Tucson, Picanto, Sorento, etc.) e números de peça de referência (Part Numbers) mencionados nesta página servem única e exclusivamente para a identificação da compatibilidade técnica dos itens com os veículos dos usuários finais, constituindo direito de informação do consumidor (Artigo 31 da Lei nº 8.078/1990 - CDC).
            </p>
          </div>

          {/* Tiny Foot & Certifications badges */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>
              © {currentYear} COREAUTO PEÇAS AUTOMOTIVAS LTDA. CNPJ: 00.000.000/0001-00.
            </p>
            <div className="flex gap-3">
              <span className="hover:text-slate-800 select-none cursor-pointer">Termos de Uso</span>
              <span>•</span>
              <span className="hover:text-slate-800 select-none cursor-pointer">Política de Privacidade</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
