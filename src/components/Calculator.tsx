/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { 
  Users, 
  Monitor, 
  ArrowRight,
  ShieldCheck,
  Check,
  Info,
  Sliders,
  DollarSign,
  Briefcase,
  Heart,
  CalendarDays,
  FileSpreadsheet
} from "lucide-react";

interface CalculatorProps {
  onOpenModal: () => void;
}

type OwnershipType = "rent" | "buy";
type ServiceType = "with_medic" | "no_medic";

export default function Calculator({ onOpenModal }: CalculatorProps) {
  // Configurator states
  const [employees, setEmployees] = useState<number>(60);
  const [terminals, setTerminals] = useState<number>(1);
  const [ownership, setOwnership] = useState<OwnershipType>("rent");
  const [service, setService] = useState<ServiceType>("with_medic");

  // Formula: Employees * 22 working days * 2 shifts
  const monthlyCheckups = useMemo(() => {
    return employees * 22 * 2;
  }, [employees]);

  // Pricing constants (strictly matching user request)
  // 600 KZT per exam with medical staff, 0 KZT with own staff (software included in hardware)
  const pricePerCheckup = useMemo(() => {
    return service === "with_medic" ? 600 : 0;
  }, [service]);

  const serviceMonthlyTotal = useMemo(() => {
    return monthlyCheckups * pricePerCheckup;
  }, [monthlyCheckups, pricePerCheckup]);

  // Equipment costs: 4,200,000 for buy or 400,000 for lease per month
  const equipmentTotal = useMemo(() => {
    return ownership === "buy" ? terminals * 4200000 : terminals * 400000;
  }, [ownership, terminals]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("kk-KZ", {
      style: "currency",
      currency: "KZT",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section 
      id="calculator" 
      className="py-20 bg-slate-50 dark:bg-black text-slate-800 dark:text-[#f5f5f7] border-t border-slate-200 dark:border-[#2d2d2f] transition-colors duration-300 relative font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Apple compact header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-white/5">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-orange-600 dark:text-orange-400 font-bold tracking-wider">Интерактивный расчет</span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Конфигуратор стоимости АСМО</h3>
            <p className="text-xs text-slate-500 dark:text-[#86868b]">Рассчитайте точные затраты на предрейсовые/послерейсовые медицинские осмотры.</p>
          </div>
        </div>

        {/* Dynamic Dual columns block resembling 'Как получить' */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel (7-cols): Simple, clean, resting slider inputs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Extremely prominent, ultra-visible Rent vs Buy Selector */}
            <div className="p-1 rounded-2xl bg-slate-200/80 dark:bg-zinc-900 border border-slate-300/40 dark:border-white/15 grid grid-cols-2 gap-2 shadow-sm">
              <button
                type="button"
                onClick={() => setOwnership("rent")}
                className={`py-4 px-6 rounded-xl text-xs sm:text-sm font-bold tracking-tight cursor-pointer transition-all flex flex-col items-center justify-center gap-1.5 focus:outline-none ${
                  ownership === "rent" 
                    ? "bg-orange-600 text-white shadow-md shadow-orange-600/10 scale-[1.01]" 
                    : "text-slate-600 dark:text-[#86868b] hover:text-slate-900 dark:hover:text-[#f5f5f7] hover:bg-slate-300/50 dark:hover:bg-zinc-800/50"
                }`}
              >
                <span className="uppercase text-[9px] tracking-widest font-mono opacity-80">Вариант 1</span>
                <span>АРЕНДА АСМО АППАРАТА</span>
                <span className={`text-[11px] font-mono font-medium ${ownership === "rent" ? "text-orange-100" : "text-slate-500"}`}>400 000 ₸ / мес</span>
              </button>
              
              <button
                type="button"
                onClick={() => setOwnership("buy")}
                className={`py-4 px-6 rounded-xl text-xs sm:text-sm font-bold tracking-tight cursor-pointer transition-all flex flex-col items-center justify-center gap-1.5 focus:outline-none ${
                  ownership === "buy" 
                    ? "bg-orange-600 text-white shadow-md shadow-orange-600/10 scale-[1.01]" 
                    : "text-slate-600 dark:text-[#86868b] hover:text-slate-900 dark:hover:text-[#f5f5f7] hover:bg-slate-300/50 dark:hover:bg-zinc-800/50"
                }`}
              >
                <span className="uppercase text-[9px] tracking-widest font-mono opacity-80">Вариант 2</span>
                <span>ПОКУПКА В СОБСТВЕННОСТЬ</span>
                <span className={`text-[11px] font-mono font-medium ${ownership === "buy" ? "text-orange-100" : "text-slate-500"}`}>4 200 000 ₸ единоразово</span>
              </button>
            </div>
            
            {/* Input card 1: Employees */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200/65 dark:border-white/5 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-[#86868b] flex items-center gap-1.5 font-medium">
                  <Users className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  Штат сотрудников на медосмотрах (предсменные / послесменные / предрейсовые)
                </span>
                <span className="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded font-mono">
                  {employees} чел.
                </span>
              </div>
              <input 
                id="calc-employees"
                type="range"
                min="10"
                max="1000"
                step="5"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded appearance-none cursor-pointer accent-orange-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 dark:text-zinc-500 font-mono">
                <span>10 чел.</span>
                <span>500 чел.</span>
                <span>1000 чел.</span>
              </div>
            </div>

            {/* Input card 2: Terminals */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200/65 dark:border-white/5 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-[#86868b] flex items-center gap-1.5 font-medium">
                  <Monitor className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  Количество необходимых АСМО аппаратов
                </span>
                <span className="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded font-mono">
                  {terminals} шт.
                </span>
              </div>
              <input 
                id="calc-terminals"
                type="range"
                min="1"
                max="20"
                step="1"
                value={terminals}
                onChange={(e) => setTerminals(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-zinc-800 rounded appearance-none cursor-pointer accent-orange-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 dark:text-zinc-500 font-mono">
                <span>1 шт.</span>
                <span>10 шт.</span>
                <span>20 шт.</span>
              </div>
            </div>

            {/* Input card 3: Medical Service type with toggle */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200/65 dark:border-white/5">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-3">Сопровождение медицинских осмотров</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setService("with_medic")}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    service === "with_medic"
                      ? "border-orange-600 bg-orange-600/5 ring-1 ring-orange-500"
                      : "border-slate-200 dark:border-white/5 bg-black/5 dark:bg-black/20 hover:border-slate-300 dark:hover:border-zinc-700"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">С медиком под ключ</span>
                    {service === "with_medic" && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-[#86868b] mt-1.5 leading-tight">
                    Дежурный теле-врач подписывает замеры ЭЦП 24/7. База данных интегрирована с вашей ERP.
                  </p>
                  <span className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400 mt-3 block">
                    600 ₸ / замер
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setService("no_medic")}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    service === "no_medic"
                      ? "border-orange-600 bg-orange-600/5 ring-1 ring-orange-500"
                      : "border-slate-200 dark:border-white/5 bg-black/5 dark:bg-black/20 hover:border-slate-300 dark:hover:border-zinc-700"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Своя медсестра / врач</span>
                    {service === "no_medic" && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-[#86868b] mt-1.5 leading-tight">
                    Программное обеспечение и личный кабинет врача уже полностью включены в стоимость терминала.
                  </p>
                  <span className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400 mt-3 block">
                    0 ₸ / замер (Софт включен)
                  </span>
                </button>
              </div>
            </div>

          </div>

          {/* Right panel (5-cols): Pristine, high contrast summary card matching the visual balance */}
          <div className="lg:col-span-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
            <span className="text-[10px] font-mono tracking-widest text-[#86868b] font-bold uppercase block border-b border-slate-100 dark:border-white/5 pb-2">Спецификация и расчет</span>
            
            <div className="space-y-4 text-xs">
              
              {/* Checkup project volume info */}
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-white/5">
                <span className="text-slate-500 dark:text-[#86868b] flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-slate-400" />
                  Количество сменных замеров:
                </span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">{monthlyCheckups} замеров / мес</span>
              </div>

              {/* Row: Equipment item billing */}
              <div className="flex justify-between items-start py-2 border-b border-slate-100 dark:border-white/5">
                <span className="text-slate-500 dark:text-[#86868b]">
                  {ownership === "buy" ? "Приобретение оборудования:" : "Аренда оборудования (софт включен):"}
                </span>
                <span className="font-bold text-slate-900 dark:text-white font-mono text-right">
                  {formatCurrency(equipmentTotal)}
                  {ownership === "rent" && <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-sans block">({terminals} шт. × 400 000 ₸)</span>}
                  {ownership === "buy" && <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-sans block">({terminals} шт. × 4 200 000 ₸)</span>}
                </span>
              </div>

              {/* Row: Service support billing */}
              <div className="flex justify-between items-start py-2 border-b border-slate-100 dark:border-white/5">
                <span className="text-slate-500 dark:text-[#86868b]">Сопровождение медосмотров:</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono text-right">
                  {service === "with_medic" ? formatCurrency(serviceMonthlyTotal) : "0 ₸ (Включено)"}
                  {service === "with_medic" && (
                    <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-sans block">
                      ({monthlyCheckups} замер. × 600 ₸)
                    </span>
                  )}
                </span>
              </div>

              {/* Grand Total output clearly separated for Rent vs Purchase to avoid ugly formula text */}
              <div className="bg-gradient-to-br from-slate-50 to-orange-500/5 dark:from-black/40 dark:to-orange-500/5 rounded-2xl p-5 border border-orange-500/10 space-y-3">
                <span className="text-[10px] text-orange-600 dark:text-orange-400 font-mono tracking-wider block uppercase font-bold">ИТОГОВЫЙ РАСЧЕТ СТОИМОСТИ АСМО</span>
                
                {ownership === "buy" ? (
                  <div className="space-y-2">
                    <div>
                      <span className="text-[10px] text-slate-400 dark:text-[#86868b] block">Разовый платеж за терминалы:</span>
                      <p className="text-2xl font-extrabold text-[#0071e3] font-mono leading-none">
                        {formatCurrency(equipmentTotal)}
                      </p>
                    </div>
                    {service === "with_medic" && (
                      <div className="pt-1.5 border-t border-slate-200/50 dark:border-white/5">
                        <span className="text-[10px] text-slate-400 dark:text-[#86868b] block">Ежемесячная телемедицина (за медосмотры):</span>
                        <p className="text-base font-bold text-orange-600 dark:text-orange-400 font-mono leading-none">
                          {formatCurrency(serviceMonthlyTotal)} <span className="text-xs font-normal">/ мес</span>
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <span className="text-[10px] text-slate-400 dark:text-[#86868b] block">Общий ежемесячный платеж (Аренда + Медосмотры):</span>
                    <p className="text-2xl font-extrabold text-[#0071e3] font-mono leading-none">
                      {formatCurrency(equipmentTotal + serviceMonthlyTotal)} <span className="text-xs font-normal">/ мес</span>
                    </p>
                  </div>
                )}
                
                <span className="text-[9px] text-slate-400 dark:text-[#86868b] leading-tight block pt-2 border-t border-slate-100 dark:border-white/5">
                  ✓ Лицензия МЗ РК • Полное соответствие приказам и кодексам РК
                </span>
              </div>

            </div>

            {/* Micro legal or certification label */}
            <div className="flex items-start gap-2 text-[10px] text-slate-400 dark:text-[#86868b] leading-relaxed bg-slate-50 dark:bg-black/20 p-3.5 rounded-xl border border-slate-200/50 dark:border-white/5">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                Все журналы предсменных/предрейсовых медосмотров формируются в электронном виде с ЭЦП медицинского сотрудника в автоматическом АСМО-режиме за 60 сек.
              </span>
            </div>

            <button 
              onClick={onOpenModal}
              className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white transition-all rounded-xl text-xs font-bold cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-orange-600/10 active:scale-[0.98]"
            >
              Получить КП с расчетом медосмотров на email <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
