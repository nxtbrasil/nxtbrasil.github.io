import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe apenas estes dois
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from './components/Services';
import QuemSomos from "./pages/QuemSomos";
import ServicosPage from "./pages/ServicosPage";
import CasesPage from "./pages/CasesPage";
import ContatoPage from "./pages/ContatoPage";
import LatestProjects from "./components/LatestProjects";
import ClientLogos from "./components/ClientLogos";
import AuthorityAndFaq from "./components/AuthorityAndFaq";
import Footer from "./components/Footer";
import WhatsAppFlutuante from "./components/WhatsAppFlutuante";
import TechStack from "./components/ui/TechStack";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          {/* TUDO QUE É DA HOME FICA AQUI */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <LatestProjects />
              <TechStack />
              <AuthorityAndFaq />
            </>
          } />

          {/* PÁGINAS INTERNAS ISOLADAS */}
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}