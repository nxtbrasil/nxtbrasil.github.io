import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Monitora o scroll para mudar o fundo do menu
  useEffect(() => {
    const handleScroll = () => {
      // Se rolar mais de 50px, ativa o estado 'isScrolled'
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLink = "text-[#0056b3] font-bold relative md:after:content-[''] md:after:absolute md:after:-bottom-[24px] md:after:left-0 md:after:w-full md:after:h-[3px] md:after:bg-[#0056b3]";
  const normalLink = "text-gray-800 hover:text-[#0056b3] font-semibold transition-all duration-300";

  return (
    <header 
      className={`fixed top-0 w-full z-[999] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-black tracking-tighter flex items-center z-[1001]">
          <span className="text-[#0056b3]">NXT</span>
          <span className={`${isScrolled ? 'text-black' : 'text-[#1a1a1a]'} transition-colors`}>Brasil</span>
        </div>

        {/* Menu Desktop - Visível apenas em telas grandes (md:) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink>
          <NavLink to="/servicos" className={normalLink}>Serviços</NavLink>
          <NavLink to="/portfolio" className={normalLink}>Portfólio</NavLink>
          <NavLink to="/contato" className={normalLink}>Contato</NavLink>
        </nav>

        {/* Lado Direito */}
        <div className="flex items-center gap-5 z-[1001]">
          <button className="hidden sm:block bg-[#0056b3] text-white px-8 py-2.5 rounded-full font-bold hover:bg-[#004494] transition-all shadow-md active:scale-95">
            Login
          </button>

          {/* Botão Hambúrguer - Visível apenas em telas pequenas (md:hidden) */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`h-0.5 w-6 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Menu Mobile - Tela Cheia (Overlay) */}
      <div className={`md:hidden fixed inset-0 bg-white z-[1000] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Home</NavLink>
        <NavLink to="/servicos" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Serviços</NavLink>
        <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Portfólio</NavLink>
        <NavLink to="/contato" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Contato</NavLink>
        <button className="bg-[#0056b3] text-white px-12 py-4 rounded-full font-bold text-xl mt-4">Login</button>
      </div>
    </header>
  );
}