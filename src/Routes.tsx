import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from "react"

import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'

import { Home } from './pages/Home'
import { Historia } from './pages/Historia'
import { Grs } from './pages/Grs'
import { Agenda } from './pages/Agenda'


function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/grs" element={<Grs />} />
          <Route path="/agenda" element={<Agenda />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
