import Header from "../components/Header"
import Highlights from "../components/Highlights"
import Projects from "../components/Projects"
import "../styles/landing.css"

const LandingPage = ({ theme }) => {
  return (
    <section className='landing-page'>
      <Header />
      <Highlights />
      <Projects theme={theme} />
    </section>
  )
}

export default LandingPage
