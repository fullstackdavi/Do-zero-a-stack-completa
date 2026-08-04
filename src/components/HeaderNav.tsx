import React, { useState, useEffect } from 'react';
import { modulesData } from '../data/modulesData';
import { Menu, X, CheckCircle, Search, Share2, Instagram, ArrowUpRight } from 'lucide-react';

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
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#0B061A] z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* MOBILE STICKY TOP BAR */}
      <header className="lg:hidden sticky top-0 z-40 bg-[#0B061A]/90 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
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
            <span className="text-xs font-mono font-bold text-[#F4F4F5] block leading-tight">
              DS COMPANY®
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="https://instagram.com/davi._link"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 text-purple-300 text-[11px] sm:text-xs font-mono flex items-center gap-1"
            title="Instagram @davi._link"
          >
            <Instagram size={14} />
            <span className="hidden sm:inline">@davi._link</span>
          </a>

          <a
            href="https://www.instagram.com/layon.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 text-purple-300 text-[11px] sm:text-xs font-mono flex items-center gap-1"
            title="Instagram @layon.dev"
          >
            <Instagram size={14} />
            <span className="hidden sm:inline">@layon.dev</span>
          </a>

          <a
            href="https://www.instagram.com/lz_.page/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 text-purple-300 text-[11px] sm:text-xs font-mono flex items-center gap-1"
            title="Instagram @lz_.page"
          >
            <Instagram size={14} />
            <span className="hidden sm:inline">@lz_.page</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-purple-950/50 border border-purple-500/30 text-[#F4F4F5] cursor-pointer"
            aria-label="Alternar Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* MOBILE COLLAPSIBLE DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[53px] z-30 bg-[#0B061A]/95 backdrop-blur-xl p-5 overflow-y-auto space-y-5 border-b border-white/10 animate-fade-in">
          {/* Progress Tracker Pill */}
          <div className="p-3 rounded-xl bg-[#130b24] border border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-400">Progresso do Guia:</span>
            <span className="text-purple-300 font-bold">{completedCount} de 11 módulos ({progressPercent}%)</span>
          </div>

          {/* Quick Search */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-3 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar no guia (ex: Claude, MCP, Preço)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#080413] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#F4F4F5] placeholder-zinc-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Module Navigation List */}
          <nav className="space-y-1">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 px-2 mb-2">
              ÍNDICE DOS 11 MÓDULOS
            </div>
            {modulesData.map((mod) => {
              const isActive = activeModuleId === mod.id;
              const isDone = completedModules.includes(mod.id);

              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    onSelectModule(mod.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? 'bg-purple-900/40 border border-purple-500/60 text-[#F4F4F5] font-bold'
                      : 'hover:bg-white/5 text-zinc-400 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-[10px] opacity-75 text-purple-400">
                      MÓD {mod.number}
                    </span>
                    <span className="truncate">{mod.title}</span>
                  </div>
                  {isDone && <CheckCircle size={14} className="text-purple-400 shrink-0 ml-2" />}
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* DESKTOP FIXED SIDEBAR NAVBAR */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-80 bg-[#090514]/95 backdrop-blur-xl border-r border-white/10 p-6 z-30 justify-between overflow-y-auto">
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
                <h3 className="font-mono font-bold text-sm text-[#F4F4F5] leading-none">
                  DS COMPANY®
                </h3>
                <span className="text-[10px] font-mono text-purple-400 block mt-1 tracking-wider uppercase">
                  GUIA OFICIAL GRATUITO
                </span>
              </div>
            </div>

            <a
              href="https://instagram.com/davi._link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-between p-2.5 rounded-xl bg-[#130b24] border border-white/10 hover:border-purple-500/40 text-xs font-mono text-zinc-400 hover:text-purple-300 transition-all group"
            >
              <div className="flex items-center gap-2">
                <Instagram size={15} className="text-purple-400" />
                <span>@davi._link</span>
              </div>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com/layon.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-between p-2.5 rounded-xl bg-[#130b24] border border-white/10 hover:border-purple-500/40 text-xs font-mono text-zinc-400 hover:text-purple-300 transition-all group"
            >
              <div className="flex items-center gap-2">
                <Instagram size={15} className="text-purple-400" />
                <span>@layon.dev</span>
              </div>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com/lz_.page/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-between p-2.5 rounded-xl bg-[#130b24] border border-white/10 hover:border-purple-500/40 text-xs font-mono text-zinc-400 hover:text-purple-300 transition-all group"
            >
              <div className="flex items-center gap-2">
                <Instagram size={15} className="text-purple-400" />
                <span>@lz_.page</span>
              </div>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Reading Progress Card */}
          <div className="p-3.5 rounded-xl bg-[#130b24]/80 border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">Progresso de Leitura:</span>
              <span className="text-purple-300 font-bold">{completedCount}/11 ({progressPercent}%)</span>
            </div>
            <div className="w-full h-1.5 bg-[#080413] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-800 to-purple-400 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search size={15} className="absolute left-3 top-2.5 text-zinc-400" />
            <input
              type="text"
              placeholder="Filtrar tópicos no guia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0e071e] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-[#F4F4F5] placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="space-y-1">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 px-1 mb-2">
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

                  return (
                    <button
                      key={mod.id}
                      onClick={() => onSelectModule(mod.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${
                        isActive
                          ? 'bg-purple-900/40 border border-purple-500/60 text-[#F4F4F5] font-bold shadow-md'
                          : 'hover:bg-white/5 text-zinc-400 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-[10px] text-purple-400">
                          M{mod.number}
                        </span>
                        <span className="truncate">{mod.title}</span>
                      </div>
                      {isDone && <CheckCircle size={14} className="text-purple-400 shrink-0 ml-1" />}
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
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-[#F4F4F5] transition-all cursor-pointer"
          >
            <Share2 size={14} className="text-purple-400" />
            <span>{copiedShare ? 'Link Copiado!' : 'Compartilhar Guia'}</span>
          </button>

          <div className="text-[10px] text-center font-mono text-zinc-500">
            DS Company® · All rights reserved
          </div>
        </div>
      </aside>
    </>
  );
};
