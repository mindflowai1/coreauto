import React, { useState } from 'react';
import Header from './components/Header';
import QuoteWidget from './components/QuoteWidget';
import CategorySelector from './components/CategorySelector';
import AuthorityFeatures from './components/AuthorityFeatures';
import Testimonials from './components/Testimonials';
import FAQAccordions from './components/FAQAccordions';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import {
  ShieldCheck,
  ChevronRight,
  Sliders,
  MessageSquare,
  Compass,
  Truck,
  AlertCircle,
  ArrowRight,
  Car,
  BadgeAlert,
  ThumbsUp,
  UserCheck,
  X,
  Phone
} from 'lucide-react';
import { motion } from 'motion/react';
import { AUTHORITY_STATS, WHATSAPP_PHONE } from './data';

export default function App() {
  const [activeBrandBanner, setActiveBrandBanner] = useState<'both' | 'hyundai' | 'kia'>('both');
  const [isWppChatOpen, setIsWppChatOpen] = useState(false);

  const stats = AUTHORITY_STATS;

  const handleFloatingCall = () => {
    const defaultText = encodeURIComponent("Olá! Gostaria de consultar peças para Hyundai/Kia.");
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${defaultText}`, '_blank', 'noreferrer');
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800">

      {/* Dynamic Background Noise/Mesh - Light Scheme */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-slate-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Navigation Navbar */}
        <Header />

        {/* Hero Section: The Automotive Command Center */}
        <section
          id="home"
          className="relative pt-24 pb-16 sm:py-32 lg:py-0 lg:h-screen lg:min-h-[680px] lg:max-h-[860px] lg:flex lg:items-center border-b border-slate-150 overflow-hidden"
        >
          {/* Hero Background Image with subtle black overlay */}
          <div className="absolute inset-0 z-0 bg-black">
            <img
              src="/axel-antas-bergkvist-_PDndqdsA3o-unsplash.jpg"
              alt="Automotive Industrial background"
              className="w-full h-full object-cover object-center opacity-60 filter contrast-[1.02] brightness-[0.95]"
              referrerPolicy="no-referrer"
            />
            {/* Soft black gradient overlay for depth - lightened for less 'opaco' effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
          </div>

          {/* Subtle industrial background pattern layout overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-10" />

          {/* Hero Content Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full lg:pt-16 xl:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">

              {/* Left Column: Typography directly on background with maximum impact and contrast */}
              <div className="lg:col-span-7 space-y-5 text-center lg:text-left relative z-20">

                {/* Brand Pill badge - High Impact Contrast */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-sans font-black text-[10px] xl:text-xs uppercase tracking-wider shadow-md hover:scale-102 transition-transform">
                    <Car className="w-3.5 h-3.5" />
                    <span>Especialista Exclusivo Hyundai & Kia</span>
                  </div>
                </div>

                {/* Main Headline with Sober Accent & Extra Impact */}
                <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[2.35rem] xl:text-[3.25rem] lg:leading-[1.1] xl:leading-[1.05] text-white tracking-tight uppercase">
                  A peça certa para <br />
                  seu <span className="text-amber-400 font-black">koreano</span>, sem <br className="hidden sm:inline" />
                  complicação!
                </h1>

                {/* Descriptive subline - Clean & highly legible with modern contrast */}
                <p className="text-xs sm:text-sm xl:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-medium">
                  <span className="hidden lg:inline">Não perca tempo rodando em sucatas ou pagando fortunas em concessionárias. Fornecemos peças novas e seminovas com <span className="text-white font-extrabold border-b-2 border-amber-400/80">procedência garantida de leilão</span> e <span className="text-white font-extrabold border-b-2 border-amber-400/80">garantia de 3 meses</span>. Garantimos compatibilidade exata com o seu veículo.</span>
                  <span className="lg:hidden">Peças de procedência com <span className="text-white font-semibold border-b border-amber-400/80">garantia de 3 meses</span> de leilão para seu Hyundai ou Kia. Compatibilidade verificada para erro zero.</span>
                </p>

                {/* Key specs bullet triggers */}
                <div className="hidden lg:grid grid-cols-2 gap-3 xl:gap-4 max-w-md mx-auto lg:mx-0 pt-1 text-left">
                  <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-sm hover:bg-white/15 hover:border-white/25 transition-all duration-300 hover:scale-[1.01] h-[58px]">
                    <ShieldCheck className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <span className="block text-[10px] xl:text-xs font-black text-white uppercase tracking-wider leading-none">100% Homologado</span>
                      <span className="text-[9px] xl:text-[10px] text-slate-300 font-bold">Credenciado pelo Detran</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-white border border-white/10 p-2 px-6 rounded-2xl shadow-sm hover:scale-[1.01] transition-all duration-300 h-[58px] overflow-hidden">
                    <img
                      src="/logo-detran.png"
                      alt="DETRAN MG"
                      className="h-full object-contain"
                    />
                  </div>
                </div>

                {/* Core Stats highlights */}
                <div className="hidden lg:grid grid-cols-2 sm:grid-cols-4 gap-3 xl:gap-6 pt-4 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-center sm:text-left">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="hover:scale-[1.02] transition-transform duration-300">
                      <span className="font-display font-black text-xl xl:text-[1.75rem] text-white block leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[9px] xl:text-[10px] text-slate-400 font-bold uppercase tracking-wider pt-0.5 block leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: Embedded Conversion Lead Widget */}
              <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:mx-0">
                <QuoteWidget />
              </div>

            </div>
          </div>
        </section>

        {/* Brand Focus / Exclusividade Section */}
        <section
          id="especialidades"
          className="py-16 sm:py-24 border-b border-slate-100 bg-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >

            {/* Header section name */}
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest block">
                Por Que Fomos Criados?
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-950 tracking-tight uppercase">
                A Linha Oriental Exige Especialização
              </h2>
              <p className="text-sm text-slate-600">
                Carros koreanos possuem tolerâncias mecânicas finas e sistemas eletrônicos dedicados. Um desmanche de peças gerais costuma misturar lotes e enviar peças incompatíveis. Na COREAUTO, respiramos apenas Hyundai e Kia.
              </p>
            </div>

            {/* Brands Double Panel Interactive Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Hyundai Focus Card */}
              <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-10 space-y-6 flex flex-col justify-between group hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300">
                <div className="space-y-4">
                  <div>
                    <span className="font-display font-black text-slate-800/40 text-6xl select-none group-hover:text-amber-500/20 transition-colors">
                      01
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wide">
                    Especialidade Hyundai
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Estoque robusto de peças focado em reposição para motores Kappa (1.0), Gamma (1.6), e Nu (2.0), além de agregados, faróis de LED e mecânica completa para toda a gama de modelos da marca.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300 font-sans pt-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Cabeçotes e blocos testados em bancada
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-500/50 transition-colors" /> Sensores e injeção com part numbers confirmados
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-500/50 transition-colors" /> Lataria na cor original sob consulta de estoque
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-900">
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Olá! Buscando peças especiais para veículo Hyundai.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-white font-bold uppercase transition-colors hover:text-amber-400"
                  >
                    <span>Consultar Hyundai no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Kia Focus Card */}
              <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-10 space-y-6 flex flex-col justify-between group hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300">
                <div className="space-y-4">
                  <div>
                    <span className="font-display font-black text-slate-800/40 text-6xl select-none group-hover:text-amber-500/20 transition-colors">
                      02
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wide">
                    Especialidade Kia Motors
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Atendimento forte focado em utilitários, SUVs e veículos leves da marca, cobrindo todas as motorizações e transmissões mecânicas ou automáticas.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300 font-sans pt-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Caixa de direção e kits de airbag exclusivos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-500/50 transition-colors" /> Diferenciais e semi-eixos com procedência autenticada
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-500/50 transition-colors" /> Transmissões automáticas revisadas e lacradas
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-900">
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Olá! Buscando peças especiais para veículo Kia.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-white font-bold uppercase transition-colors hover:text-amber-400"
                  >
                    <span>Consultar Kia no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

          </motion.div>
        </section>

        {/* Product categories grid gallery */}
        <section
          id="categorias"
          className="py-16 sm:py-24 border-b border-slate-900 bg-slate-950"
        >
          <motion.div
            initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >

            {/* Header header info */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
                  Nosso Estoque em Foco
                </span>
                <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
                  O que fornecemos no balcão:
                </h2>
                <p className="text-sm text-slate-400 max-w-xl">
                  Explore as principais divisões de autopeças seminovas e novas em nosso centro logístico. Clique em cada categoria para ver detalhes:
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 hidden sm:inline">Precisa de outra linha?</span>
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Olá! Preciso de uma peça que não está listada nas categorias.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-100 border border-slate-200 p-2.5 px-4 rounded-xl text-xs text-slate-950 font-extrabold tracking-wide transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Falar no WhatsApp Geral
                </a>
              </div>
            </div>

            {/* Custom Category Interactive Tab Selector */}
            <CategorySelector />

          </motion.div>
        </section>

        {/* Authority / Why buy from COREAUTO Section */}
        <section
          id="diferenciais"
          className="relative py-16 sm:py-24 border-b border-slate-100 bg-white overflow-hidden"
        >
          {/* Animated Minimalist Background Elements with rich visibility */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none bg-slate-50/40">
            {/* Elegant moving grid pattern with rich slate contrast */}
            <motion.div
              className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
              animate={{
                backgroundPosition: ["0px 0px", "56px 56px"]
              }}
              transition={{
                duration: 24,
                ease: "linear",
                repeat: Infinity
              }}
            />

            {/* Vivid drifting Amber/Yellow glow aura */}
            <motion.div
              className="absolute w-[420px] h-[420px] rounded-full bg-amber-400/20 blur-[100px]"
              animate={{
                x: [-120, 120, -50, -120],
                y: [-60, 150, 60, -60],
                scale: [1, 1.15, 0.9, 1]
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ top: '5%', left: '10%' }}
            />

            {/* Vivid drifting sleek indigo/blue glow aura */}
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[130px]"
              animate={{
                x: [150, -100, 60, 150],
                y: [100, -100, 0, 100],
                scale: [1, 0.85, 1.1, 1]
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ bottom: '10%', right: '5%' }}
            />

            {/* Floating glowing micro-particles */}
            <motion.div
              className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-amber-400/60 blur-[1.5px]"
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 0.9, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-indigo-400/40 blur-[1.5px]"
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-amber-400/50 blur-[1px]"
              animate={{
                x: [0, 40, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            />

            {/* Subtle border gradients for smooth layouts matching surrounding sections */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >

            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
                Especialistas em Hyundai & Kia
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-950 tracking-tight uppercase">
                A precisão e a segurança que seu koreano exige
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Garantimos compatibilidade técnica exata, procedência 100% legalizada via leilões/Detran e garantia real de 90 dias. Uma experiência profissional e segura para o seu Hyundai ou Kia.
              </p>
            </div>

            {/* Comparative Grid Layouts */}
            <AuthorityFeatures />

          </motion.div>
        </section>

        {/* Social Proof & Trustimonials Section */}
        <section
          id="depoimentos"
          className="py-16 sm:py-24 border-b border-slate-900 bg-slate-950"
        >
          <motion.div
            initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >

            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
                Avaliações Reais no Google
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
                Transparência e Opinião de Quem Confia
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                A opinião de nossos clientes é pública e 100% transparente. Veja abaixo as avaliações reais importadas diretamente do nosso perfil oficial no Google:
              </p>
            </div>

            {/* Custom Testimonials Grid */}
            <Testimonials />

          </motion.div>
        </section>

        {/* Location Section */}
        <LocationSection />

        {/* FAQ Section Accordions */}
        <section
          id="faq"
          className="py-16 sm:py-24 border-b border-slate-900 bg-slate-950"
        >
          <motion.div
            initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >

            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
                Tira-Dúvidas Sem enrolação
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
                Perguntas Frequentes
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Tem dúvidas sobre procedência legal, garantia de origem ou prazos de frete? Separamos as respostas de balcão mais comuns para você avançar seguro:
              </p>
            </div>

            <FAQAccordions />

          </motion.div>
        </section>

        {/* Floating Call to Action Section (Bottom Bar) */}
        <div className="bg-slate-950 border-t border-b border-slate-900 py-2">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-1.5 text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest leading-none">Equipe de Balcão Ativa</span>
              </div>
              <h4 className="font-display font-black text-xl text-white uppercase tracking-tight">
                Cote Sua Peça e Receba Fotos Reais
              </h4>
              <p className="text-xs text-slate-400 max-w-lg">
                Consulte sem compromisso com nossos especialistas agora e economize até 70% comparado a novos originais com total segurança jurídica.
              </p>
            </div>
            <button
              onClick={handleFloatingCall}
              className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-display font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-xl shadow-emerald-950/40 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Cote Imediatamente via Whats</span>
            </button>
          </motion.div>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Modern WhatsApp Chat Widget */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
        {/* Modern WhatsApp Chat Widget */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
          
          {/* Chat Window Panel */}
          {isWppChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="bg-white border border-slate-100 rounded-3xl shadow-2xl overflow-hidden w-[300px] sm:w-[350px] text-left relative flex flex-col z-55"
            >
              {/* Header: WhatsApp Green Theme */}
              <div className="bg-[#075E54] p-4 text-white flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Company Logo Avatar */}
                  <div className="w-10 h-10 rounded-full bg-white relative flex items-center justify-center p-1.5 flex-shrink-0 shadow-sm border border-slate-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute bottom-0 right-0 border-2 border-white animate-pulse" />
                    <img
                      src="/logo coreauto.png"
                      alt="Coreauto"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-sm leading-tight text-white">Coreauto</h5>
                    <span className="text-[10px] text-slate-200 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Suporte Oficial
                    </span>
                  </div>
                </div>
                {/* Close Button */}
                <button
                  onClick={() => setIsWppChatOpen(false)}
                  className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Fechar chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Body: Subtle classic WhatsApp chat pattern or light gray */}
              <div className="bg-[#e5ddd5] p-4 space-y-3 max-h-[250px] overflow-y-auto relative" style={{ backgroundImage: 'radial-gradient(#dfdcd6 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
                
                {/* System Message */}
                <div className="text-center">
                  <span className="bg-white/70 backdrop-blur-sm text-[9px] font-black uppercase text-slate-500 py-1 px-2.5 rounded-full tracking-wider border border-slate-200/10 shadow-xs">
                    Hoje
                  </span>
                </div>

                {/* Assistant Message Bubble */}
                <div className="flex items-start gap-2 max-w-[90%]">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-left border border-slate-200/10">
                    <p className="text-xs text-slate-800 leading-relaxed">
                      Olá! Seja bem-vindo ao atendimento da <strong>Coreauto</strong>. 😊
                    </p>
                    <p className="text-xs text-slate-800 leading-relaxed mt-1.5">
                      Qual peça você está precisando para o seu Hyundai ou Kia hoje? Envie uma mensagem para nossa equipe e consulte o nosso estoque!
                    </p>
                    <span className="block text-[8px] text-slate-400 text-right mt-1 font-medium">
                      Coreauto • Agora
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Footer / Action Area */}
              <div className="p-3 bg-white border-t border-slate-100 space-y-2">
                {/* Primary WhatsApp Action Button */}
                <button
                  onClick={handleFloatingCall}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-2.5 rounded-xl font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-100 cursor-pointer active:scale-98"
                >
                  {/* Real WhatsApp SVG Logo (White inside green button) */}
                  <svg
                    className="w-5 h-5 text-white fill-current flex-shrink-0"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  <span>Chamar no WhatsApp</span>
                </button>

                {/* Direct Dial Telephone Button */}
                <a
                  href={`tel:+${WHATSAPP_PHONE}`}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer active:scale-98"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Ligar por Telefone</span>
                </a>
              </div>

            </motion.div>
          )}

          {/* Glowing Closed Tooltip */}
          {!isWppChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="bg-slate-950/95 text-white border border-slate-800 text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-colors"
              onClick={() => setIsWppChatOpen(true)}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Dúvidas? Fale Conosco</span>
            </motion.div>
          )}

          {/* Floating WhatsApp Button with Official SVG Logo */}
          <button
            onClick={() => setIsWppChatOpen(!isWppChatOpen)}
            className="flex items-center justify-center p-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border border-[#25D366]/20 shadow-emerald-950/40 relative group"
            aria-label="Toggle WhatsApp Chat Window"
          >
            {/* Real WhatsApp SVG Logo (Sharp & Precise) */}
            <svg
              className="w-9.5 h-9.5 flex-shrink-0 text-white fill-current"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </button>
        </div>
        </div>

      </div>
    </div>
  );
}
