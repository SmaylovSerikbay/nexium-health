/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageCircle, X, ChevronRight, MessageSquareCode } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Phone numbers provided by the user
  const contacts = [
    {
      name: "Отдел продаж АСМО",
      phone: "+7 702 149 1010",
      numeric: "77021491010",
      role: "Консультация, коммерческие предложения, договоры",
      color: "bg-orange-500"
    },
    {
      name: "Техническая поддержка АСМО",
      phone: "+7 778 917 1790",
      numeric: "77789171790",
      role: "Сервисное обслуживание, интеграции, ПО",
      color: "bg-[#0071e3]"
    }
  ];

  const handleChat = (numeric: string) => {
    const text = encodeURIComponent(
      "Здравствуйте! Меня интересуют предсменные/предрейсовые медицинские осмотры и АСМО аппараты Nexium Health."
    );
    const url = `https://wa.me/${numeric}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header of widget */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-5 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-black/10 hover:bg-black/20 text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="space-y-1 pr-6">
                <span className="text-[10px] uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-white font-mono">
                  Прямая связь в WhatsApp
                </span>
                <h4 className="text-base font-bold tracking-tight">Nexium Health АСМО</h4>
                <p className="text-[11px] text-white/80">
                  Выберите отдел для моментального начала переписки. Наши специалисты проконсультируют вас по предрейсовым, послерейсовым, предсменным и послесменным медосмотрам.
                </p>
              </div>
            </div>

            {/* Selection choices list */}
            <div className="p-4 space-y-3 bg-[#fbfbfd] dark:bg-zinc-900/40">
              {contacts.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => handleChat(contact.numeric)}
                  type="button"
                  className="w-full text-left p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200/65 dark:border-white/5 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-sm transition-all duration-300 group cursor-pointer flex items-center justify-between"
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${contact.color}`} />
                      <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {contact.name}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 dark:text-[#86868b] leading-tight font-sans">
                      {contact.role}
                    </p>
                    <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                      {contact.phone}
                    </p>
                  </div>
                  <div className="p-2 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>

            {/* Footer status indicator */}
            <div className="px-5 py-3 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/30 flex items-center justify-between">
              <span className="text-[10px] text-slate-500 dark:text-[#86868b] flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                Специалисты онлайн
              </span>
              <span className="text-[9px] text-[#86868b] font-sans">
                Астана • РК
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="w-14 h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25d366]/20 cursor-pointer relative group"
        id="whatsapp-floating-trigger"
        aria-label="Связаться в WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 text-white font-mono text-[9px] font-bold rounded-full flex items-center justify-center animate-bounce">
          2
        </span>
        
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
