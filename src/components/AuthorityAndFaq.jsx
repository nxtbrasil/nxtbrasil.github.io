import React, { useState } from 'react';

export default function AuthorityAndFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const stats = [
    { label: "Projetos Entregues", value: "150+" },
    { label: "Anos de Experiência", value: "15+" },
    { label: "Clientes Satisfeitos", value: "80+" },
    { label: "Suporte Ativo", value: "24/7" },
  ];

  const faqs = [
    {
      q: "Quanto tempo leva para desenvolver um sistema personalizado?",
      a: "O prazo varia conforme a complexidade, mas projetos médios levam de 4 a 12 semanas. Trabalhamos com entregas em etapas (Sprints) para que você acompanhe a evolução em tempo real."
    },
    {
      q: "Vocês dão suporte após a entrega do projeto?",
      a: "Com certeza. Oferecemos planos de manutenção e suporte técnico contínuo para garantir que seu sistema esteja sempre atualizado e seguro."
    },
    {
      q: "Meu sistema pode ser integrado com outras ferramentas?",
      a: "Sim. Especializamo-nos em integrações via API com sistemas de pagamento, CRMs, ERPs e ferramentas de automação de marketing."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Bloco de Números (Stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-[#0056b3] mb-2 transition-transform group-hover:-translate-y-2 duration-300">
                {stat.value}
              </div>
              <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          
          {/* Lado Esquerdo: Texto e CTA */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[#0056b3] font-bold tracking-[4px] uppercase text-sm mb-4">// Dúvidas Comuns</h4>
              <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
                Pronto para dar o <br />
                <span className="text-[#0056b3]">próximo passo?</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg">
              Ainda tem perguntas sobre como a NXT Brasil pode transformar sua operação? Confira as respostas ao lado ou fale diretamente com um consultor.
            </p>
            <button className="bg-[#0056b3] text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-blue-500/40 hover:bg-[#004494] hover:scale-105 transition-all inline-flex items-center gap-4">
              Iniciar Consultoria Gratuita
              <span className="text-xl">→</span>
            </button>
          </div>

          {/* Lado Direito: FAQ (Acordeão) */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="border border-gray-100 rounded-[25px] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#1a1a1a] md:text-lg">{faq.q}</span>
                  <span className={`text-2xl text-[#0056b3] transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-8 pt-0 text-gray-500 leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}