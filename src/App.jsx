import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from './components/Services'
import AboutSection from "./components/AboutSection"
import LatestProjects from "./components/LatestProjects"
import ClientLogos from "./components/ClientLogos"
import AuthorityAndFaq from "./components/AuthorityAndFaq"
import Footer from "./components/Footer"
import WhatsAppFlutuante from "./components/WhatsAppFlutuante"

export default function App() {
  return (
    <>
      <Header />
      
      {/* ESPAÇADOR PARA O CONTEÚDO NÃO FICAR ATRÁS DO MENU */}
      <div className="h-20 md:h-24 w-full bg-white" />

      <Hero />
      <Services />
      <AboutSection />
      <LatestProjects />
      <ClientLogos/>
      <AuthorityAndFaq />
      <Footer />
      <WhatsAppFlutuante />
    </>
  )
}