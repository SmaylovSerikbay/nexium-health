/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, FileText, Lock, Globe, CheckCircle } from "lucide-react";

export default function SpecsAndFooter() {
  const complianceDocs = [
    {
      title: "Кодекс РК «О здоровье народа»",
      ref: "Кодекс РК от 07.07.2020",
      desc: "Официально регулирует прохождение обязательных предсменных (предрейсовых) и послесменных медицинских осмотров сотрудников на предприятиях Казахстана."
    },
    {
      title: "Приказы Министерства здравоохранения РК",
      ref: "Приказ МЗ РК № ҚР ДСМ-122",
      desc: "Утверждает жесткие стандарты проведения осмотров, устанавливает требования к медицинским приборам самообслуживания и автоматизации путевых листов."
    },
    {
      title: "Госреестр Медтехники РК",
      ref: "Министерство здравоохранения РК",
      desc: "Все поставляемые терминалы АСМО внесены в государственный реестр медицинских приборов и сертифицированы для медицинского применения на территории РК."
    },
    {
      title: "Закон РК «О персональных данных»",
      ref: "Закон № 94-V в РК",
      desc: "Защита биометрии и информации о здоровье сотрудников. Базы данных Nexium Health физически размещены в контуре сертифицированных дата-центров Казахстана."
    }
  ];

  const footerLinks = [
    {
      title: "Экосистема АСМО",
      links: [
        { label: "Терминалы самообслуживания", href: "#equipment" },
        { label: "Телемедицинская платформа", href: "#service" },
        { label: "Врачи-операторы 24/7", href: "#service" },
        { label: "Конфигуратор тарифов", href: "#calculator" }
      ]
    },
    {
      title: "Юридическая чистота",
      links: [
        { label: "Регистрационные удостоверения МЗ РК", href: "#specs" },
        { label: "Соответствие Кодексу РК", href: "#specs" },
        { label: "Стандарты уполномоченного органа", href: "#specs" },
        { label: "Шаблоны актов медосмотров РК", href: "#specs" }
      ]
    },
    {
      title: "Медицинский центр",
      links: [
        { label: "Наши лицензии в РК", href: "#specs" },
        { label: "Регламенты аттестации врачей", href: "#specs" },
        { label: "Инструкции по поверке приборов", href: "#specs" },
        { label: "Техническая поддержка звонков", href: "#" }
      ]
    }
  ];

  return (
    <footer 
      id="specs" 
      className="bg-zinc-50 dark:bg-black text-slate-800 dark:text-[#86868b] transition-colors duration-300 border-t border-slate-200 dark:border-zinc-800"
    >
      
      {/* Licenses & Compliance Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-slate-200 dark:border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Strict compliance manifest copywriting */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-orange-600 dark:text-orange-400 font-sans text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Стандарты безопасности
            </span>
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-neutral-50 leading-tight">
              100% одобрение для службы безопасности.
            </h3>
            <p className="text-sm text-slate-500 dark:text-[#86868b] leading-relaxed">
              Мы разработали юридический и технический контур Nexium Health таким образом, чтобы он соответствовал самым жестким требованиям комплаенса, СБ и ИТ-директоров крупных холдингов, промышленных компаний и автопарков.
            </p>
            
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-zinc-900 border border-slate-200/50 dark:border-white/5 space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-orange-600 dark:text-orange-400 font-bold uppercase">Гарантия правовой защиты</span>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                В случае возникновения спорных ситуаций с надзорными инспекторами государственных органов или инспекций труда Республики Казахстан (РК), наши юристы бесплатно представят ваши интересы и подготовят исчерпывающие выгрузки данных.
              </p>
            </div>
          </div>

          {/* Grid of 4 key legislation compliance pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {complianceDocs.map((doc, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#161617]/50 border border-slate-200 dark:border-white/5 rounded-2xl p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 font-mono uppercase bg-orange-500/10 px-2 py-0.5 rounded">
                    {doc.ref}
                  </span>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">{doc.title}</h4>
                <p className="text-[11px] text-slate-500 dark:text-[#86868b] leading-relaxed">{doc.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Corporate Links Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Col 0: Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <span className="text-sm font-bold text-slate-900 dark:text-white">Nexium Health</span>
            <p className="text-xs text-slate-400 dark:text-[#86868b] leading-relaxed max-w-xs">
              АСМО оборудование, облачная телемедицинская платформа и аккредитованный центр дистанционных медицинских осмотров сотрудников.
            </p>
            <div className="space-y-1.5 pt-2 text-[11px]">
              <p className="text-slate-500 font-mono">Тел: <span className="text-slate-800 dark:text-neutral-300 block">+7 702 149 1010</span><span className="text-slate-800 dark:text-neutral-300 block">+7 778 917 1790</span></p>
              <p className="text-slate-500 font-mono">Адрес: <span className="text-slate-800 dark:text-neutral-300 block">г. Астана, ул. Күйші Дина, 14</span></p>
            </div>
          </div>

          {/* Links Loops */}
          {footerLinks.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <span className="text-xs font-bold text-slate-900 dark:text-neutral-100 tracking-tight">{col.title}</span>
              <ul className="space-y-2">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a 
                      href={link.href}
                      className="text-xs hover:text-orange-600 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Legal Disclaimer block requested precisely in point 4 */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-zinc-805 space-y-6 text-slate-400 dark:text-[#86868b]">
          
          {/* Point 4 strict disclaimer text */}
          <div className="text-[11px] leading-relaxed font-sans space-y-3.5 text-slate-500 dark:text-[#86868b]">
            <p>
              <strong className="text-slate-700 dark:text-slate-300">Правовой статус и соответствие стандартам Минздрава РК:</strong> Оборудование автоматизированных комплексов медицинского осмотра АСМО «Nexium Health» (включая все сопутствующие измерительные приборы: автоматический тонометр, электрохимический алкотестер, бесконтактный инфракрасный термометр) является зарегистрированным медицинским изделием и поставляется с полным пакетом эксплуатационной документации. Имеются действующие медицинские лицензии и Регистрационные Удостоверения Министерства здравоохранения Республики Казахстан (МЗ РК). Все средства измерений, входящие в состав АСМО, поверены в соответствии с Законом Республики Казахстан «Об обеспечении единства измерений» и внесены в реестр Государственной системы обеспечения единства измерений Республики Казахстан (ГСИ РК).
            </p>
            <p>
              Дистанционные медицинские осмотры проводятся в строгом соответствии с положениями Кодекса Республики Казахстан «О здоровье народа и системе здравоохранения» от 7 июля 2020 года, а также Приказа Министерства здравоохранения РК по стандартам автоматизированного предсменного медицинского освидетельствования водителей.
            </p>
            <p>
              Программное обеспечение Nexium Health адаптировано под реестр отечественных ИТ-продуктов Республики Казахстан. Сервис телемедицинского обеспечения соответствует требованиям Закона РК «О персональных данных и их защите» № 94-V; передача, накопление и обработка биометрических персональных данных осуществляются по зашифрованным виртуальным каналам связи с хранением данных на сертифицированных серверах, размещенных исключительно на территории Республики Казахстан.
            </p>
            <p>
              * Предоставляемые расчеты окупаемости калькулятора носят ознакомительный характер и не являются публичной офертой, определяемой Гражданским кодексом РК. Индивидуальные тарифные условия зависят от филиальной сети Заказчика, конкретного количества арендуемых устройств и режима сменности.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200/50 dark:border-white/5 text-[10px] font-sans">
            <p>© 2026 Nexium Health KZ. Все права защищены. Разработано в соответствии с регулированием Республики Казахстан.</p>
            <div className="flex gap-4">
              <span className="hover:text-orange-600 cursor-pointer">Политика конфиденциальности</span>
              <span className="hover:text-orange-600 cursor-pointer">Пользовательское соглашение</span>
            </div>
          </div>

          <p className="text-[10px] text-[#86868b]/40 tracking-widest uppercase mt-6 text-center">powered by AVR Group</p>

        </div>

      </div>

    </footer>
  );
}
