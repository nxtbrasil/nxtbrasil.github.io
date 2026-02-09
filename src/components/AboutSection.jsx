export default function AboutSection() {
  const features = [
    "Sistemas Escaláveis e Seguros",
    "Gestão de Dados Inteligente",
    "Suporte Técnico Especializado",
    "Integração Total com seu Negócio"
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Lado Esquerdo: Imagem com Moldura Estilizada */}
        <div className="relative">
          {/* Quadrado decorativo atrás da imagem */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#f3f3f3] rounded-3xl z-0"></div>
          
          <div className="relative z-10">
            <img 
              src="https://img.freepik.com/free-photo/business-people-shaking-hands-together-office_53876-63839.jpg" 
              alt="NXT Brasil Gestão" 
              className="rounded-[40px] shadow-2xl w-full object-cover h-[500px]"
            />
          </div>

          {/* Selo de Experiência flutuante */}
          <div className="absolute -bottom-10 -right-6 bg-[#0056b3] text-white p-8 rounded-[30px] shadow-2xl z-20">
            <div className="text-4xl font-black italic">15+</div>
            <div className="text-sm uppercase font-bold tracking-tighter opacity-80">Anos de <br/> Mercado</div>
          </div>
        </div>

        {/* Lado Direito: Texto e Checklist */}
        <div className="space-y-8">
          <div>
            <h4 className="text-[#0056b3] font-bold tracking-[4px] uppercase text-sm mb-4">
              // Por que nos escolher
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
              Sua empresa com <br />
              <span className="text-[#0056b3]">Sistemas de Gestão</span> <br />
              de alta performance.
            </h2>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed">
            A NXT Brasil não apenas desenvolve software; nós criamos o motor que impulsiona a eficiência operacional da sua empresa, eliminando gargalos e transformando dados em decisões.
          </p>

          {/* Checklist de itens */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-[#0056b3] text-xs font-bold">✓</span>
                </div>
                <span className="text-slate-700 font-semibold text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <button className="border-2 border-[#0056b3] text-[#0056b3] px-10 py-4 rounded-full font-bold hover:bg-[#0056b3] hover:text-white transition-all duration-300">
              Descobrir Soluções
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}