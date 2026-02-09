import React from 'react';
import { MessageCircle } from 'lucide-react'; // Ícone de balão de conversa

export default function WhatsAppFlutuante() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Vim pelo site e gostaria de mais informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip que aparece no hover */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Fale conosco
      </span>

      {/* Ícone */}
      <MessageCircle size={32} fill="currentColor" className="text-white" />
      
      {/* Efeito de Pulse (Opcional, para atrair o olhar) */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </a>
  );
}