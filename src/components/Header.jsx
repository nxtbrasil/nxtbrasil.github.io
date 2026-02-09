import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Classe para os links do menu desktop
  const linkBase = "text-gray-700 hover:text-[#0056b3] transition-all duration-300 font-semibold";

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-[100] h-20 flex items-center border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          
          {/* LOGO COM EFEITO GLOW (NXT em Preto) */}
          <NavLink to="/" className="flex items-center gap-2 group cursor-pointer no-underline">
            <span className="text-3xl font-black tracking-tighter text-black transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(0,86,179,0.4)]">
              NXT <span className="text-[#0056b3]">Brasil</span>
            </span>
            {/* Bolinha Pulsante */}
            <div className="w-2.5 h-2.5 bg-[#00d4ff] rounded-full mt-2 animate-pulse shadow-[0_0_15px_#00d4ff]"></div>
          </NavLink>

          {/* MENU DESKTOP - Visível apenas em Telas Médias/Grandes */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : linkBase}>Home</NavLink>
            <NavLink to="/servicos" className={({ isActive }) => isActive ? "nav-active" : linkBase}>Serviços</NavLink>
            <NavLink to="/contato" className={({ isActive }) => isActive ? "nav-active" : linkBase}>Contato</NavLink>
            
            <button className="bg-[#0056b3] text-white px-6 py-2 rounded-lg font-bold ml-4 hover:bg-[#004494] transition-all active:scale-95 shadow-md hover:shadow-[#0056b3]/30">
              Login
            </button>
          </nav>

          {/* BOTÃO HAMBÚRGUER (Mobile) - Fica preto para aparecer no fundo branco */}
          <button 
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[110]"
          >
            <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${open ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </header>

      {/* MENU MOBILE OVERLAY */}
      <div className={`fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}>
        <NavLink to="/" onClick={() => setOpen(false)} className="text-gray-900 text-3xl font-bold">Home</NavLink>
        <NavLink to="/servicos" onClick={() => setOpen(false)} className="text-gray-900 text-3xl font-bold">Serviços</NavLink>
        <NavLink to="/contato" onClick={() => setOpen(false)} className="text-gray-900 text-3xl font-bold">Contato</NavLink>
        <button className="bg-[#0056b3] text-white px-10 py-4 rounded-full text-xl font-bold">Login</button>
      </div>

      {/* Espaçador para o conteúdo abaixo não "colar" no topo */}
      <div className="h-20" />
    </>
  );
}