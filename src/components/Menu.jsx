
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="menu">
      <h1 className="logo">NXT</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/quem-somos">Quem Somos</NavLink></li>
        <li><NavLink to="/servicos">Serviços</NavLink></li>
        <li><NavLink to="/projetos">Projetos</NavLink></li>
        <li><NavLink to="/fale-conosco">Fale Conosco</NavLink></li>
      </ul>
    </nav>
  )
}
