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
            className="bg-white border border-slate-205 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-950 shadow-xs"
          >
            {/* Header Trigger */}
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full flex items-center justify-between text-left p-5 text-slate-950 font-display font-black text-[14px] sm:text-[15px] hover:bg-slate-50 transition-colors select-none cursor-pointer"
            >
              <div className="flex items-center gap-3.5 pr-4">
                <HelpCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>{item.question}</span>
              </div>
              <div className="w-6 h-6 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                {isOpen ? <Minus className="w-4 h-4 text-amber-600 font-bold" /> : <Plus className="w-4 h-4 text-slate-950 font-bold" />}
              </div>
            </button>

            {/* Answer body using motion/react for perfectly smooth layout accordion transitions */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="p-5 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
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
