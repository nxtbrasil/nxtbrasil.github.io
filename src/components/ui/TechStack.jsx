import React from 'react';

export default function TechStack() {
  const techs = [
    { name: "Java", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
    { name: "Spring Boot", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },
    { name: "Angular", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" },
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "WordPress", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg" },
    { name: "SQL", logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
    { name: "HTML5", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "AWS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12 text-center">
        <h3 className="text-[#0056b3] font-bold text-xs uppercase tracking-[4px] mb-2">
          Tecnologia de Elite
        </h3>
        <p className="text-gray-400 text-sm font-medium">
          Domínio completo das ferramentas que movem o mercado digital.
        </p>
      </div>

      {/* Container do Carrossel Infinito */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 py-4">
          {/* Renderiza a lista duas vezes para o efeito infinito */}
          {[...techs, ...techs].map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center min-w-[100px] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500"
            >
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="h-10 md:h-12 w-auto object-contain mb-3"
              />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}