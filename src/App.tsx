/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Equipment from "./components/Equipment";
import Service from "./components/Service";
import Calculator from "./components/Calculator";
import SpecsAndFooter from "./components/SpecsAndFooter";
import LeadModal from "./components/LeadModal";
import WhatsAppWidget from "./components/WhatsAppWidget";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // Shared state for calculator & lead modal sync
  const [employees, setEmployees] = useState<number>(180);
  const [terminals, setTerminals] = useState<number>(3);

  // Asset paths from our high-fidelity generated resources
  const terminalImageSrc = "/images/nexium_health_terminal_1780340176534.png";
  const statsImageSrc = "/images/nexium_stats_1780337949930.png";

  useEffect(() => {
    // Sync Tailwind standard dark class on root html document
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Intercepting slider changes in the calculator to sync them with lead modal metadata
  useEffect(() => {
    const syncCalculators = () => {
      const empInput = document.getElementById("calc-employees") as HTMLInputElement;
      const termInput = document.getElementById("calc-terminals") as HTMLInputElement;
      
      if (empInput) {
        setEmployees(parseInt(empInput.value) || 180);
      }
      if (termInput) {
        setTerminals(parseInt(termInput.value) || 3);
      }
    };

    // Periodically poll inputs or register listeners
    const interval = setInterval(syncCalculators, 250);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-300 font-sans selection:bg-orange-500/30 selection:text-orange-600 antialiased">
      
      {/* Top micro navbar with glassmorphism */}
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        onOpenModal={() => setIsModalOpen(true)} 
      />

      {/* Main Core Section Flow */}
      <main id="main-content">
        
        {/* Hero Segment */}
        <Hero 
          onOpenModal={() => setIsModalOpen(true)} 
          terminalImageSrc={terminalImageSrc} 
        />

        {/* Equipment segment detailing integrated hardware items */}
        <Equipment 
          statsImageSrc={statsImageSrc} 
          onOpenModal={() => setIsModalOpen(true)} 
        />

        {/* Service Section outlining doctors 24/7 & legal databases */}
        <Service />

        {/* Triple columnar interactive pricing configurator */}
        <Calculator 
          onOpenModal={() => setIsModalOpen(true)} 
        />

      </main>

      {/* Corporate specification disclosures & Apple style Legal footer */}
      <SpecsAndFooter />

      {/* Custom lead capture modal with auto parametric attachment */}
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        employeesCount={employees} 
        terminalsCount={terminals} 
      />

      {/* Floating direct WhatsApp contact widget */}
      <WhatsAppWidget />

    </div>
  );
}
