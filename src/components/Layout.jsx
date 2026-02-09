import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 bg-gray-100 dark:bg-background">
          {children}
        </main>
      </div>
    </div>
  )
}
