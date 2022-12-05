import React from "react"
import "../styles/header.css"

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <header className='header'>Hello!!👋🏻</header>
      </div>
      <div className='header-container'>
        <div className='presentation-container'>
          <div className='img'>img</div>
          <section className='presentation'>
            My name is <b>Ian</b> and I'm a Frontend Developer and an a
            technology lover from Argentina 🇦🇷 <br />
            This is my digital showroom, where I show my most interesting
            development proyects.
          </section>
        </div>
      </div>
    </>
  )
}

export default Header
