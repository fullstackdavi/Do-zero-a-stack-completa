import React, { useState } from 'react';
import { Instagram, Mail, Copy, Check, Heart, ShieldCheck, ExternalLink, Zap } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'suporte@dscompany.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="mt-16 sm:mt-24 pt-12 pb-16 px-4 sm:px-8 border-t border-white/10 bg-noise relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-t from-[#3B6FFF]/10 via-[#8B3FFF]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-8 text-center relative z-10">
        {/* Brand Quote Box */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#3B6FFF]/30 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B6FFF]/15 text-[#00F0FF] text-xs font-mono font-semibold uppercase tracking-wider">
            <Zap size={14} />
            <span>PROPÓSITO DS COMPANY®</span>
          </div>

          <p className="text-lg sm:text-2xl font-bold tracking-tight text-[#F0F4FF] leading-relaxed italic">
            "Isso foi criado pela DS Company® para encurtar o caminho entre a ideia e a renda real."
          </p>

          <p className="text-xs sm:text-sm text-[#8A9BC4] font-light max-w-xl mx-auto">
            Sem teoria distante, sem enrolação. A inteligência artificial é a alavanca que faltava para
            você assumir o controle do seu destino financeiro e construir ativos de software reais.
          </p>
        </div>

        {/* Contact & Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {/* Instagram @davi._link */}
          <a
            href="https://instagram.com/davi._link"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl glass-card hover:border-[#00F0FF]/50 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20">
                <Instagram size={18} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-[#8A9BC4] uppercase block">Instagram</span>
                <span className="text-xs sm:text-sm font-semibold text-[#F0F4FF] group-hover:text-[#00F0FF] transition-colors">
                  @davi._link
                </span>
              </div>
            </div>
            <ExternalLink size={14} className="text-[#8A9BC4] group-hover:text-[#00F0FF] transition-colors" />
          </a>

          {/* Instagram @layon.dev */}
          <a
            href="https://www.instagram.com/layon.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl glass-card hover:border-[#00F0FF]/50 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20">
                <Instagram size={18} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-[#8A9BC4] uppercase block">Instagram</span>
                <span className="text-xs sm:text-sm font-semibold text-[#F0F4FF] group-hover:text-[#00F0FF] transition-colors">
                  @layon.dev
                </span>
              </div>
            </div>
            <ExternalLink size={14} className="text-[#8A9BC4] group-hover:text-[#00F0FF] transition-colors" />
          </a>

          {/* Email Button */}
          <button
            onClick={handleCopyEmail}
            className="p-3.5 rounded-xl glass-card hover:border-[#3B6FFF]/50 flex items-center justify-between group transition-all text-left cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#3B6FFF]/10 text-[#3B6FFF] border border-[#3B6FFF]/20">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#8A9BC4] uppercase block">Suporte</span>
                <span className="text-xs font-semibold text-[#F0F4FF] group-hover:text-[#00F0FF] transition-colors truncate block max-w-[100px]">
                  {email}
                </span>
              </div>
            </div>
            {copiedEmail ? (
              <Check size={14} className="text-[#00F0FF]" />
            ) : (
              <Copy size={14} className="text-[#8A9BC4] group-hover:text-[#00F0FF] transition-colors" />
            )}
          </button>
        </div>

        {/* Copyright & Footnote */}
        <div className="pt-8 border-t border-white/5 space-y-2 text-xs font-mono text-[#8A9BC4]/60">
          <p>© {new Date().getFullYear()} DS Company®. Todos os direitos reservados.</p>
          <p className="text-[11px]">Hospedado exclusivamente como guia oficial do link na bio @davi._link</p>
        </div>
      </div>
    </footer>
  );
};
