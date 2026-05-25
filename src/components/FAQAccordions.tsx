import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function FAQAccordions() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-slate-900 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg"
          >
            {/* Header Trigger */}
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full flex items-center justify-between text-left p-5 text-white font-display font-black text-[14px] sm:text-[15px] hover:bg-white/5 transition-colors select-none cursor-pointer"
            >
              <div className="flex items-center gap-3.5 pr-4">
                <HelpCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>{item.question}</span>
              </div>
              <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                {isOpen ? <Minus className="w-4 h-4 text-amber-500 font-bold" /> : <Plus className="w-4 h-4 text-white font-bold" />}
              </div>
            </button>

            {/* Answer body using motion/react for perfectly smooth accordion transitions */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="p-5 pt-4 border-t border-white/5 text-xs sm:text-sm text-slate-400 leading-relaxed bg-white/[0.02]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
