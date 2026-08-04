import React from 'react';
import { Award, ShieldCheck, BookOpen, Instagram, Code, CheckCircle2 } from 'lucide-react';

export const HeroHeader: React.FC = () => {
  return (
    <header className="relative pt-8 pb-12 sm:pt-14 sm:pb-16 px-4 sm:px-8 border-b border-white/10 overflow-hidden bg-noise">
      {/* Animated Ambient Glow Elements - Midnight Purple Tone */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-950/50 rounded-full blur-3xl pointer-events-none animate-ambient-glow" style={{ animationDelay: '-4s' }} />

      <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left relative z-10">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F4F5] leading-[1.15]">
          Do Zero ao Primeiro <br className="hidden sm:inline" />
          Micro SaaS & Site Lucrativo
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
          O guia definitivo de Vibe Coding para quem quer transformar ideias em software e renda real
          utilizando inteligência artificial, sem passar anos estudando sintaxe tradicional.
        </p>

        {/* Social Proof & Metrics Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          <div className="glass-card p-4 rounded-xl space-y-1">
            <div className="flex items-center gap-1.5 text-[#F4F4F5] font-mono font-bold text-lg sm:text-xl">
              <Award size={18} className="text-purple-400" />
              <span>5+ Anos</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-light leading-snug">
              Experiência no mercado digital
            </p>
          </div>

          <div className="glass-card p-4 rounded-xl space-y-1">
            <div className="flex items-center gap-1.5 text-[#F4F4F5] font-mono font-bold text-lg sm:text-xl">
              <ShieldCheck size={18} className="text-purple-400" />
              <span>+5 Dígitos</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-light leading-snug">
              Faturados com Micro SaaS & Sites
            </p>
          </div>

          <div className="glass-card p-4 rounded-xl space-y-1">
            <div className="flex items-center gap-1.5 text-[#F4F4F5] font-mono font-bold text-lg sm:text-xl">
              <BookOpen size={18} className="text-purple-400" />
              <span>11 Módulos</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-light leading-snug">
              Conteúdo prático sem enrolação
            </p>
          </div>

          <div className="glass-card p-4 rounded-xl space-y-1.5">
            <a 
              href="https://instagram.com/davi._link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#F4F4F5] hover:text-purple-300 font-mono font-bold text-xs sm:text-sm transition-colors"
            >
              <Instagram size={15} className="text-purple-400 shrink-0" />
              <span>@davi._link</span>
            </a>
            <a 
              href="https://www.instagram.com/layon.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#F4F4F5] hover:text-purple-300 font-mono font-bold text-xs sm:text-sm transition-colors"
            >
              <Instagram size={15} className="text-purple-400 shrink-0" />
              <span>@layon.dev</span>
            </a>
            <a 
              href="https://www.instagram.com/lz_.page/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#F4F4F5] hover:text-purple-300 font-mono font-bold text-xs sm:text-sm transition-colors"
            >
              <Instagram size={15} className="text-purple-400 shrink-0" />
              <span>@lz_.page</span>
            </a>
            <p className="text-[10px] text-zinc-400 font-light leading-snug pt-0.5">
              Perfis Oficiais
            </p>
          </div>
        </div>

        {/* Info pills bar */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg glass-pill">
            <CheckCircle2 size={14} className="text-purple-400" />
            100% Gratuito
          </span>
          <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg glass-pill">
            <Code size={14} className="text-purple-400" />
            Leitura Estimada: ~25 min
          </span>
          <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg glass-pill">
            ⚡ Atualizado para 2026
          </span>
        </div>
      </div>
    </header>
  );
};
