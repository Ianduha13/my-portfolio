import "../styles/navbar.css"
import { FaMoon, FaSun, FaGithub } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Navbar = ({ theme, onClick }) => {
  const navigate = useNavigate()
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-left'>
          <ul>
            <li className='image'>
              <button
                className='navbar-btn left-btn'
                onClick={() => navigate("/")}
              >
                img
              </button>
            </li>
            <li className='about'>
              <button
                className='navbar-btn left-btn'
                onClick={() => navigate("/about")}
              >
                About
              </button>
            </li>
            <li className='links'>
              <button className='navbar-btn left-btn'>Links</button>
            </li>
          </ul>
        </div>
        <div className='navbar-right'>
          <button className='navbar-btn'>
            {theme === "light" ? (
              <FaGithub size='1.2em' />
            ) : (
              <FaGithub size='1.2em' color='white' />
            )}
          </button>
          <button className='navbar-btn' onClick={() => onClick()}>
            {theme === "light" ? (
              <FaMoon size='1.2em' />
            ) : (
              <FaSun size='1.2em' color='white' />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
