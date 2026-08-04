import React from 'react';
import { Copy, FileText, Download, ArrowRight } from 'lucide-react';

interface BonusOfferCardProps {
  offerLink?: string;
}

export const BonusOfferCard: React.FC<BonusOfferCardProps> = ({
  offerLink = 'https://pay.kirvano.com/0a664536-3b80-46b7-b281-c63ce345623f',
}) => {
  return (
    <div className="my-8 sm:my-12 rounded-2xl p-6 sm:p-8 relative overflow-hidden bg-gradient-to-br from-[#1c0d38] via-[#0b061a] to-[#251048] border border-purple-500/40 shadow-2xl shadow-purple-950/40">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-purple-900/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-5">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F5] tracking-tight leading-tight">
          Quer levar os prompts prontos, sem precisar montar do zero?
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-3xl">
          O Pack de Execução DS Company traz todos os prompts e templates deste guia já finalizados pra copiar e colar, mais 10 prompts extras, o PDF completo pra salvar offline e o checklist mestre dos 11 módulos numa página só.
        </p>

        {/* Inline Features */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#F4F4F5]">
            <Copy size={15} className="text-purple-400" />
            <span>Prompts prontos</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#F4F4F5]">
            <FileText size={15} className="text-purple-400" />
            <span>PDF offline</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#F4F4F5]">
            <Download size={15} className="text-purple-400" />
            <span>Acesso imediato</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-3">
          <a
            href={offerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 hover:from-purple-600 hover:to-purple-700 text-white font-mono font-bold text-sm sm:text-base border border-purple-400/30 shadow-lg shadow-purple-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer"
          >
            <span>Quero o Pack de Execução: R$ 9,90</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
