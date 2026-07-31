import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Zap } from 'lucide-react';

export const PriceCalculator: React.FC = () => {
  const [landingPages, setLandingPages] = useState<number>(3);
  const [lpPrice, setLpPrice] = useState<number>(1500);
  const [saasSubs, setSaasSubs] = useState<number>(20);
  const [saasPrice, setSaasPrice] = useState<number>(147);

  const lpRevenue = landingPages * lpPrice;
  const saasRevenue = saasSubs * saasPrice;
  const totalMonthly = lpRevenue + saasRevenue;
  const totalAnnual = totalMonthly * 12;

  return (
    <div className="my-6 glass-card rounded-2xl p-5 sm:p-7 border border-[#00F0FF]/20 bg-gradient-to-b from-[#0F1B38] to-[#0A1128]">
      <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-4">
        <div className="p-2.5 rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
          <Calculator size={22} />
        </div>
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00F0FF]">
            SIMULADOR INTERATIVO · MÓDULO 7
          </span>
          <h4 className="text-base sm:text-lg font-semibold text-[#F0F4FF]">
            Calculadora de Projeção Financeira
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Landing Pages Slider */}
        <div className="p-4 rounded-xl bg-[#080E21] border border-white/5 space-y-3">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-[#8A9BC4] font-medium">Landing Pages por Mês:</span>
            <span className="font-mono font-bold text-[#3B6FFF] text-base">{landingPages} vds</span>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            step={1}
            value={landingPages}
            onChange={(e) => setLandingPages(Number(e.target.value))}
            className="w-full accent-[#3B6FFF] cursor-pointer"
          />

          <div className="flex justify-between items-center text-xs sm:text-sm pt-2">
            <span className="text-[#8A9BC4] font-medium">Valor Médio por LP:</span>
            <span className="font-mono font-bold text-[#00F0FF]">R$ {lpPrice.toLocaleString('pt-BR')}</span>
          </div>
          <input
            type="range"
            min={500}
            max={5000}
            step={250}
            value={lpPrice}
            onChange={(e) => setLpPrice(Number(e.target.value))}
            className="w-full accent-[#00F0FF] cursor-pointer"
          />
          <div className="text-right text-[11px] font-mono text-[#3B6FFF] font-semibold pt-1">
            Subtotal LPs: R$ {lpRevenue.toLocaleString('pt-BR')}/mês
          </div>
        </div>

        {/* Micro SaaS Slider */}
        <div className="p-4 rounded-xl bg-[#080E21] border border-white/5 space-y-3">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-[#8A9BC4] font-medium">Assinantes Micro SaaS:</span>
            <span className="font-mono font-bold text-[#8B3FFF] text-base">{saasSubs} ativos</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={saasSubs}
            onChange={(e) => setSaasSubs(Number(e.target.value))}
            className="w-full accent-[#8B3FFF] cursor-pointer"
          />

          <div className="flex justify-between items-center text-xs sm:text-sm pt-2">
            <span className="text-[#8A9BC4] font-medium">Mensalidade SaaS:</span>
            <span className="font-mono font-bold text-[#8B3FFF]">R$ {saasPrice.toLocaleString('pt-BR')}</span>
          </div>
          <input
            type="range"
            min={47}
            max={497}
            step={10}
            value={saasPrice}
            onChange={(e) => setSaasPrice(Number(e.target.value))}
            className="w-full accent-[#8B3FFF] cursor-pointer"
          />
          <div className="text-right text-[11px] font-mono text-[#8B3FFF] font-semibold pt-1">
            Subtotal Recorrente: R$ {saasRevenue.toLocaleString('pt-BR')}/mês
          </div>
        </div>
      </div>

      {/* Result Display */}
      <div className="p-5 rounded-xl bg-[#070D1E] border border-[#3B6FFF]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#8A9BC4] uppercase tracking-wider block">
            FATURAMENTO MENSAL PROJETADO
          </span>
          <div className="text-2xl sm:text-3xl font-bold font-mono text-[#00F0FF] flex items-center gap-1 mt-1">
            <DollarSign className="text-[#3B6FFF]" size={28} />
            <span>R$ {totalMonthly.toLocaleString('pt-BR')}</span>
            <span className="text-xs text-[#8A9BC4] font-sans font-normal ml-1">/ mês</span>
          </div>
        </div>

        <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-6 w-full sm:w-auto">
          <span className="text-xs font-mono text-[#8A9BC4] uppercase tracking-wider block">
            PROJEÇÃO ANUAL
          </span>
          <div className="text-lg font-bold font-mono text-[#8B3FFF] flex items-center gap-1 mt-1">
            <TrendingUp size={18} />
            <span>R$ {totalAnnual.toLocaleString('pt-BR')} / ano</span>
          </div>
        </div>
      </div>
    </div>
  );
};
