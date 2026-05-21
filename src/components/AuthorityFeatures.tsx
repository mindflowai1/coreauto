import React from 'react';
import { ShieldCheck, Search, ShieldAlert, Cpu, Heart, AlertTriangle, CheckCircle, RefreshCcw, Package } from 'lucide-react';

export default function AuthorityFeatures() {
  return (
    <div className="space-y-16">

      {/* Comparisons Block / Honest Battle */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-100/40">
        <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/80 text-center">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Dica de Compra Consciente</span>
          <h4 className="font-display font-black text-xl sm:text-2xl text-slate-950 tracking-tight">
            Não Corra Riscos Desnecessários
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1 font-medium">
            Veja a diferença entre comprar em desmanches comuns paralelos e a experiência profissional COREAUTO:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          
          {/* Riscos do Desmanche Informal (Left) */}
          <div className="p-6 sm:p-10 space-y-6 bg-red-50/15">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 border border-red-200 rounded-lg">
                <ShieldAlert className="w-5 h-5 text-red-600" />
              </div>
              <h5 className="font-display font-black text-md text-red-750 tracking-wide uppercase">
                O Desmanche Informal (Perigos)
              </h5>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500/80 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="font-bold text-sm text-slate-900">Alta chance de peça incompatível</h6>
                  <p className="text-xs text-slate-600 mt-0.5">Sistemas manuais baseados em "olhômetro" não conferem catálogos originais de chassi.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500/80 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="font-bold text-sm text-slate-900">Risco legal severo (Receptação involuntária)</h6>
                  <p className="text-xs text-slate-600 mt-0.5">Sem emissão de nota fiscal, sem comprovante de rastreabilidade ou baixa homologada.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500/80 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="font-bold text-sm text-slate-900">Ausência de garantia real</h6>
                  <p className="text-xs text-slate-600 mt-0.5">"Peça usada não tem troca" é a regra comum. Se quebrar na montagem, o prejuízo é seu.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500/80 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="font-bold text-sm text-slate-900">Peças sujas e sem teste</h6>
                  <p className="text-xs text-slate-600 mt-0.5">Retiradas embaixo de chuva de carros batidos abandonados, com desgaste desconhecido.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Coreauto Padrão (Right) */}
          <div className="p-6 sm:p-10 space-y-6 bg-slate-50/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-950 text-amber-400 border border-slate-900 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <h5 className="font-display font-black text-md text-slate-950 tracking-wide uppercase">
                O Padrão Especialista COREAUTO
              </h5>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="font-bold text-sm text-slate-950">Compatibilidade garantida via Chassi</h6>
                  <p className="text-xs text-slate-600 mt-0.5">Nossa consulta oficial no catálogo da Hyundai/Kia resulta em 100% de compatibilidade.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="font-bold text-sm text-slate-950">Compra 100% blindada e legalizada</h6>
                  <p className="text-xs text-slate-600 mt-0.5">Todas as peças são enviadas com Nota Fiscal Eletrônica de venda, garantia e número de serial do Detran.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="font-bold text-sm text-slate-950">Garantia comercial de 90 dias</h6>
                  <p className="text-xs text-slate-600 mt-0.5">Exatamente como uma peça nova. Se houver qualquer falha ou não servir, trocamos imediatamente.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="font-bold text-sm text-slate-950">Peças higienizadas e testadas</h6>
                  <p className="text-xs text-slate-600 mt-0.5">Peças limpas, com graxas renovadas, juntas verificadas e plugs elétricos intactos.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Direct support note - Professional Dark Panel */}
      <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex justify-center sm:justify-start items-center gap-2">
            <span className="p-1 px-3 bg-amber-400/10 text-amber-400 text-[10px] font-black rounded-full uppercase tracking-wider border border-amber-500/30">
              Chassis Service
            </span>
          </div>
          <h5 className="font-display font-extrabold text-white text-lg sm:text-xl">
            Tem o documento ou chassi em mãos?
          </h5>
          <p className="text-xs text-slate-400 max-w-xl">
            Tire uma foto ou copie os últimos 8 dígitos do chassi. Nos mande no WhatsApp para acharmos a peça idêntica à do seu veículo em menos de 3 minutos!
          </p>
        </div>
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Estou+com+o+n%C3%BAmero+do+chassi+do+meu+carro+e+gostaria+de+encontrar+a+pe%C3%A7a+exata."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 font-display font-black text-xs uppercase tracking-widest text-white px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-950/20 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          Consultar via WhatsApp
        </a>
      </div>

    </div>
  );
}
