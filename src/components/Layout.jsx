import Menu from './Menu'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}
