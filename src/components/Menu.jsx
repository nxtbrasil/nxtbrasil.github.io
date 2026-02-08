import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contato">Fale Conosco</Link>
      </nav>
    </header>
  )
}
