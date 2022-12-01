import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"

function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
    console.log(`toggle state change ${theme}`)
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} onClick={toggleTheme} />
      <Header />
    </div>
  )
}

export default App
