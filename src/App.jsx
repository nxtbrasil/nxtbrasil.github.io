
import Menu from './components/Menu'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import Servicos from './pages/Servicos'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'

export default function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/fale-conosco" element={<Contato />} />
      </Routes>
    </>
  )
}
