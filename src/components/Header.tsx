import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, PhoneCall } from 'lucide-react';
import Logo from './Logo';
import { WHATSAPP_PHONE } from '../data';
import { AnimatePresence, motion } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = isScrolled ? 80 : 96; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/85 h-20 sm:h-24 shadow-sm'
          : 'bg-white h-24 sm:h-28 border-b border-slate-150'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="cursor-pointer flex items-center h-full" onClick={() => scrollToSection('home')}>
            <Logo className={`transition-all duration-300 origin-left ${isScrolled ? '-my-2 sm:-my-4 scale-[0.9]' : '-my-3 sm:-my-5'}`} />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-semibold text-slate-700 hover:text-amber-500 transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('categorias')}
              className="text-sm font-semibold text-slate-700 hover:text-amber-500 transition-colors cursor-pointer"
            >
              Categorias
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-sm font-semibold text-slate-700 hover:text-amber-500 transition-colors cursor-pointer"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('como-chegar')}
              className="text-sm font-semibold text-slate-700 hover:text-amber-500 transition-colors cursor-pointer"
            >
              Como Chegar
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-semibold text-slate-700 hover:text-amber-500 transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Olá! Gostaria de consultar a disponibilidade de uma peça.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2.5 rounded-lg border border-emerald-500/20 shadow-md shadow-emerald-950/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>CONSULTA NO WHATSAPP</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 hover:text-amber-500 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white/98 border-b border-slate-200/90 backdrop-blur-lg py-4 px-4 space-y-3 shadow-xl"
          >
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 px-3 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg text-sm font-semibold transition-all"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('categorias')}
              className="block w-full text-left py-2 px-3 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg text-sm font-semibold transition-all"
            >
              Categorias de Peças
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left py-2 px-3 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg text-sm font-semibold transition-all"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('como-chegar')}
              className="block w-full text-left py-2 px-3 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg text-sm font-semibold transition-all"
            >
              Como Chegar
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 px-3 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg text-sm font-semibold transition-all"
            >
              Dúvidas Frequentes
            </button>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Olá! Gostaria de consultar a disponibilidade de uma peça.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-xs py-3 rounded-lg w-full transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>FALAR COM ESPECIALISTA</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
