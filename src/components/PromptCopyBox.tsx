import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

interface PromptCopyBoxProps {
  title: string;
  prompt: string;
  note?: string;
}

export const PromptCopyBox: React.FC<PromptCopyBoxProps> = ({ title, prompt, note }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="my-5 rounded-2xl bg-[#091024] border border-[#3B6FFF]/30 overflow-hidden shadow-xl transition-all hover:border-[#3B6FFF]/60">
      <div className="flex items-center justify-between px-4 py-3 bg-[#0F1B38] border-b border-[#3B6FFF]/20">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#00F0FF] uppercase tracking-wider">
          <Terminal size={15} className="text-[#3B6FFF]" />
          <span>{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#3B6FFF]/20 hover:bg-[#3B6FFF] text-[#F0F4FF] border border-[#3B6FFF]/40 transition-all cursor-pointer"
          title="Copiar prompt"
        >
          {copied ? (
            <>
              <Check size={14} className="text-[#00F0FF]" />
              <span className="text-[#00F0FF]">Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copiar Prompt</span>
            </>
          )}
        </button>
      </div>
      
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-[#8A9BC4] leading-relaxed whitespace-pre-wrap selection:bg-[#3B6FFF]/40">
        {prompt}
      </div>

      {note && (
        <div className="px-4 py-2.5 bg-[#0A132C] border-t border-white/5 text-xs text-[#8A9BC4]/80 italic">
          💡 {note}
        </div>
      )}
    </div>
  );
};
