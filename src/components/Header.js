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
            Hi there! I'm <b>Ian</b>, a passionate frontend developer and tech
            enthusiast from Argentina. This is my digital showroom, where I
            showcase some of my most interesting development projects. I'm
            excited to share them with you and I hope you enjoy your visit!
          </section>
        </div>
      </div>
    </>
  )
}

export default Header
