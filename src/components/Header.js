import React from "react"
import logo from "../img/logo512.png"
import "../styles/header.css"

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <header className='header'>Hello!!👋🏻</header>
      </div>
      <div className='header-container'>
        <div className='presentation-container'>
          <div className='img'>
            <img src={logo} alt='logo' />
          </div>
          <section className='presentation'>
            My name is <b>Ian</b>, I'm a Frontend Developer and a technology
            lover from Argentina 🇦🇷 <br />
            This is my digital showroom, where I show my most interesting
            development proyects.
          </section>
        </div>
      </div>
    </>
  )
}

export default Header
