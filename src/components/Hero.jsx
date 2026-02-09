import React from 'react';
import { Play, ArrowUpRight, MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      
      {/* Background limpo sem os Blobs */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* COLUNA ESQUERDA: Tipografia Ultra-Bold */}
          <div className="lg:col-span-8 space-y-10">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <MousePointer2 size={14} className="text-[#00d4ff]" />
              Experience the Future
            </div>

            <h1 className="text-7xl md:text-[100px] font-black leading-[0.85] tracking-tighter text-black">
              NXT <br />
              <span className="text-[#0056b3]">LEVEL</span> <br />
              DIGITAL.
            </h1>

            <div className="flex flex-wrap gap-6 items-center">
              <button className="group relative bg-black text-white px-10 py-5 rounded-2xl font-bold overflow-hidden transition-all hover:bg-[#0056b3]">
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Orçamento <ArrowUpRight size={20} />
                </span>
              </button>

              <button className="flex items-center gap-4 font-bold text-black group">
                <span className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-all">
                  <Play size={20} fill="black" />
                </span>
                Assista ao Showreel
              </button>
            </div>
          </div>

          {/* COLUNA DIREITA: Apenas o texto de apoio e a linha lateral */}
          <div className="lg:col-span-4 lg:mt-24">
            <div className="relative pl-8 border-l-4 border-[#0056b3] space-y-8">
              <p className="text-2xl text-gray-500 leading-relaxed font-medium">
                Sincronizamos <span className="text-black font-bold">estratégia</span> e <span className="text-black font-bold">performance</span> para criar produtos que definem categorias.
              </p>
              
              <div className="space-y-4">
                <div className="text-4xl font-black text-black leading-none">98%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}