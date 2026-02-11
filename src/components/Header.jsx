import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'unset';
    }, [open]);

    // FUNÇÃO DE TRADUÇÃO ROBUSTA
    const handleTranslate = (lang) => {
        // 1. Define o cookie de tradução (O Google lê esse padrão)
        // Formato: /idioma_origem/idioma_destino
        document.cookie = `googtrans=/pt/${lang}; path=/`;
        document.cookie = `googtrans=/pt/${lang}; domain=${window.location.hostname}; path=/`;

        // 2. Recarrega a página para aplicar a tradução globalmente
        window.location.reload();

        if (open) setOpen(false);
    };

    const headerStyle = scrolled
        ? "bg-black/80 backdrop-blur-md shadow-2xl border-b border-white/10"
        : "bg-white border-b border-transparent";

    const textStyle = scrolled ? "text-white" : "text-black";

    const linkBase = `relative transition-all duration-300 font-semibold text-sm lg:text-base hover:opacity-70 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#00d4ff] after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full ${textStyle}`;

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-[120] h-20 flex items-center transition-all duration-500 ${headerStyle}`}>
                <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

                    <a href="#home" className="flex items-center gap-2 group cursor-pointer no-underline z-[130]">
                        <span className={`text-3xl font-black tracking-tighter transition-colors duration-500 ${textStyle}`}>
                            NXT <span className="text-[#0056b3]">Brasil</span>
                        </span>
                        <div className="w-2.5 h-2.5 bg-[#00d4ff] rounded-full mt-2 animate-pulse shadow-[0_0_15px_#00d4ff]"></div>
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className={linkBase}>Home</Link>
                        <Link to="/quem-somos" className={linkBase}>Quem Somos</Link>
                        <Link to="/servicos" className={linkBase}>Serviços</Link>
                         <Link to="/cases" className={linkBase}>Cases</Link>
                         <Link to="/contato" className={linkBase}>Contato</Link>

                        {/* BOTÕES DE IDIOMA */}
                        <div className="flex items-center gap-3 ml-4 border-l border-gray-500/30 pl-6">
                            <button
                                onClick={() => handleTranslate('en')}
                                className={`${textStyle} text-xs font-bold hover:text-[#00d4ff] transition-all hover:scale-110`}
                            >
                                EN
                            </button>
                            <span className={`${textStyle} opacity-30 text-[10px]`}>|</span>
                            <button
                                onClick={() => handleTranslate('pt')}
                                className={`${textStyle} text-xs font-bold hover:text-[#00d4ff] transition-all hover:scale-110`}
                            >
                                PT
                            </button>
                        </div>
                    </nav>

                    <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2 z-[130] relative">
                        <div className={`w-6 h-0.5 transition-all duration-300 ${scrolled || open ? 'bg-white' : 'bg-black'} ${open ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-6 h-0.5 transition-all duration-300 ${scrolled || open ? 'bg-white' : 'bg-black'} ${open ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 transition-all duration-300 ${scrolled || open ? 'bg-white' : 'bg-black'} ${open ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                </div>
            </header>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[110] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible translate-y-full"
                }`}>
                <a href="#home" onClick={() => setOpen(false)} className="text-white text-3xl font-black">Home</a>
                <a href="#sobre" onClick={() => setOpen(false)} className="text-white text-3xl font-black">Quem Somos</a>        <a href="#servicos" onClick={() => setOpen(false)} className="text-white text-3xl font-black">Serviços</a>
                <a href="#cases" onClick={() => setOpen(false)} className="text-white text-3xl font-black">Cases</a>
                <a href="#contato" onClick={() => setOpen(false)} className="text-white text-3xl font-black">Contato</a>

                <div className="flex gap-8 mt-4 pt-8 border-t border-white/10 w-2/3 justify-center">
                    <button onClick={() => handleTranslate('en')} className="text-white font-bold text-xl">English</button>
                    <button onClick={() => handleTranslate('pt')} className="text-white font-bold text-xl">Português</button>
                </div>
            </div>
        </>
    );
}