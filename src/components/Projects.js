import "../styles/projects.css"
import TinyCard from "./TinyCard"
const Projects = () => {
	return (
		<section className='projects-section'>
			<header className='project-header'>Projects</header>
			<a
				href='https://code-ecommerce.vercel.app/'
				target={"_blank"}
				rel='noreferrer'
				className='project-card'
			>
				<h4>Code Commerce</h4>
				<div className='card-group'>
					<TinyCard technology={"Redux"} color={"redux"} />
					<TinyCard technology={"React"} color={"react"} />
					<TinyCard technology={"React Router"} color={"react-router"} />
				</div>
				<p>
					I built a marketplace using Redux and React Router to create a
					single-page application. I implemented Redux in a way that ensures
					efficient data management and seamless updates to the UI. The process
					of building this project was enjoyable and rewarding, and I now have a
					greater desire to improve my skills in state management.
				</p>
			</a>

			<a
				href='https://ai-img-generator.vercel.app/'
				target={"_blank"}
				rel='noreferrer'
				className='project-card'
			>
				<h4>Img IA Generator</h4>
				<div className='card-group'>
					<TinyCard technology={"React"} color={"react"} />
					<TinyCard technology={"CSS"} color={"css"} />
					<TinyCard technology={"Express"} color={"express"} />
				</div>
				<p>
					I developed an image generator app using React.js, Express, and the
					Dalle-2 API. It's a user-friendly and powerful tool that allows you to
					easily create unique images with just a few clicks.
				</p>
			</a>
			<a
				href='https://monkeys.vercel.app/'
				target={"_blank"}
				rel='noreferrer'
				className='project-card'
			>
				<h4>Monkey NFT Landing Page (in depth)</h4>
				<div className='card-group'>
					<TinyCard technology={"React"} color={"react"} />
					<TinyCard technology={"CSS"} color={"css"} />
				</div>
				<p>
					I am excited to share my latest project: a landing page inspired by a
					beautiful UI design from Figma. My goal for this project was to learn
					how to use React and CSS to recreate the desired effects and bring the
					design to life. The design inspiration for this project came from
					<a
						href='https://www.figma.com/community/file/1185001333927027235'
						target={"_blank"}
						rel='noreferrer'
					>
						&nbsp;HERE
					</a>
					. I used React for the interactive elements of the page, such as the
					carousel, and CSS for the styling and animations.
				</p>
			</a>
			<a
				href='https://typing-practice-ianduhamel.vercel.app/'
				target={"_blank"}
				rel='noreferrer'
				className='project-card'
			>
				<h4>Typing Practice App</h4>
				<div className='card-group'>
					<TinyCard technology={"Javascript"} color={"javascript"} />
					<TinyCard technology={"React"} color={"react"} />
				</div>
				<p>
					I developed a keyboard typing practice app using React.js, Javascript,
					and CSS. This app is designed to help users improve their typing
					speed, and it also allows users to share their results with their
					friends. I really enjoyed working on this project and had a lot of fun
					bringing it to life.
				</p>
			</a>
		</section>
	)
}

export default Projects
