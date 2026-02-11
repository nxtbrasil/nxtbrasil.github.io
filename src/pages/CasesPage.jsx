import React from "react";
import { ExternalLink, ArrowRight, BarChart3, Clock, Target } from "lucide-react";

// Importando as imagens reais do seu projeto
import sleepHouseImg from "../assets/projects/sleephouse-thumb.jpg";
import starToolsImg from "../assets/projects/startools-thumb.jpg";

export default function CasesPage() {
  const cases = [
    {
      title: "Sleep House Marechal",
      category: "Landing Page de Conversão",
      image: sleepHouseImg,
      stats: [
        { label: "Carregamento", value: "Sub 1s" },
        { label: "Foco em Leads", value: "Alta Conversão" }
      ],
      description: "Desenvolvimento de uma Landing Page estratégica para a unidade Marechal da Sleep House. O foco foi criar uma interface limpa, rápida e totalmente otimizada para dispositivos móveis, garantindo que o usuário encontre o produto ideal com poucos cliques.",
      link: "https://sleephousemarechal.com.br/"
    },
    {
      title: "Star Tools Ferramentas",
      category: "Site Institucional & Catálogo",
      image: starToolsImg,
      stats: [
        { label: "UX Design", value: "Intuitivo" },
        { label: "SEO On-Page", value: "Otimizado" }
      ],
      description: "Criação da presença digital para a Star Tools. Um projeto que une a robustez do setor industrial com uma navegação moderna, facilitando a visualização do catálogo de produtos e o contato direto com o time comercial.",
      link: "https://startoolsferramentas.com.br/"
    },
    {
      title: "Sistema ERP Sheik Plastic",
      category: "Gestão & Automação de Sistemas",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      stats: [
        { label: "Processos", value: "Automatizados" },
        { label: "Dados", value: "Tempo Real" }
      ],
      description: "Desenvolvimento de um sistema de gestão (ERP) customizado para a Sheik Plastic. A solução integrou processos internos, controle de estoque e produtividade, eliminando falhas de comunicação e otimizando a operação fabril.",
      link: "#"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#00d4ff]/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[#00d4ff] font-bold tracking-widest uppercase text-sm font-mono">Nosso Portfólio</span>
          <h1 className="text-white text-5xl md:text-8xl font-black mt-4 mb-6 tracking-tighter">
            Resultados que <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0056b3]">falam por nós.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Projetos reais, para empresas reais. Veja como aplicamos a tecnologia NXT para gerar valor e escala.
          </p>
        </div>
      </section>

      {/* GRID DE CASES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {cases.map((projeto, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* IMAGEM DO PROJETO */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-2xl border border-gray-100">
                  <img 
                    src={projeto.image} 
                    alt={projeto.title} 
                    className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                  <span className="text-black font-bold text-xs uppercase tracking-widest">{projeto.category}</span>
                </div>
              </div>

              {/* CONTEÚDO DO CASE */}
              <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-4xl font-black text-black leading-tight tracking-tighter">
                  {projeto.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  "{projeto.description}"
                </p>

                {/* ESTATÍSTICAS DO CASE */}
                <div className="grid grid-cols-2 gap-8 border-y border-gray-100 py-8">
                  {projeto.stats.map((stat, sIndex) => (
                    <div key={sIndex}>
                      <p className="text-3xl font-black text-[#0056b3]">{stat.value}</p>
                      <p className="text-xs uppercase font-bold text-gray-400 tracking-widest mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  {projeto.link !== "#" ? (
                    <a 
                      href={projeto.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-[#00d4ff] hover:text-black transition-all group"
                    >
                      Visitar Projeto Online
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="bg-gray-100 text-gray-400 px-8 py-4 rounded-full font-bold cursor-default">
                      Projeto Interno (Privado)
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-black rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00d4ff]/10 blur-[80px] rounded-full"></div>
          <h2 className="text-white text-4xl md:text-5xl font-black mb-8 relative z-10">
            Sua empresa pode ser <br /> o nosso próximo <span className="text-[#00d4ff]">case de sucesso.</span>
          </h2>
          <button className="bg-[#00d4ff] text-black px-12 py-5 rounded-full font-black text-xl hover:bg-white transition-all transform hover:scale-105 relative z-10">
            Falar com nosso time
          </button>
        </div>
      </section>
    </div>
  );
}