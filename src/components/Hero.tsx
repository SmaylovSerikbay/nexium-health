/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Play, Sparkles, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenModal: () => void;
  terminalImageSrc: string;
}

export default function Hero({ onOpenModal, terminalImageSrc }: HeroProps) {
  
  const scrollToCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("calculator");
    if (element) {
      const offset = 54;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#fbfbfd] via-white to-[#fbfbfd] dark:from-black dark:via-[#161617] dark:to-black transition-colors duration-300"
    >
      {/* Background Soft Natural Lighting Gradients in themed Orange */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-orange-500/10 to-amber-500/10 dark:from-orange-600/20 dark:to-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Column 1: Copywriting Manifests & Core CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center text-slate-900 dark:text-white space-y-6">
          
          {/* Master Apple style manifest heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-[-0.04em] leading-[0.95] font-sans text-slate-900 dark:text-neutral-50"
          >
            Автоматические <br />
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              медосмотры сотрудников
            </span> <br />
            за 60 секунд.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 dark:text-[#86868b] max-w-xl font-normal leading-relaxed font-sans"
          >
            Профессиональный АСМО аппарат Nexium Health для автоматизации медицинских осмотров в Республике Казахстан. Проводите сертифицированные предсменные, послесменные, предрейсовые и послерейсовые медицинские осмотры водителей и персонала всего за 60 секунд с моментальной ЭЦП подписью теле-врача.
          </motion.p>

          {/* Key Quick USPs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-200/60 dark:border-white/5"
          >
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />
              <div className="text-xs">
                <p className="font-semibold text-slate-800 dark:text-neutral-200">1 минута</p>
                <p className="text-slate-400 dark:text-[#86868b]">длительность замера</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <div className="text-xs">
                <p className="font-semibold text-slate-800 dark:text-neutral-200">100% Легально</p>
                <p className="text-slate-400 dark:text-[#86868b]">Лицензия МЗ РК</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
              <div className="text-xs">
                <p className="font-semibold text-slate-800 dark:text-neutral-200">Интеграция</p>
                <p className="text-slate-400 dark:text-[#86868b]">с 1С, СКУД и ERP</p>
              </div>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 pt-4"
          >
            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-all shadow-lg shadow-orange-600/15 cursor-pointer text-center"
            >
              Запросить КП и Презентацию
            </button>
            
            <a
              onClick={scrollToCalculator}
              href="#calculator"
              className="px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-neutral-300 bg-white hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-xl transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
            >
              Рассчитать стоимость
            </a>
          </motion.div>
        </div>

        {/* Column 2: Product Showcase Render with sleek Liquid Glass card */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative max-w-sm sm:max-w-md w-full"
          >
            {/* Visual Frame */}
            <div className="relative group overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-zinc-900/60 p-4 shadow-2xl dark:shadow-inner">
              
              {/* Image Container with high quality photorealistic render */}
              <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden rounded-2xl bg-black/5 dark:bg-black/40 flex items-center justify-center">
                <img 
                  src={terminalImageSrc} 
                  alt="Nexium Health Terminal" 
                  className="object-contain w-full h-full max-h-[460px] p-2 hover:scale-102 transition-transform duration-700"
                  id="target-hero-terminal-image"
                />
                
                {/* Floating Telemetry Box (Liquid Glassmatic telemetry overlay) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/75 dark:bg-[#1c1c1ecc]/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-xl p-3.5 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <div>
                      <h4 className="text-[11px] font-sans font-medium text-slate-800 dark:text-neutral-200 uppercase tracking-wider">Терминал в сети</h4>
                      <p className="text-[10px] text-slate-400 dark:text-[#86868b] font-mono">ID: NXM-92040 (Ready)</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-orange-600 dark:text-orange-500 font-sans font-mono">120/80 мм рт. ст.</p>
                    <p className="text-[9px] text-orange-500 font-mono">Замер завершен</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Glowing Accent Ring Behind */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>

      </div>

      {/* Trust & Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-slate-300/30 dark:border-white/5 bg-slate-200/10 dark:bg-white/[0.01] rounded-2xl px-6">
          <div className="text-center sm:text-left">
            <span className="block text-3xl font-bold tracking-tight text-slate-900 dark:text-white">&gt; 10 млн</span>
            <span className="block text-xs text-slate-400 dark:text-[#86868b] mt-1">Осмотров проведено</span>
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-3xl font-bold tracking-tight text-slate-900 dark:text-white">60 сек</span>
            <span className="block text-xs text-slate-400 dark:text-[#86868b] mt-1">В среднем на сотрудника</span>
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-3xl font-bold tracking-tight text-slate-900 dark:text-white">24 / 7</span>
            <span className="block text-xs text-slate-400 dark:text-[#86868b] mt-1">Дежурные врачи онлайн</span>
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-3xl font-bold tracking-tight text-slate-900 dark:text-white">0</span>
            <span className="block text-xs text-slate-400 dark:text-[#86868b] mt-1">Штрафов госорганов РК</span>
          </div>
        </div>
      </div>
    </section>
  );
}
