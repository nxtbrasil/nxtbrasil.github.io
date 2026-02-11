import React from "react";

export default function QuemSomos() {
  const valores = [
    { title: "Inovação", desc: "Antecipamos tendências para entregar o amanhã hoje." },
    { title: "Transparência", desc: "Relações diretas, honestas e focadas em resultados." },
    { title: "Qualidade", desc: "Código limpo, design intuitivo e performance extrema." }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* COLUNA DE IMAGEM/ELEMENTO VISUAL */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative z-10 shadow-2xl">
              {/* Você pode substituir pelo seu arquivo físico de imagem */}
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                alt="Time NXT Brasil" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Elemento Decorativo Azul (NXT Style) */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#00d4ff] rounded-2xl -z-0 opacity-20"></div>
          </div>

          {/* COLUNA DE CONTEÚDO */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-[#0056b3] font-bold tracking-widest text-sm uppercase">Nossa Essência</span>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
                Impulsionando o futuro através da <span className="text-[#00d4ff]">tecnologia</span>.
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              A **NXT Brasil** nasceu da paixão por solucionar problemas complexos através do digital. Somos uma software house focada em criar e-commerces que vendem e sistemas que otimizam o tempo real das empresas.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Nosso DNA é composto por estratégia e execução técnica de alto nível. Não entregamos apenas sites, entregamos ferramentas de crescimento.
            </p>

            {/* BOXES DE VALORES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {valores.map((item, index) => (
                <div key={index} className="p-4 border-l-2 border-[#00d4ff] bg-gray-50">
                  <h4 className="font-bold text-black mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BARRA DE ESTATÍSTICAS (OPCIONAL) */}
        <div className="mt-20 py-10 border-y border-gray-100 flex flex-wrap justify-around gap-8">
            <div className="text-center">
                <p className="text-4xl font-black text-black">100%</p>
                <p className="text-xs uppercase font-bold text-gray-400">Comprometimento</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-black text-black">+50</p>
                <p className="text-xs uppercase font-bold text-gray-400">Projetos Ativos</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-black text-black">24/7</p>
                <p className="text-xs uppercase font-bold text-gray-400">Suporte Técnico</p>
            </div>
        </div>

      </div>
    </section>
  );
}