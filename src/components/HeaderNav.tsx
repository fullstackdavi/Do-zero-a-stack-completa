import React, { useState, useEffect } from 'react';
import { modulesData } from '../data/modulesData';
import { Menu, X, BookOpen, CheckCircle, Search, Share2, Sparkles, Instagram, ArrowUpRight } from 'lucide-react';

interface HeaderNavProps {
  activeModuleId: string;
  completedModules: string[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectModule: (id: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeModuleId,
  completedModules,
  searchQuery,
  setSearchQuery,
  onSelectModule,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const completedCount = completedModules.length;
  const progressPercent = Math.round((completedCount / modulesData.length) * 100);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#0A1128] z-50">
        <div
          className="h-full bg-gradient-to-r from-[#3B6FFF] via-[#00F0FF] to-[#8B3FFF] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* MOBILE STICKY TOP BAR */}
      <header className="lg:hidden sticky top-0 z-40 bg-[#0A1128]/90 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden shrink-0">
            <img
              src="https://i.postimg.cc/28s8ngJm/upload-iq-B-k-O9Re-Ky-LCDzl-Hrsu-Q-removebg-preview.png"
              alt="DS Company Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-[#F0F4FF] block leading-tight">
              DS COMPANY®
            </span>
            <span className="text-[10px] text-[#8A9BC4] font-mono block">
              GUIA OFICIAL DE VIBE CODING
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="https://instagram.com/davi._link"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 text-[#00F0FF] text-[11px] sm:text-xs font-mono flex items-center gap-1"
            title="Instagram @davi._link"
          >
            <Instagram size={14} />
            <span className="hidden sm:inline">@davi._link</span>
          </a>

          <a
            href="https://www.instagram.com/layon.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 text-[#00F0FF] text-[11px] sm:text-xs font-mono flex items-center gap-1"
            title="Instagram @layon.dev"
          >
            <Instagram size={14} />
            <span className="hidden sm:inline">@layon.dev</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-[#3B6FFF]/20 border border-[#3B6FFF]/40 text-[#F0F4FF] cursor-pointer"
            aria-label="Alternar Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* MOBILE COLLAPSIBLE DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[53px] z-30 bg-[#0A1128]/95 backdrop-blur-xl p-5 overflow-y-auto space-y-5 border-b border-white/10 animate-fade-in">
          {/* Progress Tracker Pill */}
          <div className="p-3 rounded-xl bg-[#0F1B38] border border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-[#8A9BC4]">Progresso do Guia:</span>
            <span className="text-[#00F0FF] font-bold">{completedCount} de 11 módulos ({progressPercent}%)</span>
          </div>

          {/* Quick Search */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-3 text-[#8A9BC4]" />
            <input
              type="text"
              placeholder="Buscar no guia (ex: Claude, MCP, Preço)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#080E21] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#F0F4FF] placeholder-[#8A9BC4]/60 focus:outline-none focus:border-[#3B6FFF]"
            />
          </div>

          {/* Module Navigation List */}
          <nav className="space-y-1">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#8A9BC4] px-2 mb-2">
              ÍNDICE DOS 11 MÓDULOS
            </div>
            {modulesData.map((mod) => {
              const isActive = activeModuleId === mod.id;
              const isDone = completedModules.includes(mod.id);
              const isPurple = mod.isOfferStyle || mod.number === 10;

              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    onSelectModule(mod.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? isPurple
                        ? 'bg-[#8B3FFF]/20 border border-[#8B3FFF]/60 text-[#F0F4FF] font-bold'
                        : 'bg-[#3B6FFF]/20 border border-[#3B6FFF]/60 text-[#00F0FF] font-bold'
                      : 'hover:bg-white/5 text-[#8A9BC4] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-[10px] opacity-75">
                      MÓD {mod.number}
                    </span>
                    <span className="truncate">{mod.title}</span>
                  </div>
                  {isDone && <CheckCircle size={14} className="text-[#00F0FF] shrink-0 ml-2" />}
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* DESKTOP FIXED SIDEBAR NAVBAR */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-80 bg-[#080E21]/90 backdrop-blur-xl border-r border-white/10 p-6 z-30 justify-between overflow-y-auto">
        <div className="space-y-6">
          {/* Header Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src="https://i.postimg.cc/28s8ngJm/upload-iq-B-k-O9Re-Ky-LCDzl-Hrsu-Q-removebg-preview.png"
                  alt="DS Company Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-mono font-bold text-sm text-[#F0F4FF] leading-none">
                  DS COMPANY®
                </h3>
                <span className="text-[10px] font-mono text-[#00F0FF] block mt-1 tracking-wider uppercase">
                  GUIA OFICIAL GRATUITO
                </span>
              </div>
            </div>

            <a
              href="https://instagram.com/davi._link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-between p-2.5 rounded-xl bg-[#0F1B38] border border-white/10 hover:border-[#00F0FF]/40 text-xs font-mono text-[#8A9BC4] hover:text-[#00F0FF] transition-all group"
            >
              <div className="flex items-center gap-2">
                <Instagram size={15} className="text-[#00F0FF]" />
                <span>@davi._link</span>
              </div>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com/layon.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-between p-2.5 rounded-xl bg-[#0F1B38] border border-white/10 hover:border-[#00F0FF]/40 text-xs font-mono text-[#8A9BC4] hover:text-[#00F0FF] transition-all group"
            >
              <div className="flex items-center gap-2">
                <Instagram size={15} className="text-[#00F0FF]" />
                <span>@layon.dev</span>
              </div>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Reading Progress Card */}
          <div className="p-3.5 rounded-xl bg-[#0F1B38]/80 border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#8A9BC4]">Progresso de Leitura:</span>
              <span className="text-[#00F0FF] font-bold">{completedCount}/11 ({progressPercent}%)</span>
            </div>
            <div className="w-full h-1.5 bg-[#080E21] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#3B6FFF] to-[#00F0FF] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search size={15} className="absolute left-3 top-2.5 text-[#8A9BC4]" />
            <input
              type="text"
              placeholder="Filtrar tópicos no guia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0E1833] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-[#F0F4FF] placeholder-[#8A9BC4]/60 focus:outline-none focus:border-[#3B6FFF] transition-colors"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="space-y-1">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#8A9BC4] px-1 mb-2">
              ÍNDICE DOS 11 MÓDULOS
            </div>

            <div className="space-y-1 max-h-[42vh] overflow-y-auto pr-1">
              {modulesData
                .filter((m) =>
                  searchQuery === ''
                    ? true
                    : m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      m.summary.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((mod) => {
                  const isActive = activeModuleId === mod.id;
                  const isDone = completedModules.includes(mod.id);
                  const isPurple = mod.isOfferStyle || mod.number === 10;

                  return (
                    <button
                      key={mod.id}
                      onClick={() => onSelectModule(mod.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${
                        isActive
                          ? isPurple
                            ? 'bg-[#8B3FFF]/20 border border-[#8B3FFF]/60 text-[#F0F4FF] font-bold shadow-md'
                            : 'bg-[#3B6FFF]/20 border border-[#3B6FFF]/60 text-[#00F0FF] font-bold shadow-md'
                          : 'hover:bg-white/5 text-[#8A9BC4] border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span
                          className={`text-[10px] ${
                            isPurple ? 'text-[#8B3FFF]' : 'text-[#3B6FFF]'
                          }`}
                        >
                          M{mod.number}
                        </span>
                        <span className="truncate">{mod.title}</span>
                      </div>
                      {isDone && <CheckCircle size={14} className="text-[#00F0FF] shrink-0 ml-1" />}
                    </button>
                  );
                })}
            </div>
          </nav>
        </div>

        {/* Footer Actions in Sidebar */}
        <div className="pt-4 border-t border-white/10 space-y-2">
          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-[#F0F4FF] transition-all cursor-pointer"
          >
            <Share2 size={14} className="text-[#00F0FF]" />
            <span>{copiedShare ? 'Link Copiado!' : 'Compartilhar Guia'}</span>
          </button>

          <div className="text-[10px] text-center font-mono text-[#8A9BC4]/60">
            DS Company® · All rights reserved
          </div>
        </div>
      </aside>
    </>
  );
};
