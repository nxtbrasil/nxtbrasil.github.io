import React from 'react';
import { Play, ArrowUpRight, MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    // AJUSTE: items-start e pt-28 (espaço ideal para o Header de 80px)
    <section id="home" className="relative min-h-screen flex items-start bg-white overflow-hidden pt-28 md:pt-36">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
          alt="Tech Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-50 rounded-full filter blur-[120px] opacity-50 animate-pulse"></div>
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* AJUSTE: gap reduzido de 16 para 10 para aproximar as colunas */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* COLUNA ESQUERDA: Tipografia */}
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <MousePointer2 size={14} className="text-[#00d4ff]" />
              Innovation & Strategy
            </div>

            <h1 className="text-7xl md:text-[110px] font-black leading-[0.85] tracking-tighter text-black">
              NXT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056b3] to-[#00d4ff]">
                LEVEL
              </span> <br />
              DIGITAL.
            </h1>

            <div className="flex flex-wrap gap-6 items-center">
              <a 
                href="https://wa.me/5511945391475?text=Olá! Vim pelo site e gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-black text-white px-10 py-5 rounded-2xl font-bold overflow-hidden transition-all hover:bg-[#0056b3] flex items-center gap-2"
              >
                Solicitar Orçamento <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA: Texto de Apoio */}
          {/* AJUSTE: mt-10 em vez de mt-32 para subir o bloco de texto lateral */}
          <div className="lg:col-span-4 mt-10 lg:mt-24">
            <div className="relative pl-8 border-l-4 border-[#0056b3]">
              <p className="text-2xl text-gray-500 leading-relaxed font-medium">
                Transformamos complexidade em <span className="text-black font-bold">clareza</span>. Soluções digitais que elevam sua marca ao topo.
              </p>
              
              <div className="mt-10 flex gap-10">
                <div>
                  <div className="text-4xl font-black text-black">98%</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#0056b3]">3+</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Projects</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}