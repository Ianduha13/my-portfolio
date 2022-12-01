import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import StackPage from "./pages/StackPage"
import LandingPage from "./pages/LandingPage"

function App() {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} onClick={toggleTheme} />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/stack' element={<StackPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
