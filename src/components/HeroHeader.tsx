import React from 'react';
import { Award, ShieldCheck, Zap, BookOpen, Instagram, Code, CheckCircle2 } from 'lucide-react';

export const HeroHeader: React.FC = () => {
  return (
    <header className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-8 border-b border-white/10 overflow-hidden bg-noise">
      {/* Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B6FFF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left relative z-10">
        {/* Badge Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B6FFF]/15 border border-[#3B6FFF]/30 text-[#00F0FF] text-xs font-mono font-semibold uppercase tracking-widest backdrop-blur-md">
          <Zap size={14} className="text-[#00F0FF] animate-pulse" />
          <span>DS COMPANY® · GUIA OFICIAL GRATUITO</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F0F4FF] leading-[1.15]">
          Do Zero ao Primeiro <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#00F0FF] via-[#3B6FFF] to-[#8B3FFF] bg-clip-text text-transparent">
            Micro SaaS & Site Lucrativo
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#8A9BC4] font-light max-w-2xl leading-relaxed">
          O guia definitivo de Vibe Coding para quem quer transformar ideias em software e renda real
          utilizando inteligência artificial, sem passar anos estudando sintaxe tradicional.
        </p>

        {/* Social Proof & Metrics Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          <div className="glass-card p-4 rounded-xl border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-[#00F0FF] font-mono font-bold text-lg sm:text-xl">
              <Award size={18} />
              <span>5+ Anos</span>
            </div>
            <p className="text-[11px] text-[#8A9BC4] font-light leading-snug">
              Experiência no mercado digital
            </p>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-[#3B6FFF] font-mono font-bold text-lg sm:text-xl">
              <ShieldCheck size={18} />
              <span>+5 Dígitos</span>
            </div>
            <p className="text-[11px] text-[#8A9BC4] font-light leading-snug">
              Faturados com Micro SaaS & Sites
            </p>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-[#8B3FFF] font-mono font-bold text-lg sm:text-xl">
              <BookOpen size={18} />
              <span>11 Módulos</span>
            </div>
            <p className="text-[11px] text-[#8A9BC4] font-light leading-snug">
              Conteúdo prático sem enrolação
            </p>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/5 space-y-1">
            <a 
              href="https://instagram.com/davi._link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#00F0FF] hover:text-white font-mono font-bold text-sm sm:text-base transition-colors"
            >
              <Instagram size={18} className="text-[#00F0FF]" />
              <span>@davi._link</span>
            </a>
            <p className="text-[11px] text-[#8A9BC4] font-light leading-snug">
              Link oficial da Bio
            </p>
          </div>
        </div>

        {/* Info pills bar */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs font-mono text-[#8A9BC4]">
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
            <CheckCircle2 size={13} className="text-[#00F0FF]" />
            100% Gratuito
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
            <Code size={13} className="text-[#3B6FFF]" />
            Leitura Estimada: ~25 min
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
            ⚡ Atualizado para 2026
          </span>
        </div>
      </div>
    </header>
  );
};
