import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] pt-16 pb-8 overflow-hidden">
      
      {/* Efeito de Degradê Radial de Fundo (Aura Azul) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0056b3]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/5 pb-10 gap-8">
          
          {/* Logo com Efeito Glow */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-3xl font-black tracking-tighter text-white transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,86,179,0.8)]">
              NXT <span className="text-[#0056b3]">Brasil</span>
            </span>
            <div className="w-2.5 h-2.5 bg-[#00d4ff] rounded-full mt-2 animate-pulse shadow-[0_0_15px_#00d4ff]"></div>
          </div>

          {/* Menu Minimalista High-Tech */}
          <nav className="flex gap-8">
            {['Serviços', 'Portfólio', 'Contato', 'Carreiras'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 text-sm font-bold uppercase tracking-[3px] hover:text-[#00d4ff] hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.5)] transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Linha Inferior: Redes e Copyright */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-5 h-5 bg-white/5 rounded-md flex items-center justify-center group-hover:bg-[#0056b3] transition-all">in</span>
              LinkedIn
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-5 h-5 bg-white/5 rounded-md flex items-center justify-center group-hover:bg-[#e1306c] transition-all">ig</span>
              Instagram
            </a>
          </div>

          <p className="text-gray-600 text-xs font-medium tracking-[2px]">
            © {currentYear} // NXT BRASIL // NEXT GENERATION SYSTEMS
          </p>
        </div>
      </div>
    </footer>
  );
}