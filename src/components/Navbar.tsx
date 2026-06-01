/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenModal: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode, onOpenModal }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Оборудование", href: "#equipment" },
    { label: "Услуга «Под ключ»", href: "#service" },
    { label: "Калькулятор окупаемости", href: "#calculator" },
    { label: "Лицензии & Спецификации", href: "#specs" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 54; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        id="apple-navbar"
        className="fixed top-0 left-0 right-0 z-50 h-[48px] backdrop-blur-md bg-[#f5f5f7cc] dark:bg-[#161617cc] border-b border-[#e8e8ed] dark:border-[#333336] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={(e) => handleScroll(e, "hero")}
            className="flex items-center gap-2 text-slate-900 dark:text-white group"
          >
            <span className="font-extrabold font-mono tracking-[0.2em] uppercase text-xs sm:text-sm bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">NEXIUM HEALTH</span>
            <span className="text-[9px] font-mono font-medium rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 px-1 py-0.2">АСМО</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href.substring(1))}
                className="font-sans text-xs font-normal text-slate-600 hover:text-slate-900 dark:text-[#86868b] dark:hover:text-[#f5f5f7] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Switcher */}
            <button
              id="theme-toggle"
              onClick={toggleDarkMode}
              className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-[#2c2c2e] text-slate-600 dark:text-[#86868b] hover:text-slate-900 dark:hover:text-[#f5f5f7] transition-all cursor-pointer"
              title={isDarkMode ? "Светлая тема" : "Темная тема"}
            >
              {isDarkMode ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </button>

            {/* Premium CTA Button */}
            <button
              id="request-quote-nav"
              onClick={onOpenModal}
              className="hidden sm:inline-flex font-sans text-xs font-medium text-white bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-500 px-3 py-1 rounded-full transition-all tracking-tight cursor-pointer"
            >
              Консультация
            </button>

            {/* Mobile Menu Icon */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 rounded-full hover:bg-slate-200 dark:hover:bg-[#2c2c2e] text-slate-600 dark:text-[#86868b] transition-all cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-nav-panel"
          className="fixed inset-0 top-[48px] z-45 bg-[#f5f5f7] dark:bg-[#161617] transition-colors duration-300 px-6 py-8 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            {menuItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href.substring(1))}
                className="font-sans text-xl font-medium text-slate-800 dark:text-[#e8e8ed] hover:text-orange-600 dark:hover:text-white transition-colors pb-4 border-b border-slate-200 dark:border-slate-800"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full text-center font-sans text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 py-3 rounded-xl transition-all"
            >
              Оставить заявку
            </button>
            <p className="text-[10px] text-center text-slate-400 dark:text-[#86868b] font-sans">
              Nexium Health © 2026. Лицензированное медицинское оборудование.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
