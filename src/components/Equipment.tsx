/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Heart, 
  Wind, 
  Thermometer, 
  Camera, 
  Printer, 
  Layers, 
  Coins, 
  ShieldCheck, 
  HelpCircle,
  TrendingDown,
  Wrench,
  Monitor
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface EquipmentProps {
  statsImageSrc: string;
  onOpenModal: () => void;
}

export default function Equipment({ statsImageSrc, onOpenModal }: EquipmentProps) {
  const [activeTab, setActiveTab] = useState<"purchase" | "lease">("lease");

  const hardwareSpecs = [
    {
      id: "tonometer",
      title: "Интегрированный тонометр",
      badge: "Премиум замер",
      icon: Heart,
      description: "Автоматическая пневматическая манжета с деликатным компрессионным алгоритмом регулировки давления.",
      techSpecs: ["Время замера: 22-25 секунд", "Диапазон: 20 - 280 мм рт. ст.", "Синхронизирован с ИИ логикой"],
      accentColor: "text-rose-500",
      bgColor: "bg-rose-500/10"
    },
    {
      id: "breathalyzer",
      title: "Электрохимический алкотестер",
      badge: "Поверка по ГОСТ",
      icon: Wind,
      description: "Профессиональный высокочувствительный датчик с активным забором пробы воздуха. Защита от фальсификации.",
      techSpecs: ["Межповерочный интервал: 12 месяцев", "Погрешность: ±0.03 мг/л", "Автофиксация выдоха"],
      accentColor: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: "thermometer",
      title: "Бесконтактный термометр",
      badge: "Скорость 1 сек",
      icon: Thermometer,
      description: "Высокоскоростной медицинский пирометр для моментального бесконтактного определения температуры лба или запястья.",
      techSpecs: ["Погрешность: ±0.1°С", "Защита от искусственного нагрева", "Калибровка под внешнюю среду"],
      accentColor: "text-amber-500",
      bgColor: "bg-amber-500/10"
    },
    {
      id: "camera",
      title: "HD-камера c AI FaceID",
      badge: "Защита от подлога",
      icon: Camera,
      description: "Широкоугольная оптика с ИИ-модулем распознавания лиц и автоматического сопоставления с базой данных сотрудников.",
      techSpecs: ["Биометрическое сопоставление 99.8%", "Контроль моргания и взгляда", "Запись видео всего процесса"],
      accentColor: "text-indigo-500",
      bgColor: "bg-indigo-500/10"
    },
    {
      id: "printer",
      title: "Термопринтер штампов",
      badge: "Выносливость 1 млн строк",
      icon: Printer,
      description: "Износостойкий встроенный принтер для мгновенной распечатки путевых листов со штампом врача и QR-кодом.",
      techSpecs: ["Скорость печати: 80 мм/сек", "Ресурс ножа: 500 000 отрезов", "Быстрая замена термоленты"],
      accentColor: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    }
  ];

  return (
    <section 
      id="equipment" 
      className="py-24 bg-white dark:bg-[#161617] text-slate-800 dark:text-[#f5f5f7] border-y border-slate-200 dark:border-zinc-800/40 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings - Apple Manifesto Style */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-orange-600 dark:text-orange-400 font-sans text-xs font-semibold tracking-widest uppercase">
            Архитектура инноваций
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[0.95] font-sans text-slate-900 dark:text-neutral-50">
            АСМО аппарат Nexium Health.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-[#86868b] font-normal max-w-xl mx-auto">
            Медицинский аппаратно-программный комплекс для автоматического проведения предрейсовых, послерейсовых, предсменных и послесменных медицинских осмотров водителей и промышленного персонала РК.
          </p>
        </div>

        {/* Hardware Highlight Grid - 5 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          
          {/* Clean spec card without image for intuitive interface as requested */}
          <div className="bg-slate-50 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all hover:border-slate-300 dark:hover:border-white/10">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-orange-500/10">
                  <Monitor className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-[10px] text-slate-400 dark:text-[#86868b] font-mono border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded-full">
                  Сенсорный экран
                </span>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">Интуитивный интерфейс</h4>
                <p className="text-xs text-slate-500 dark:text-[#86868b] leading-relaxed">
                  Голосовое сопровождение каждого шага на русском языке, крупные понятные индикаторы замера и дружелюбный дизайн для сотрудников любого уровня ИТ-грамотности.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-[11px] text-slate-400 dark:text-[#86868b] font-sans font-mono">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Диагональ: IPS 10.1 дюймов</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 dark:text-[#86868b] font-sans font-mono">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Голосовой помощник медосмотра</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 dark:text-[#86868b] font-sans font-mono">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Поддержка бесконтактных RFID карт</span>
              </div>
            </div>
          </div>

          {/* Grid loop of hardware elements */}
          {hardwareSpecs.map((spec) => {
            const IconComponent = spec.icon;
            return (
              <div 
                key={spec.id}
                className="bg-slate-50 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all hover:border-slate-300 dark:hover:border-white/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl ${spec.bgColor}`}>
                      <IconComponent className={`w-5 h-5 ${spec.accentColor}`} />
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-[#86868b] font-mono border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded-full">
                      {spec.badge}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">{spec.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-[#86868b] leading-relaxed">{spec.description}</p>
                  </div>
                </div>

                {/* Micro tech specs inside card */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 space-y-1">
                  {spec.techSpecs.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400 dark:text-[#86868b] font-sans font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

        </div>

        {/* Financial Section */}
        <div className="mt-24 pt-16 border-t border-slate-200 dark:border-white/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8 pb-8 border-b border-slate-200 dark:border-white/5">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase text-orange-600 dark:text-orange-400 font-bold">Гибкие финансовые модули</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Как получить Nexium Health?</h3>
              <p className="text-xs text-slate-400 dark:text-[#86868b]">Выберите оптимальный формат владения оборудованием в зависимости от CAPEX целей.</p>
            </div>
            
            {/* Tab Swapper */}
            <div className="inline-flex bg-slate-200 dark:bg-zinc-800 p-1 rounded-full self-start">
              <button
                onClick={() => setActiveTab("lease")}
                className={`px-5 py-2 rounded-full text-xs font-medium cursor-pointer transition-all ${
                  activeTab === "lease" 
                    ? "bg-orange-600 text-white shadow" 
                    : "text-slate-600 dark:text-[#86868b] hover:text-slate-900 dark:hover:text-[#f5f5f7]"
                }`}
              >
                Аренда АСМО (Операционные расходы)
              </button>
              <button
                onClick={() => setActiveTab("purchase")}
                className={`px-5 py-2 rounded-full text-xs font-medium cursor-pointer transition-all ${
                  activeTab === "purchase" 
                    ? "bg-orange-600 text-white shadow" 
                    : "text-slate-600 dark:text-[#86868b] hover:text-slate-900 dark:hover:text-[#f5f5f7]"
                }`}
              >
                Покупка терминалов (Капитальные расходы)
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "lease" ? (
              <motion.div 
                key="lease"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Lease visual content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-orange-500/10 rounded-2xl shrink-0 self-start">
                      <Coins className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-medium text-slate-950 dark:text-neutral-50">Фиксированная аренда — всего 400 000 ₸ / мес</h4>
                      <p className="text-xs text-slate-500 dark:text-[#86868b] leading-relaxed">
                        Идеальный вариант для компаний различного масштаба. Вы получаете передовой медицинский аппарат в пользование со встроенным программным обеспечением.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-indigo-500/10 rounded-2xl shrink-0 self-start">
                      <Wrench className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-medium text-slate-950 dark:text-neutral-50">Полный технический сервис 100% за наш счет</h4>
                      <p className="text-xs text-slate-500 dark:text-[#86868b] leading-relaxed">
                        Мы берем на себя регулярную калибровку приборов, поверку алкотестера, обновление ПО и резервную замену терминала при любой неисправности.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl shrink-0 self-start">
                      <TrendingDown className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-medium text-slate-950 dark:text-neutral-50">Экономия до 18 млн тенге ежегодно</h4>
                      <p className="text-xs text-slate-500 dark:text-[#86868b] leading-relaxed">
                        Не требуется нанимать штатную медсестру, обустраивать лицензированный кабинет на объекте и вести архивы бумажных журналов.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-2xl p-6 space-y-4 text-center">
                  <span className="text-[10px] font-mono tracking-widest text-orange-600 dark:text-orange-400 font-bold uppercase">Облачный лизинг оборудования</span>
                  <div className="space-y-1">
                    <p className="text-[11px] text-slate-400 dark:text-[#86868b]">Арендная плата за один аппарат (включая софт):</p>
                    <p className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">400 000 ₸ <span className="text-xs font-normal text-slate-500 font-sans">/ месяц</span></p>
                  </div>
                  <ul className="text-xs text-left text-slate-500 dark:text-slate-300 space-y-2 py-4 border-y border-slate-200 dark:border-white/5">
                    <li className="flex items-center gap-2">🟢 <span className="font-mono text-[11px]">Бесплатная замена аппарата за 12 часов</span></li>
                    <li className="flex items-center gap-2">🟢 <span className="font-mono text-[11px]">Межповерочные интервалы за наш счет</span></li>
                    <li className="flex items-center gap-2">🟢 <span className="font-mono text-[11px]">Установка за 1 рабочий день</span></li>
                  </ul>
                  <button 
                    onClick={onOpenModal}
                    className="w-full py-3 bg-orange-600 text-white hover:bg-orange-700 transition-all rounded-xl text-xs font-semibold cursor-pointer"
                  >
                    Арендовать АСМО
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="purchase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Purchase visual content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl shrink-0 self-start">
                      <Layers className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-medium text-slate-950 dark:text-neutral-50">Приобретение в собственность</h4>
                      <p className="text-xs text-slate-500 dark:text-[#86868b] leading-relaxed">
                        Полноценная покупка оборудования по цене 4 200 000 ₸ (программное обеспечение полностью входит в стоимость аппарата). Идеально ложится на долгосрочные инвест-программы крупных корпораций с развитым бюджетом CAPEX.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-indigo-500/10 rounded-2xl shrink-0 self-start">
                      <ShieldCheck className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-medium text-slate-950 dark:text-neutral-50">Официальная гарантия 5 лет</h4>
                      <p className="text-xs text-slate-500 dark:text-[#86868b] leading-relaxed">
                        Жесткие тесты на надежность. В случае заводского дефекта — оперативный выезд сервисного инженера или выдача аналогичного терминала по гарантии.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-rose-500/10 rounded-2xl shrink-0 self-start">
                      <HelpCircle className="w-5 h-5 text-rose-500" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-medium text-slate-950 dark:text-neutral-50">Рассрочка платежа под 0%</h4>
                      <p className="text-xs text-slate-500 dark:text-[#86868b] leading-relaxed">
                        Возможность разделить оплату за терминалы на 3 или 6 месяцев без наценок и переплат банков-партнеров.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-2xl p-6 space-y-4 text-center">
                  <span className="text-[10px] font-mono tracking-widest text-[#10b981] font-bold uppercase">Собственность и CAPEX выгода</span>
                  <div className="space-y-1">
                    <p className="text-[11px] text-slate-400 dark:text-[#86868b]">Стоимость приобретения 1 терминала (софт включен):</p>
                    <p className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">4 200 000 ₸ <span className="text-xs font-normal text-slate-500 font-sans">в один платеж</span></p>
                  </div>
                  <ul className="text-xs text-left text-slate-500 dark:text-slate-300 space-y-2 py-4 border-y border-slate-200 dark:border-white/5">
                    <li className="flex items-center gap-2">🟢 <span className="font-mono text-[11px]">Беспроцентная рассрочка до 6 месяцев</span></li>
                    <li className="flex items-center gap-2">🟢 <span className="font-mono text-[11px]">Официальный паспорт оборудования</span></li>
                    <li className="flex items-center gap-2">🟢 <span className="font-mono text-[11px]">Бесплатная настройка регламентов</span></li>
                  </ul>
                  <button 
                    onClick={onOpenModal}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white transition-all rounded-xl text-xs font-semibold cursor-pointer"
                  >
                    Заказать терминал
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
