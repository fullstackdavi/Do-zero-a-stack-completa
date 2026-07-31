import React, { useState } from 'react';
import { ModuleItem } from '../types';
import { PromptCopyBox } from './PromptCopyBox';
import { PriceCalculator } from './PriceCalculator';
import { CheckCircle2, Clock, Code2, Sparkles, Check, ChevronDown, ChevronUp } from 'lucide-react';

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
          ? 'glass-card-purple border border-[#8B3FFF]/40 shadow-2xl'
          : 'glass-card border border-white/10'
      }`}
    >
      {/* Decorative Glow Background */}
      <div
        className={`absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
          isOfferStyle
            ? 'bg-[#8B3FFF]/20'
            : module.accentColor === 'cyan'
            ? 'bg-[#00F0FF]/15'
            : 'bg-[#3B6FFF]/15'
        }`}
      />

      {/* Header Badge & Reading Time */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span
          className={`font-mono text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-md border ${
            isOfferStyle
              ? 'bg-[#8B3FFF]/20 border-[#8B3FFF]/40 text-[#8B3FFF]'
              : module.accentColor === 'cyan'
              ? 'bg-[#00F0FF]/15 border-[#00F0FF]/30 text-[#00F0FF]'
              : 'bg-[#3B6FFF]/15 border-[#3B6FFF]/30 text-[#3B6FFF]'
          }`}
        >
          {module.badge}
        </span>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-mono text-[#8A9BC4]">
            <Clock size={13} />
            {module.readTime}
          </span>

          <button
            onClick={() => onToggleComplete(module.id)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium border transition-all cursor-pointer ${
              isCompleted
                ? 'bg-[#00F0FF]/20 border-[#00F0FF] text-[#00F0FF]'
                : 'bg-white/5 border-white/10 text-[#8A9BC4] hover:border-white/30'
            }`}
            title="Marcar módulo como lido"
          >
            <CheckCircle2 size={14} className={isCompleted ? 'text-[#00F0FF]' : 'text-[#8A9BC4]'} />
            <span>{isCompleted ? 'Concluído' : 'Marcar Lido'}</span>
          </button>
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="space-y-2 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F0F4FF] leading-snug">
          {module.title}
        </h2>
        <p className="text-sm sm:text-base text-[#8A9BC4] font-light leading-relaxed">
          {module.subtitle}
        </p>
      </div>

      {/* Summary Banner */}
      <div className="p-4 rounded-xl bg-[#080E21]/80 border-l-4 border-[#3B6FFF] text-xs sm:text-sm text-[#F0F4FF]/90 font-light mb-8 leading-relaxed">
        <strong className="font-semibold text-[#00F0FF] block mb-1 uppercase font-mono tracking-wider text-[11px]">
          RESUMO DO MÓDULO:
        </strong>
        {module.summary}
      </div>

      {/* Content Sections */}
      <div className="space-y-8 text-sm sm:text-base font-light text-[#F0F4FF]/90 leading-relaxed">
        {module.sections.map((section, idx) => (
          <section key={idx} className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-[#F0F4FF] flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  isOfferStyle ? 'bg-[#8B3FFF]' : 'bg-[#00F0FF]'
                }`}
              />
              {section.heading}
            </h3>

            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-[#8A9BC4] font-light">
                {paragraph}
              </p>
            ))}

            {section.bulletPoints && (
              <ul className="space-y-2.5 my-3 pl-1">
                {section.bulletPoints.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F0F4FF]/90">
                    <span className="text-[#00F0FF] mt-1 font-bold">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Optional Code Block */}
            {section.codeBlock && (
              <div className="my-4 rounded-xl bg-[#080E21] border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-[#0E1833] text-xs font-mono text-[#8A9BC4]">
                  <span className="flex items-center gap-2">
                    <Code2 size={14} className="text-[#00F0FF]" />
                    {section.codeBlock.title}
                  </span>
                  <button
                    onClick={() => handleCopyCode(section.codeBlock!.code, idx)}
                    className="flex items-center gap-1 text-[11px] text-[#3B6FFF] hover:text-[#00F0FF] font-mono cursor-pointer"
                  >
                    {copiedCodeIndex === idx ? <Check size={12} /> : null}
                    {copiedCodeIndex === idx ? 'Copiado!' : 'Copiar Código'}
                  </button>
                </div>
                <pre className="p-4 font-mono text-xs sm:text-sm text-[#00F0FF]/90 overflow-x-auto whitespace-pre">
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
        <div className="mt-8 p-5 sm:p-6 rounded-xl bg-[#0B1530] border border-[#3B6FFF]/30 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#00F0FF]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00F0FF]">
              {module.exampleHighlight.badgeText || 'EXEMPLO PRÁTICO APLICADO'}
            </span>
          </div>

          <h4 className="text-base sm:text-lg font-semibold text-[#F0F4FF]">
            {module.exampleHighlight.title}
          </h4>

          <p className="text-xs sm:text-sm text-[#8A9BC4] font-light">
            {module.exampleHighlight.description}
          </p>

          {module.exampleHighlight.codeSnippet && (
            <div className="rounded-lg bg-[#060B1A] p-4 border border-white/5 font-mono text-xs text-[#00F0FF] overflow-x-auto">
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
              <span className="text-xs font-mono uppercase text-[#3B6FFF] font-bold block">
                Dicas de Implementação:
              </span>
              <ul className="space-y-1.5 pl-2">
                {module.exampleHighlight.tips.map((tip, tIdx) => (
                  <li key={tIdx} className="text-xs text-[#8A9BC4] flex items-start gap-2">
                    <span className="text-[#8B3FFF] font-bold">✓</span>
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
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A9BC4] mb-3">
            CHECKLIST DE FIXAÇÃO DESTE MÓDULO:
          </h4>
          <div className="space-y-2">
            {module.interactiveChecklist.map((checkText, cIdx) => (
              <label
                key={cIdx}
                className="flex items-start gap-3 p-3 rounded-lg bg-[#080E21] border border-white/5 hover:border-white/15 transition-all cursor-pointer text-xs sm:text-sm text-[#F0F4FF]/90 font-light select-none"
              >
                <input
                  type="checkbox"
                  className="mt-0.5 rounded accent-[#3B6FFF] cursor-pointer"
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
