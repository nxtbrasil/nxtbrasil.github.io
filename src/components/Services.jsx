export default function Services() {
  const services = [
    {
      title: "Desenvolvimento Web",
      desc: "Sites de alta performance e plataformas personalizadas para destacar sua marca no mercado digital.",
      icon: "🌐"
    },
    {
      title: "Sistemas de Gestão",
      desc: "Soluções de ERP e CRM sob medida para automatizar processos e centralizar o controle da sua empresa.",
      icon: "⚙️"
    },
    {
      title: "Consultoria de TI",
      desc: "Planejamento estratégico para modernizar sua infraestrutura e garantir segurança de dados.",
      icon: "🚀"
    }
  ];

  return (
    <section className="bg-[#f3f3f3] py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h4 className="text-[#0056b3] font-bold tracking-[4px] uppercase text-sm mb-2">
            // Nossas Soluções
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a]">
            Impulsionando sua <span className="text-[#0056b3]">Gestão</span>
          </h2>
        </div>

        {/* Grade de Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-[40px] shadow-xl shadow-gray-200/50 hover:-translate-y-3 transition-all duration-500 group cursor-pointer"
            >
              {/* Ícone com gradiente no hover */}
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-gradient-to-br group-hover:from-[#0056b3] group-hover:to-[#00a2ff] group-hover:text-white transition-all duration-500 shadow-inner">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#0056b3] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-8 text-sm md:text-base">
                {service.desc}
              </p>

              {/* Botão de ação interno do card */}
              <div className="flex items-center gap-2 text-[#0056b3] font-bold text-sm uppercase tracking-wider">
                <span>Ver Detalhes</span>
                <div className="w-8 h-[2px] bg-[#0056b3] transition-all group-hover:w-12"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}