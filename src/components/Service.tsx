/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  Users, 
  Signature, 
  Database, 
  ShieldAlert, 
  CheckSquare, 
  Cpu
} from "lucide-react";

export default function Service() {
  const serviceCards = [
    {
      id: "doctors",
      title: "Предрейсовые и предсменные медосмотры 24/7",
      highlight: "Реакция < 60 сек",
      description: "Собственная штатная команда аккредитованных медицинских специалистов для лицензированного проведения предсменных, послесменных, предрейсовых и послерейсовых медицинских осмотров водителей и рабочих.",
      bullets: [
        "Среднее время вынесения заключения: 45 секунд",
        "Полное ведение электронных журналов предрейсовых осмотров",
        "Все врачи имеют актуальные сертификаты по телемедицине"
      ],
      icon: Users,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10"
    },
    {
      id: "eds",
      title: "Электронно-цифровая подпись (ЭЦП)",
      highlight: "Гост шифрование",
      description: "Каждое медицинское заключение и штамп в путевом листе заверяется цифровой подписью (ЭЦП) врача согласно Закону РК «Об электронном документе и ЭЦП» № 370-II.",
      bullets: [
        "Интеграция с ИС Министерства здравоохранения РК",
        "Уникальный QR-код на каждом напечатанном стикере",
        "Криптографическая защита от подделок и взломов"
      ],
      icon: Signature,
      iconColor: "text-indigo-500",
      iconBg: "bg-indigo-500/10"
    },
    {
      id: "databases",
      title: "Интеграция со СКУД, 1С и SAP",
      highlight: "Полная автоматизация",
      description: "Бесшовная синхронизация данных осмотра с внутренними ИТ-системами вашей компании для минимизации ручного ввода.",
      bullets: [
        "Автоблокировка пропусков СКУД при непрохождении осмотра",
        "Мгновенное списание времени в кадровом учете 1С:ЗУП",
        "Открытый API для подключения в кастомные CRM"
      ],
      icon: Database,
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-500/10"
    },
    {
      id: "legal",
      title: "Юридическая защита & Контроль",
      highlight: "100% прохождение проверок",
      description: "Мы берем на себя сопровождение при проверках Инспекции транспортного контроля РК, Государственной инспекции труда и прокуратуры.",
      bullets: [
        "Архив видеозаписей каждого прохождения осмотра — 5 лет",
        "Готовые шаблоны документов для инспекторов",
        "Юридическое сопровождение в спорных ситуациях"
      ],
      icon: ShieldAlert,
      iconColor: "text-rose-500",
      iconBg: "bg-rose-500/10"
    }
  ];

  return (
    <section 
      id="service" 
      className="py-24 bg-slate-50 dark:bg-black text-slate-800 dark:text-[#f5f5f7] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Apple Style Section Intro Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-orange-600 dark:text-orange-400 font-sans text-xs font-semibold tracking-widest uppercase">
              Сервисная экосистема
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight font-sans text-slate-900 dark:text-neutral-50 leading-tight">
              Услуга «Под ключ». <br />
              Медосмотры без забот.
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-500 dark:text-[#86868b] max-w-sm font-normal">
            Мы берем на себя полную организацию процесса: от доставки аппаратов до круглосуточного медицинского сопровождения и юридической подготовки.
          </p>
        </div>

        {/* Bento Grid layout of services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
                className="bg-white dark:bg-[#161617] border border-slate-200 dark:border-[#333336] rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-zinc-700 transition-colors shadow-sm"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl ${card.iconBg}`}>
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-orange-600 dark:text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full">
                      {card.highlight}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-950 dark:text-neutral-50">{card.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-[#86868b] leading-relaxed">{card.description}</p>
                  </div>
                </div>

                {/* Bullets lists */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 space-y-2.5">
                  {card.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 dark:text-slate-300">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Service Banner block */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-zinc-900 border border-white/5 rounded-3xl p-8 relative overflow-hidden">
          {/* Accent lighting glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-0.5 rounded-full text-white">
                <Cpu className="w-3 h-3 text-orange-500" />
                <span className="text-[10px] tracking-tight font-mono">Nexium TeleMed Platform</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">Интеграция с цифровыми системами МЗ РК</h3>
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                Наше программное обеспечение полностью адаптировано под требования цифровизации Республики Казахстан. Оно совместимо с медицинскими информационными системами (МИС) и государственными реестрами электронных путевых листов. Все осмотры подписываются цифровым методом в реальном времени.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="inline-flex flex-col bg-white/5 backdrop-blur-md border border-white/15 p-4 rounded-2xl w-full sm:w-auto">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Статус соединения</span>
                <span className="text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  МЗ РК Онлайн &bull; 2026/06
                </span>
                <p className="text-[10px] text-slate-500 font-mono mt-3">SSL-256 Bit Secure Encryption</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
