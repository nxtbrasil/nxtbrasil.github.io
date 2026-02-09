import React from 'react';

export default function ClientLogos() {
  // Lista de logos (Substitua os links pelos logos reais ou SVGs)
  const clients = [
    { name: "Sleep House", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" }, // Exemplo
    { name: "Star Tools", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Cliente 3", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Cliente 4", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
    { name: "Cliente 5", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" },
    { name: "Cliente 6", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  ];

  return (
    <section className="py-20 bg-[#f9f9f9] border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12 text-center">
        <h3 className="text-gray-400 font-bold text-xs uppercase tracking-[4px]">
          Empresas que confiam na NXT Brasil
        </h3>
      </div>

      {/* Container do Carrossel Infinito */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {/* Renderiza a lista duas vezes para o efeito infinito */}
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex items-center justify-center w-40 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-8 md:h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Estilos para a animação no Tailwind (Adicione ao seu tailwind.config.js ou use style tag) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
}