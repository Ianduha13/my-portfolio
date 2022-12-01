import React from "react"
import "../styles/header.css"

const Header = () => {
  return (
    <>
      <header className='header'>Hello!!👋🏻</header>
      <div className='presentation-container'>
        <div className='img'>img</div>
        <section className='presentation'>
          My name is Ian and I'm a Junior Frontend Developer and an open source
          lover from Argentina 🇦🇷 This is my digital garden, where I write about
          the things I'm working on and share what I've learned. 😊
        </section>
      </div>
      <div className='highlights-container'>
        <section className='highlights'>
          Highlights
          <ul>
            <li>Live/Local Github Repos</li>
            <li>NEW Story page </li>
            <li>Tech Stack</li>
            <li>Achievements</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Header
