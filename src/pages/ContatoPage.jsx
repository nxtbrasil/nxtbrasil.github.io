import React from "react";
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContatoPage() {
  const contatos = [
    {
      title: "WhatsApp",
      value: "(11) 94539-1475",
      desc: "Resposta imediata para orçamentos e dúvidas rápidas.",
      icon: <MessageCircle className="w-8 h-8" />,
      link: "https://wa.me/5511945391475", // Insira o link real aqui
      color: "bg-green-500",
      btnText: "Iniciar conversa"
    },
    {
      title: "Telefone",
      value: "(11) 94539-1475",
      desc: "Fale diretamente com um de nossos consultores de tecnologia.",
      icon: <Phone className="w-8 h-8" />,
      link: "tel:+5511945391475",
      color: "bg-[#0056b3]",
      btnText: "Ligar agora"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00d4ff]/10 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#00d4ff] font-bold tracking-widest uppercase text-sm font-mono">Canais de Atendimento</span>
          <h1 className="text-white text-5xl md:text-8xl font-black mt-4 mb-6 tracking-tighter leading-none">
            Vamos iniciar seu <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0056b3]">próximo projeto?</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Sem formulários extensos. Escolha o canal de sua preferência e fale com a gente agora mesmo.
          </p>
        </div>
      </section>

      {/* CARDS DE CONTATO DIRETO */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {contatos.map((item, index) => (
            <a 
              href={item.link} 
              key={index}
              className="group p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-3xl font-black text-black mb-2">{item.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {item.desc}
              </p>
              <div className="text-2xl font-bold text-black mb-8">
                {item.value}
              </div>
              <div className="flex items-center gap-2 text-[#0056b3] font-black uppercase tracking-widest text-sm">
                {item.btnText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* OUTRAS INFORMAÇÕES */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-[3rem] p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3 text-black font-black uppercase tracking-widest text-xs">
                <Mail className="w-4 h-4 text-[#00d4ff]" /> E-mail
              </div>
              <p className="text-gray-600 font-bold">contato@nxtbrasil.com.br</p>
            </div>

            <div className="space-y-4 border-y md:border-y-0 md:border-x border-gray-200 py-8 md:py-0 md:px-12">
              <div className="flex items-center justify-center md:justify-start gap-3 text-black font-black uppercase tracking-widest text-xs">
                <Clock className="w-4 h-4 text-[#00d4ff]" /> Horário
              </div>
              <p className="text-gray-600">Segunda a Sexta<br /><strong>09:00 — 18:00</strong></p>
            </div>


          </div>
        </div>
      </section>

      {/* MAPA OU IMAGEM CONCEITUAL */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="h-64 md:h-96 w-full rounded-[3rem] overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
           <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Escritório NXT" 
            className="w-full h-full object-cover"
           />
        </div>
      </div>
    </div>
  );
}