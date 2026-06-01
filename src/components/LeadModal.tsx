/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, CheckCircle, Send, ShieldAlert, Sparkles } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  employeesCount: number;
  terminalsCount: number;
}

export default function LeadModal({ isOpen, onClose, employeesCount, terminalsCount }: LeadModalProps) {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredPlan, setPreferredPlan] = useState("turnkey"); // turnkey, lease, purchase
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !name || !phone || !email) {
      alert("Пожалуйста, заполните все обязательные поля формы.");
      return;
    }
    
    setIsLoading(true);
    // Simulate real high-speed API dispatch
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
      
      {/* Container with liquid-glass layout */}
      <div 
        className="relative bg-white dark:bg-[#1e1e21] border border-slate-200 dark:border-white/10 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-slate-900 dark:text-[#f5f5f7] transition-all"
        id="lead-generation-modal"
      >
        
        {/* Soft Background Radial Light */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-400 hover:text-slate-600 dark:hover:text-[#f5f5f7] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Form Title */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-orange-600 dark:text-orange-400 font-bold uppercase block">Запрос расчёта</span>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Получить КП Nexium Health</h3>
              <p className="text-xs text-slate-500 dark:text-[#86868b] leading-relaxed">
                Мы подготовим официальное коммерческое предложение с точной стоимостью обслуживания под параметры вашей компании.
              </p>
            </div>

            {/* Dynamic Sync Indicators Box */}
            <div className="bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-4 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-[10px] uppercase text-slate-400 dark:text-[#86868b]">Сотрудников:</span>
                <span className="text-sm font-bold font-mono text-orange-600 dark:text-orange-400">{employeesCount} чел.</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-slate-400 dark:text-[#86868b]">Терминалов АСМО:</span>
                <span className="text-sm font-bold font-mono text-amber-500">{terminalsCount} шт.</span>
              </div>
            </div>

            {/* Input fields */}
            <div className="space-y-4">
              
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-300">Название компании *</label>
                <input 
                  type="text" 
                  required
                  placeholder="ТОО КазПромРесурс" 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-300">ФИО представителя *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Алихан Смагулов" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-300">Телефон *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+7 701 123-45-67" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-300">Корпоративный Email *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="a.smagulov@resurs.kz" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-300">Желаемый формат сотрудничества</label>
                <select 
                  value={preferredPlan}
                  onChange={(e) => setPreferredPlan(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                >
                  <option value="turnkey">Комплексная услуга «Под ключ» (Оплата за замер)</option>
                  <option value="lease">Долгосрочная аренда терминалов АСМО (Операционные OPEX)</option>
                  <option value="purchase">Приобретение оборудования в собственность (Капитальные CAPEX)</option>
                </select>
              </div>

            </div>

            {/* B2B compliance and privacy disclaimer */}
            <div className="flex gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900/40 text-[10px] text-slate-400 dark:text-[#86868b] border border-slate-200/50 dark:border-white/5">
              <ShieldAlert className="w-4 h-4 text-orange-600 shrink-0" />
              <span>
                Отправляя форму, вы подтверждаете согласие на обработку персональных данных в соответствии с Законом РК «О персональных данных и их защите» № 94-V. Заявка будет зашифрована по стандартам TLS 1.3.
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-orange-600 hover:bg-orange-750 text-white disabled:bg-slate-500 transition-all rounded-xl text-xs font-bold cursor-pointer flex items-center justify-center gap-2 shadow"
              >
                {isLoading ? (
                  <span>Отправка зашифрованного пакета...</span>
                ) : (
                  <>
                    <span>Получить официальное КП</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

          </form>
        ) : (
          /* Submission success template */
          <div className="py-10 text-center space-y-6 animate-fade-in">
            <div className="inline-flex p-4 bg-emerald-500/10 rounded-full text-emerald-500">
              <CheckCircle className="w-12 h-12" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-orange-600 dark:text-orange-400 font-bold uppercase block">Заявка принята</span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Здравствуйте, {name}!</h3>
              <p className="text-xs text-slate-500 dark:text-[#86868b] max-w-sm mx-auto leading-relaxed">
                Расчёт коммерческого предложения для <strong className="text-slate-800 dark:text-neutral-200">{company}</strong> на 
                основе ваших параметров (<span className="text-orange-600 dark:text-orange-400 font-mono font-semibold">{employeesCount} сотрудников</span> и <span className="text-amber-500 font-mono font-semibold">{terminalsCount} терминалов</span>) 
                успешно сформирован и передан в коммерческий отдел.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/50 dark:border-white/5 rounded-2xl p-4 text-xs space-y-2.5 max-w-sm mx-auto text-left">
              <p className="flex items-center gap-2">
                ⏱️ <span className="text-slate-555 dark:text-slate-300">Свяжемся с вами в течение <strong className="text-orange-600 dark:text-orange-400">15 минут</strong></span>
              </p>
              <p className="flex items-center gap-2">
                📁 <span className="text-slate-550 dark:text-slate-300">Направим PDF-презентацию оборудования</span>
              </p>
              <p className="flex items-center gap-2">
                🤝 <span className="text-slate-550 dark:text-slate-300">Предложим дату бесплатного выезда инженера</span>
              </p>
            </div>

            <div className="pt-4 max-w-xs mx-auto">
              <button
                onClick={onClose}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 dark:bg-white/5 dark:hover:bg-white/10 text-white dark:text-white rounded-xl text-xs font-semibold cursor-pointer"
              >
                Вернуться к конфигуратору
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
