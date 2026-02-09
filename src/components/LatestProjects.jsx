import React, { useEffect } from 'react';

export default function LatestProjects() {
    useEffect(() => {
        // Inicializa o Swiper (Certifique-se de ter o script do Swiper no seu index.html)
        if (window.Swiper) {
            new window.Swiper('.projects-slider', {
                slidesPerView: 1.2,
                spaceBetween: 30,
                grabCursor: true,
                centeredSlides: false,
                breakpoints: {
                    768: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 2.5 },
                },
                navigation: {
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                },
            });
        }
    }, []);

    const projects = [
        {
            title: "Sleep House Marechal",
            category: "E-commerce & Varejo",
            image: "https://images.unsplash.com/photo-1505693419148-ad3035ce612d?auto=format&fit=crop&q=80&w=800",
            link: "https://sleephousemarechal.com.br/"
        },
        {
            title: "Star Tools Ferramentas",
            category: "Soluções Industriais",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
            link: "https://startoolsferramentas.com.br/"
        },
        {
            title: "Sistema ERP Customizado",
            category: "Gestão de Sistemas",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            link: "#"
        },
        {
            title: "Portal de Agendamento",
            category: "Web App",
            image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800",
            link: "#"
        }
    ];

    return (
        <section className="bg-white py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">

                {/* Cabeçalho com Navegação */}
                <div className="flex flex-col items-center text-center mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h4 className="text-[#0056b3] font-bold tracking-[4px] uppercase text-sm mb-4">
      // Portfólio em Destaque
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
                            Transformando Ideias em <br />
                            <span className="text-[#0056b3]">Resultados Digitais.</span>
                        </h2>
                    </div>

                    {/* Botões de Navegação centralizados abaixo do título */}
                    <div className="flex gap-4">
                        <button className="swiper-button-prev-custom w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-[#0056b3] hover:border-[#0056b3] hover:text-white transition-all group">
                            <span className="text-xl">←</span>
                        </button>
                        <button className="swiper-button-next-custom w-14 h-14 rounded-full bg-[#0056b3] text-white flex items-center justify-center hover:bg-[#004494] transition-all shadow-lg shadow-blue-500/20">
                            <span className="text-xl">→</span>
                        </button>
                    </div>
                </div>

                {/* Slider Lateral */}
                <div className="swiper projects-slider !overflow-visible">
                    <div className="swiper-wrapper">
                        {projects.map((proj, index) => (
                            <div key={index} className="swiper-slide group">
                                <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                                    {/* Imagem */}
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />

                                    {/* Overlay Gradiente Moderno */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent opacity-80"></div>

                                    {/* Conteúdo do Card */}
                                    <div className="absolute bottom-0 left-0 p-12 w-full">
                                        <span className="text-blue-400 font-bold text-xs uppercase tracking-[3px] mb-3 block">
                                            {proj.category}
                                        </span>
                                        <h3 className="text-white text-3xl font-black mb-6 leading-tight">
                                            {proj.title}
                                        </h3>
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-wider group/link"
                                        >
                                            <span>Visitar Projeto</span>
                                            <div className="w-8 h-[2px] bg-blue-500 transition-all group-hover/link:w-12"></div>
                                        </a>
                                    </div>

                                    {/* Número Conceitual (01, 02...) */}
                                    <div className="absolute top-10 right-10 text-white/10 text-6xl font-black italic select-none">
                                        0{index + 1}
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