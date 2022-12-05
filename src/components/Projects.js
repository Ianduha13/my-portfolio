import "../styles/projects.css"
import TinyCard from "./TinyCard"
const Projects = () => {
  return (
    <section className='projects-section'>
      <header className='project-header'>Projects</header>
      <a
        href='https://tesla-landingpage-ianduhamel.vercel.app/'
        target={"_blank"}
        rel='noreferrer'
        className='project-card'
      >
        <h4>Tesla Landing Page Clon</h4>
        <div className='card-group'>
          <TinyCard technology={"React"} color={"react"} />
          <TinyCard technology={"CSS"} color={"css"} />
          <TinyCard technology={"Javascript"} color={"javascript"} />
        </div>
        <p>
          Tesla is a great car brand with beatiful desings, and i found a very
          interesting challenge making a clon of tesla.com only with JS CSS and
          React
        </p>
      </a>
      <a
        href='https://my-portfolio-eta-bice.vercel.app/'
        target={"_blank"}
        rel='noreferrer'
        className='project-card'
      >
        <h4>My Portfolio</h4>
        <div className='card-group'>
          <TinyCard technology={"React"} color={"react"} />
          <TinyCard technology={"CSS"} color={"css"} />
          <TinyCard technology={"React Router"} color={"react-router"} />
        </div>
        <p>
          I done my Portfolio with great practices. Its an SPA by react-router,
          and all the styling and animations were made by CSS.
        </p>
      </a>
      <a
        href='https://my-portfolio-eta-bice.vercel.app/'
        target={"_blank"}
        rel='noreferrer'
        className='project-card'
      >
        <h4>My Portfolio</h4>
        <div className='card-group'>
          <TinyCard technology={"React"} color={"react"} />
          <TinyCard technology={"CSS"} color={"css"} />
          <TinyCard technology={"React Router"} color={"react-router"} />
        </div>
        <p>
          I done my Portfolio with great practices. Its an SPA by react-router,
          and all the styling and animations where made by CSS.
        </p>
      </a>
    </section>
  )
}

export default Projects
