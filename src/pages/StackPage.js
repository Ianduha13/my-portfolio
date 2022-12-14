import TechCard from "../components/TechCard"
import {
	SiJavascript,
	SiCss3,
	SiReact,
	SiHtml5,
	SiReactrouter,
	SiExpress,
	SiRedux,
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import "../styles/stack.css"
const StackPage = () => {
	return (
		<section className='tech-section'>
			<header className='tech-header'>Tech Stack</header>
			<p className='tech-description'>
				A list of my favorite tools and technologies that I use on a regular
				day.
			</p>
			<div className='tech-card-container'>
				<TechCard
					technologie='React'
					usecase='Frontend Web Development'
					icon={<SiReact color='#42a5f5 ' size='1.75em' />}
					key={1}
				/>
				<TechCard
					technologie='JavaScript'
					usecase='Frontend Web Development'
					icon={<SiJavascript color='#F0DB4F' size='1.75em' />}
					key={10}
				/>
				<TechCard
					technologie='CSS'
					usecase='Frontend Web Design'
					icon={<SiCss3 color='#2962ff ' size='1.75em' />}
					key={9}
				/>
				<TechCard
					technologie='HTML 5'
					icon={<SiHtml5 size='1.75em' color='#e34c26' />}
					usecase='Structure'
					key={8}
				/>

				<TechCard
					technologie='React Router V6'
					usecase='Frontend UI Routing'
					icon={<SiReactrouter size='2em' color='darkgrey' />}
					key={7}
				/>
				<TechCard
					technologie='Redux'
					usecase='State Management'
					icon={<SiRedux size='2em' color='#712cf9' />}
					key={6}
				/>
				<TechCard
					technologie='Express.js'
					usecase='Serverless Functions'
					icon={<SiExpress size='2em' color='white' />}
					key={11}
				/>

				<TechCard
					technologie='Next.js'
					usecase='Coming Soon...'
					icon={<TbBrandNextjs size='2em' color='var(--primary-color)' />}
					key={6}
				/>
			</div>
		</section>
	)
}

export default StackPage
