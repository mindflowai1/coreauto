import React from 'react';
import Logo from './Logo';
import { Mail, Clock, MapPin, Phone, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-white/[0.05] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-6">
            <div className="cursor-pointer inline-block" onClick={scrollToTop}>
              <Logo />
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Sua melhor alternativa inteligente para autopeças premium no Brasil. Especialistas dedicados a fornecer componentes novos e seminovos rigorsamente selecionados e testados para automóveis Hyundai e Kia.
            </p>
            {/* Badges of trust */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 bg-slate-900 border border-white/[0.04] p-2 rounded-lg text-[9px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Desmonte Autorizado Detran</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 border border-white/[0.04] p-2 rounded-lg text-[9px] text-neutral-400">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Empresa Certificada</span>
              </div>
            </div>
          </div>

          {/* Column 2: Working Hours / Operation */}
          <div className="md:col-span-3 space-y-5">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-neutral-300">
              Expediente & Atendimento
            </h5>
            <ul className="space-y-3.5 text-xs text-neutral-400">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-neutral-300">Segunda a Sexta</span>
                  <span>08:15 às 18:00</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-neutral-300">Sábados</span>
                  <span>08:30 às 13:00</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-neutral-400">Domingos e Feriados</span>
                  <span className="text-red-500 font-medium">Fechado</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="md:col-span-4 space-y-5">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-neutral-300">
              Canais Oficiais
            </h5>
            <ul className="space-y-3.5 text-xs text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Av. Autopeças Coreanas, 2400 - Distrito Industrial - CD Logístico Central</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Whats: (11) 99999-9999 (Linha Direta de Cotações)
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                <span className="hover:text-neutral-300 transition-colors">contato@coreautopecas.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box - Core component of Trust */}
        <div className="mt-12 pt-8 border-t border-white/[0.03] space-y-6">
          <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl text-[10px] text-neutral-500 leading-relaxed">
            <p>
              <strong>AVISO DE ISENÇÃO DE RESPONSABILIDADE (DISCLAIMER LEGAL):</strong> COREAUTO é um distribuidor independente de peças automotivas novas, seminovas e usadas e não possui qualquer tipo de vínculo comercial direto, licenciamento, representação oficial ou afiliação societária com as montadoras <strong>HYUNDAI MOTOR COMPANY</strong>® ou <strong>KIA CORPORATION</strong>® de forma direta. Todas as marcas nominativas, logos de fabricantes, nomes de modelos (Creta, Sportage, HB20, Tucson, Picanto, Sorento, etc.) e números de peça de referência (Part Numbers) mencionados nesta página servem única e exclusivamente para a identificação da compatibilidade técnica dos itens com os veículos dos usuários finais, constituindo direito de informação do consumidor (Artigo 31 da Lei nº 8.078/1990 - CDC).
            </p>
          </div>

          {/* Tiny Foot & Certifications badges */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
            <p>
              © {currentYear} COREAUTO PEÇAS AUTOMOTIVAS LTDA. CNPJ: 00.000.000/0001-00. Quota-free Traffic Landing Page.
            </p>
            <div className="flex gap-4">
              <span className="hover:text-neutral-400 select-none">Termos de Uso</span>
              <span>•</span>
              <span className="hover:text-neutral-400 select-none">Política de Privacidade</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
