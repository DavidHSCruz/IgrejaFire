import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react"

import { NavBar } from './components/NavBar/NavBar'
import { NavBarMobile } from './components/NavBarMobile/NavBarMobile'
import { Footer } from './components/Footer/Footer'

import { Home } from './pages/Home'
import { Historia } from './pages/Historia'
import { Grs } from './pages/Grs'


function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function SelectNavBar(setWidth: (width: number) => void) {
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [setWidth])
}

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  SelectNavBar(setWidth)

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        {
          width >= 768 ? <NavBar /> : <NavBarMobile />
        }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/grs" element={<Grs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
