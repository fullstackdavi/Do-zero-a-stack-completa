import React, { useState, useEffect } from 'react';
import { modulesData } from './data/modulesData';
import { HeroHeader } from './components/HeroHeader';
import { HeaderNav } from './components/HeaderNav';
import { ModuleCard } from './components/ModuleCard';
import { BonusOfferCard } from './components/BonusOfferCard';
import { BonusOfferCardDiscreet } from './components/BonusOfferCardDiscreet';
import { FooterSection } from './components/FooterSection';
import { ArrowUp, BookOpen, CheckCircle, Search, Filter } from 'lucide-react';

export default function App() {
  const [activeModuleId, setActiveModuleId] = useState<string>('modulo-0');
  const [completedModules, setCompletedModules] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ds_company_completed_modules');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Save completion state to local storage
  useEffect(() => {
    try {
      localStorage.setItem('ds_company_completed_modules', JSON.stringify(completedModules));
    } catch {
      // Ignore fallback
    }
  }, [completedModules]);

  // Scroll position listener for active section tracking and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Track active module by visibility
      const moduleElements = modulesData
        .map((m) => document.getElementById(m.id))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 200;

      for (let i = moduleElements.length - 1; i >= 0; i--) {
        const el = moduleElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveModuleId(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleComplete = (id: string) => {
    setCompletedModules((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectModule = (id: string) => {
    setActiveModuleId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter modules based on search query
  const filteredModules = modulesData.filter((module) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      module.title.toLowerCase().includes(query) ||
      module.subtitle.toLowerCase().includes(query) ||
      module.summary.toLowerCase().includes(query) ||
      module.sections.some(
        (s) =>
          s.heading.toLowerCase().includes(query) ||
          s.content.some((c) => c.toLowerCase().includes(query))
      )
    );
  });

  return (
    <div className="min-h-screen bg-[#0A1128] text-[#F0F4FF] selection:bg-[#3B6FFF]/30 selection:text-[#00F0FF] relative">
      {/* Desktop Navigation Sidebar & Mobile Sticky Topbar */}
      <HeaderNav
        activeModuleId={activeModuleId}
        completedModules={completedModules}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectModule={handleSelectModule}
      />

      {/* Main Content Area (offset on desktop for sidebar) */}
      <main className="lg:pl-80 transition-all">
        {/* Hero Cover Header */}
        <HeroHeader />

        {/* Modules Section Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-4">
          {/* Active Search Filter Banner */}
          {searchQuery && (
            <div className="p-4 rounded-xl bg-[#0F1B38] border border-[#00F0FF]/30 flex items-center justify-between text-xs font-mono text-[#00F0FF]">
              <div className="flex items-center gap-2">
                <Filter size={16} />
                <span>Exibindo resultados para "{searchQuery}" ({filteredModules.length} módulos encontrados)</span>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="underline text-[#8A9BC4] hover:text-[#F0F4FF] cursor-pointer"
              >
                Limpar busca
              </button>
            </div>
          )}

          {/* Module List */}
          {filteredModules.length > 0 ? (
            filteredModules.map((module) => (
              <React.Fragment key={module.id}>
                <ModuleCard
                  module={module}
                  isCompleted={completedModules.includes(module.id)}
                  onToggleComplete={handleToggleComplete}
                />
                {module.id === 'modulo-2' && (
                  <BonusOfferCard offerLink="https://pay.kirvano.com/0a664536-3b80-46b7-b281-c63ce345623f" />
                )}
                {module.id === 'modulo-10' && (
                  <BonusOfferCardDiscreet offerLink="https://pay.kirvano.com/0a664536-3b80-46b7-b281-c63ce345623f" />
                )}
              </React.Fragment>
            ))
          ) : (
            <div className="my-16 text-center space-y-3 p-8 glass-card rounded-2xl">
              <Search size={32} className="mx-auto text-[#8A9BC4]" />
              <h3 className="text-lg font-semibold text-[#F0F4FF]">
                Nenhum módulo encontrado para "{searchQuery}"
              </h3>
              <p className="text-xs text-[#8A9BC4]">
                Tente buscar por termos como "Claude", "MCP", "Prompt", "SaaS" ou "Preço".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 px-4 py-2 rounded-xl bg-[#3B6FFF] text-white text-xs font-mono font-medium hover:bg-[#3B6FFF]/80 transition-all cursor-pointer"
              >
                Ver Todos os Módulos
              </button>
            </div>
          )}

          {/* Closing Footer Section */}
          <FooterSection />
        </div>
      </main>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#3B6FFF] hover:bg-[#00F0FF] text-white hover:text-[#0A1128] shadow-2xl transition-all border border-white/20 cursor-pointer animate-fade-in"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
