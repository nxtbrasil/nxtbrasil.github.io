import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">NXT</div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quem-somos">Quem Somos</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
      </div>
    </header>
  )
}
