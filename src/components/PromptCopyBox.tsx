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
    <div className="my-5 rounded-2xl bg-[#080413]/90 backdrop-blur-md border border-purple-500/30 overflow-hidden shadow-xl transition-all hover:border-purple-500/60">
      <div className="flex items-center justify-between px-4 py-3 bg-[#130b24]/90 border-b border-purple-500/20">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-300 uppercase tracking-wider">
          <Terminal size={15} className="text-purple-400" />
          <span>{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-purple-900/40 hover:bg-purple-800 text-[#F4F4F5] border border-purple-500/40 transition-all cursor-pointer active:scale-95"
          title="Copiar prompt"
        >
          {copied ? (
            <>
              <Check size={14} className="text-purple-300 animate-bounce" />
              <span className="text-purple-300">Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copiar Prompt</span>
            </>
          )}
        </button>
      </div>
      
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap selection:bg-purple-900/40 select-all">
        {prompt}
      </div>

      {note && (
        <div className="px-4 py-2.5 bg-[#0e071e]/80 border-t border-white/5 text-xs text-zinc-400 italic">
          💡 {note}
        </div>
      )}
    </div>
  );
};
