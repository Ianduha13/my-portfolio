import { useState } from "react"
import "../styles/navbar.css"
import { FaMoon, FaSun, FaGithub } from "react-icons/fa"

const Navbar = () => {
  const [light, setLight] = useState(true)
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <div className='image'>img</div>
        <div className='about'>About</div>
        <div className='links'>Links</div>
      </div>
      <div className='navbar-right'>
        <button className='navbar-btn'>
          {light ? <FaGithub /> : <FaGithub color='white' />}
        </button>
        <button className='navbar-btn' onClick={() => setLight(!light)}>
          {light ? <FaMoon /> : <FaSun color='white' />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
