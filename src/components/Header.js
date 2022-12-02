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
            My name is <b>Ian</b> and I'm a Frontend Developer and an open
            source lover from Argentina 🇦🇷 <br />
            This is my digital garden, where I write about the things I'm
            working on and share what I've learned. 😊
          </section>
        </div>
      </div>
    </>
  )
}

export default Header
