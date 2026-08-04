import React, { useState } from 'react';
import { ModuleItem } from '../types';
import { PromptCopyBox } from './PromptCopyBox';
import { PriceCalculator } from './PriceCalculator';
import { CheckCircle2, Clock, Code2, Sparkles, Check } from 'lucide-react';

interface ModuleCardProps {
  module: ModuleItem;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  isCompleted,
  onToggleComplete,
}) => {
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const isOfferStyle = module.isOfferStyle || module.number === 10;

  return (
    <article
      id={module.id}
      className={`scroll-mt-24 sm:scroll-mt-28 my-10 sm:my-14 rounded-2xl p-5 sm:p-8 transition-all relative overflow-hidden bg-noise ${
        isOfferStyle
          ? 'glass-card-purple border border-purple-500/40 shadow-2xl'
          : 'glass-card border border-white/10'
      }`}
    >
      {/* Decorative Glow Background */}
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl pointer-events-none" />

      {/* Header Badge & Reading Time */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-md border bg-purple-950/60 border-purple-500/40 text-purple-300">
          {module.badge}
        </span>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
            <Clock size={13} />
            {module.readTime}
          </span>

          <button
            onClick={() => onToggleComplete(module.id)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium border transition-all cursor-pointer ${
              isCompleted
                ? 'bg-purple-900/40 border-purple-500 text-purple-300'
                : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/30'
            }`}
            title="Marcar módulo como lido"
          >
            <CheckCircle2 size={14} className={isCompleted ? 'text-purple-300' : 'text-zinc-400'} />
            <span>{isCompleted ? 'Concluído' : 'Marcar Lido'}</span>
          </button>
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="space-y-2 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F5] leading-snug">
          {module.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          {module.subtitle}
        </p>
      </div>

      {/* Summary Banner */}
      <div className="p-4 rounded-xl bg-[#0e071e]/80 border-l-4 border-purple-500 text-xs sm:text-sm text-zinc-300 font-light mb-8 leading-relaxed">
        <strong className="font-semibold text-purple-300 block mb-1 uppercase font-mono tracking-wider text-[11px]">
          RESUMO DO MÓDULO:
        </strong>
        {module.summary}
      </div>

      {/* Content Sections */}
      <div className="space-y-8 text-sm sm:text-base font-light text-zinc-300 leading-relaxed">
        {module.sections.map((section, idx) => (
          <section key={idx} className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-[#F4F4F5] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              {section.heading}
            </h3>

            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-zinc-400 font-light">
                {paragraph}
              </p>
            ))}

            {section.bulletPoints && (
              <ul className="space-y-2.5 my-3 pl-1">
                {section.bulletPoints.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <span className="text-purple-400 mt-1 font-bold">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Optional Code Block */}
            {section.codeBlock && (
              <div className="my-4 rounded-xl bg-[#080413] border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-[#130b24] text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-2">
                    <Code2 size={14} className="text-purple-400" />
                    {section.codeBlock.title}
                  </span>
                  <button
                    onClick={() => handleCopyCode(section.codeBlock!.code, idx)}
                    className="flex items-center gap-1 text-[11px] text-purple-400 hover:text-purple-200 font-mono cursor-pointer"
                  >
                    {copiedCodeIndex === idx ? <Check size={12} /> : null}
                    {copiedCodeIndex === idx ? 'Copiado!' : 'Copiar Código'}
                  </button>
                </div>
                <pre className="p-4 font-mono text-xs sm:text-sm text-purple-200/90 overflow-x-auto whitespace-pre">
                  <code>{section.codeBlock.code}</code>
                </pre>
              </div>
            )}

            {/* Optional Prompt Box */}
            {section.promptBox && (
              <PromptCopyBox
                title={section.promptBox.title}
                prompt={section.promptBox.prompt}
                note={section.promptBox.note}
              />
            )}
          </section>
        ))}
      </div>

      {/* Price Calculator in Module 7 */}
      {module.number === 7 && <PriceCalculator />}

      {/* Practical Example Highlight Box */}
      {module.exampleHighlight && (
        <div className="mt-8 p-5 sm:p-6 rounded-xl bg-[#130b24] border border-purple-500/30 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
              {module.exampleHighlight.badgeText || 'EXEMPLO PRÁTICO APLICADO'}
            </span>
          </div>

          <h4 className="text-base sm:text-lg font-semibold text-[#F4F4F5]">
            {module.exampleHighlight.title}
          </h4>

          <p className="text-xs sm:text-sm text-zinc-400 font-light">
            {module.exampleHighlight.description}
          </p>

          {module.exampleHighlight.codeSnippet && (
            <div className="rounded-lg bg-[#080413] p-4 border border-white/5 font-mono text-xs text-purple-200 overflow-x-auto">
              <pre>{module.exampleHighlight.codeSnippet}</pre>
            </div>
          )}

          {module.exampleHighlight.promptTemplate && (
            <PromptCopyBox
              title="Template Prático de Prompt"
              prompt={module.exampleHighlight.promptTemplate}
            />
          )}

          {module.exampleHighlight.tips && (
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase text-purple-300 font-bold block">
                Dicas de Implementação:
              </span>
              <ul className="space-y-1.5 pl-2">
                {module.exampleHighlight.tips.map((tip, tIdx) => (
                  <li key={tIdx} className="text-xs text-zinc-400 flex items-start gap-2">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Module Completion Interactive Checklist */}
      {module.interactiveChecklist && (
        <div className="mt-8 pt-6 border-t border-white/10">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-3">
            CHECKLIST DE FIXAÇÃO DESTE MÓDULO:
          </h4>
          <div className="space-y-2">
            {module.interactiveChecklist.map((checkText, cIdx) => (
              <label
                key={cIdx}
                className="flex items-start gap-3 p-3 rounded-lg bg-[#0e071e] border border-white/5 hover:border-white/15 transition-all cursor-pointer text-xs sm:text-sm text-zinc-300 font-light select-none"
              >
                <input
                  type="checkbox"
                  className="mt-0.5 rounded accent-purple-600 cursor-pointer"
                />
                <span>{checkText}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};
