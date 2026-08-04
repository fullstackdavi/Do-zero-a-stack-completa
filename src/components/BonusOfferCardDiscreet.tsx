import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BonusOfferCardDiscreetProps {
  offerLink?: string;
}

export const BonusOfferCardDiscreet: React.FC<BonusOfferCardDiscreetProps> = ({
  offerLink = 'https://pay.kirvano.com/0a664536-3b80-46b7-b281-c63ce345623f',
}) => {
  return (
    <div className="my-6 p-4 rounded-xl bg-[#130b24] border border-purple-500/25 hover:border-purple-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-zinc-400">
      <p className="leading-relaxed font-light">
        Ah, e se você quiser levar os prompts e scripts prontos deste guia com você, o Pack de Execução sai por R$ 9,90.
      </p>
      
      <a
        href={offerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-mono font-medium text-purple-300 hover:text-white transition-colors shrink-0 group cursor-pointer"
      >
        <span>Levar comigo</span>
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
};
