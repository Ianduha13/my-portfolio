import { useNavigate } from "react-router-dom"
import "../styles/highlights.css"
const Highlights = () => {
  const navigate = useNavigate()
  return (
    <div className='highlights-container'>
      <section className='highlights'>
        <p>Know me more!</p>
        <ul>
          <li onClick={() => navigate("./stack")}>Tech Stack</li>
          <li>
            <a
              href='https://github.com/Ianduha13?tab=repositories'
              target={"_blank"}
              rel='noreferrer'
            >
              Live/Local Github Repos
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/ian-duhamel/'
              target={"_blank"}
              rel='noreferrer'
            >
              LinkedIn Page
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
export default Highlights
