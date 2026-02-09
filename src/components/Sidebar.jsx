export default function Sidebar() {
  return (
    <aside className="w-64 bg-secondary text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Minha App</h2>

      <nav className="space-y-3">
        <a className="block px-3 py-2 rounded hover:bg-white/10" href="#">
          Dashboard
        </a>
        <a className="block px-3 py-2 rounded hover:bg-white/10" href="#">
          Usuários
        </a>
        <a className="block px-3 py-2 rounded hover:bg-white/10" href="#">
          Configurações
        </a>
      </nav>
    </aside>
  )
}
