import React from "react";
import { Users, Target, Lightbulb, ShieldCheck, Rocket, Briefcase } from "lucide-react";

export default function QuemSomos() {
  const pilares = [
    {
      icon: <Target className="w-8 h-8 text-[#00d4ff]" />,
      title: "Missão",
      desc: "Transformar a complexidade do mundo digital em soluções simples, escaláveis e altamente lucrativas para nossos parceiros."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#00d4ff]" />,
      title: "Visão",
      desc: "Ser a principal referência em engenharia de software e estratégia digital para empresas que buscam liderança em seus setores."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00d4ff]" />,
      title: "Valores",
      desc: "Transparência radical, excelência técnica incansável e compromisso total com o retorno sobre o investimento (ROI) do cliente."
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION - QUEM SOMOS */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#0056b3]/10 blur-[120px] rounded-full -ml-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[#00d4ff] font-bold tracking-widest uppercase text-sm">Sobre a NXT Brasil</span>
          <h1 className="text-white text-5xl md:text-8xl font-black mt-4 mb-8 tracking-tighter leading-none">
            Mais que código, <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0056b3]">
              somos estratégia.
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            A NXT Brasil não nasceu para ser apenas mais uma empresa de tecnologia. 
            Nascemos para ser o braço direito de empresas que encaram o digital como 
            seu principal motor de crescimento.
          </p>
        </div>
      </section>

      {/* HISTÓRIA E ESSÊNCIA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="NXT Brasil Workflow" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl hidden md:block max-w-xs border-b-4 border-[#00d4ff]">
              <p className="text-black font-black text-2xl italic">"Tecnologia só faz sentido se trouxer resultado real."</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-black text-black leading-tight">
              A Software House focada no <span className="text-[#0056b3]">próximo nível</span> do seu negócio.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Fundada por especialistas em engenharia de software e negócios digitais, a **NXT Brasil** preenche a lacuna entre a visão do cliente e a realidade técnica. Entendemos que um sistema robusto precisa ser, acima de tudo, uma ferramenta que otimize o tempo e potencialize as vendas.
              </p>
              <p>
                Atuamos com uma metodologia própria que une o rigor da engenharia com a agilidade das startups. Isso nos permite entregar projetos complexos em prazos recordes, sem nunca sacrificar a qualidade ou a segurança.
              </p>
            </div>

            {/* Ícones de Diferenciais */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-xl"><Briefcase className="text-[#0056b3] w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-black">B2B & B2C</h4>
                  <p className="text-xs text-gray-500">Expertise em diversos modelos de mercado.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-xl"><Users className="text-[#0056b3] w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-black">Time Senior</h4>
                  <p className="text-xs text-gray-500">Desenvolvedores focados em arquitetura limpa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES ESTRATÉGICOS (MISSÃO, VISÃO, VALORES) */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pilares.map((p, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group border-t-4 border-transparent hover:border-[#00d4ff]">
                <div className="mb-6">{p.icon}</div>
                <h3 className="text-2xl font-black text-black mb-4">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTATÍSTICAS DE IMPACTO */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto border-y border-gray-100 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-black text-black">100%</p>
              <p className="text-[#0056b3] font-bold text-sm uppercase mt-2 tracking-widest">Comprometimento</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-black text-black">+50</p>
              <p className="text-[#0056b3] font-bold text-sm uppercase mt-2 tracking-widest">Soluções Ativas</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-black text-black">0</p>
              <p className="text-[#0056b3] font-bold text-sm uppercase mt-2 tracking-widest">Projetos Abandonados</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-black text-black">24/7</p>
              <p className="text-[#0056b3] font-bold text-sm uppercase mt-2 tracking-widest">Monitoramento</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - CONVITE */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-black p-12 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4ff]/10 blur-[100px] rounded-full"></div>
          <h2 className="text-white text-4xl md:text-5xl font-black mb-8">
            Faça parte da nossa <br /> próxima <span className="text-[#00d4ff]">história de sucesso.</span>
          </h2>
          <button className="bg-[#00d4ff] text-black px-12 py-5 rounded-full font-black text-xl hover:bg-white transition-all shadow-[0_10px_30px_rgba(0,212,255,0.3)]">
            Agendar Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </div>
  );
}