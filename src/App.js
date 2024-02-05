import Header from "./components/header"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Banner from "./components/banner"
import Portfolio from "./components/portfolio"
import Profile from "./components/profile"
import Navigation from "./components/navigation"
import Footer from "./components/footer"

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Profile />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
