import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import StackPage from "./pages/StackPage"
import LandingPage from "./pages/LandingPage"

function App() {
  const [theme, setTheme] = useState("dark")
  const handleTheme = () => {
    const newTheme = () => (theme === "dark" ? "light" : "dark")
    setTheme(newTheme)
  }
  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} handleTheme={handleTheme} />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/stack' element={<StackPage />} />
        </Routes>
      </BrowserRouter>
      <Footer theme={theme} />
    </div>
  )
}

export default App
