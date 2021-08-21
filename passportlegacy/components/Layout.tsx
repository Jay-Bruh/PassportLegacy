import Navbar from './nav.tsx'
import Footer from "./footer.tsx";

export default function Layout({ children }) {
  return (
    <>
      
      <main style={{paddingTop:"80px"}}>{children}</main>
      <Navbar />
      <Footer />
    </>
  )
}