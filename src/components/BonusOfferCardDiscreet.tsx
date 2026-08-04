import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BonusOfferCardDiscreetProps {
  offerLink?: string;
}

export const BonusOfferCardDiscreet: React.FC<BonusOfferCardDiscreetProps> = ({
  offerLink = 'https://pay.kirvano.com/0a664536-3b80-46b7-b281-c63ce345623f',
}) => {
  return (
    <div className="my-6 p-4.5 rounded-xl glass-card border border-purple-500/30 hover:border-purple-500/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-zinc-300">
      <div className="flex items-center gap-2.5">
        <div className="p-1.5 rounded-lg bg-purple-900/30 text-purple-400 shrink-0">
          <Sparkles size={16} />
        </div>
        <p className="leading-relaxed font-light">
          Ah, e se você quiser levar os prompts e scripts prontos deste guia com você, o Pack de Execução sai por R$ 9,90.
        </p>
      </div>
      
      <a
        href={offerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-purple-900/40 hover:bg-purple-800 text-purple-200 hover:text-white font-mono font-medium border border-purple-500/40 transition-all shrink-0 group cursor-pointer text-xs"
      >
        <span>Levar comigo</span>
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
};
