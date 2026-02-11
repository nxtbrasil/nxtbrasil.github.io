import React from "react";
import { 
  Globe, ShoppingCart, Layers, Smartphone, 
  CheckCircle2, Rocket, Target, ShieldCheck 
} from "lucide-react";

export default function ServicosPage() {
  const servicos = [
    {
      title: "Plataformas Digitais de Alta Performance",
      tagline: "Velocidade que se traduz em faturamento.",
      icon: <Globe className="w-10 h-10" />,
      description: "Desenvolvemos ecossistemas digitais focados na experiência do usuário e na autoridade da sua marca. Criamos interfaces intuitivas que carregam instantaneamente, garantindo a melhor retenção de público do mercado.",
      detailedFeatures: [
        { label: "Otimização de Conversão", detail: "Estruturas planejadas para guiar o usuário até a ação desejada." },
        { label: "Presença Digital Global", detail: "Sistemas preparados para escala nacional e internacional." },
        { label: "Segurança de Dados", detail: "Proteção avançada para as informações da sua empresa e clientes." }
      ],
      color: "border-blue-500"
    },
    {
      title: "E-commerce & Varejo Digital",
      tagline: "Venda sem limites com estabilidade total.",
      icon: <ShoppingCart className="w-10 h-10" />,
      description: "Soluções completas para venda online, desde o catálogo até o checkout. Focamos em reduzir a fricção de compra e integrar sua operação digital com seus processos físicos de logística.",
      detailedFeatures: [
        { label: "Checkout Inteligente", detail: "Processo de pagamento simplificado para reduzir o abandono de carrinhos." },
        { label: "Gestão Unificada", detail: "Controle de estoque, pedidos e clientes em uma única interface." },
        { label: "Escalabilidade de Vendas", detail: "Infraestrutura que suporta grandes picos de tráfego, como na Black Friday." }
      ],
      color: "border-cyan-400"
    },
    {
      title: "Sistemas de Gestão & Automação",
      tagline: "Eficiência operacional através da inteligência.",
      icon: <Layers className="w-10 h-10" />,
      description: "Softwares personalizados para automatizar processos manuais e eliminar gargalos. Transformamos dados complexos em painéis de controle simples que facilitam a tomada de decisão estratégica.",
      detailedFeatures: [
        { label: "Dashboards Estratégicos", detail: "Visualização clara dos indicadores de performance do seu negócio." },
        { label: "Integração de Processos", detail: "Conectamos diferentes áreas da empresa em um fluxo de trabalho fluido." },
        { label: "Redução de Custos", detail: "Automação de tarefas repetitivas, liberando seu time para o que importa." }
      ],
      color: "border-[#0056b3]"
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00d4ff]/5 blur-[120px] rounded-full -mr-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[#00d4ff] font-bold tracking-widest uppercase text-sm">Expertise NXT Brasil</span>
          <h1 className="text-white text-5xl md:text-8xl font-black mt-4 mb-8 tracking-tighter leading-none">
            Tecnologia que <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0056b3]">gera resultado.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Unimos estratégia de negócio e engenharia de ponta para criar ativos digitais 
            que colocam sua empresa à frente do mercado.
          </p>
        </div>
      </section>

      {/* DETALHAMENTO DAS SOLUÇÕES */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-20">
          {servicos.map((s, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-12 p-10 bg-white rounded-[2rem] border-b-8 ${s.color} shadow-xl hover:shadow-2xl transition-all duration-500`}>
              
              {/* Resumo do Serviço */}
              <div className="lg:w-1/3 space-y-6">
                <div className="w-20 h-20 bg-black text-[#00d4ff] rounded-2xl flex items-center justify-center shadow-lg">
                  {s.icon}
                </div>
                <h2 className="text-3xl font-black text-black leading-tight">{s.title}</h2>
                <p className="text-[#0056b3] font-bold italic">{s.tagline}</p>
              </div>

              {/* Detalhes de Negócio */}
              <div className="lg:w-2/3 space-y-8 border-l border-gray-100 lg:pl-12">
                <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-[#00d4ff] pl-4">
                  {s.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {s.detailedFeatures.map((f, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center gap-2 text-black font-black">
                        <CheckCircle2 className="text-[#00d4ff] w-5 h-5" />
                        {f.label}
                      </div>
                      <p className="text-sm text-gray-500 leading-snug">{f.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NOSSO COMPROMISSO */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <h2 className="text-4xl font-black text-black">Por que escolher a NXT Brasil?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="mx-auto w-10 h-10 text-[#00d4ff]" />, title: "Foco em ROI", desc: "Cada linha de código é pensada para trazer retorno sobre o seu investimento." },
              { icon: <ShieldCheck className="mx-auto w-10 h-10 text-[#00d4ff]" />, title: "Parceria de Longo Prazo", desc: "Não somos apenas fornecedores, somos parceiros do crescimento do seu negócio." },
              { icon: <Rocket className="mx-auto w-10 h-10 text-[#00d4ff]" />, title: "Entrega Ágil", desc: "Metodologias que garantem entregas rápidas e constantes, sem surpresas." },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                {item.icon}
                <h4 className="font-black text-black text-xl">{item.title}</h4>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-black p-12 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0056b3]/20 blur-[100px] rounded-full"></div>
          <h2 className="text-white text-4xl md:text-5xl font-black relative z-10">
            Vamos transformar o <br /> <span className="text-[#00d4ff]">futuro da sua empresa?</span>
          </h2>
          <button className="bg-[#00d4ff] text-black px-12 py-5 rounded-full font-black text-xl hover:bg-white transition-all relative z-10 shadow-[0_10px_30px_rgba(0,212,255,0.3)]">
            Falar com um Especialista
          </button>
        </div>
      </div>
    </div>
  );
}