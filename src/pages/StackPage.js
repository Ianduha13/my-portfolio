import TechCard from "../components/TechCard"
import {
	SiJavascript,
	SiCss3,
	SiReact,
	SiHtml5,
	SiReactrouter,
	SiTailwindcss,
	SiTypescript,
	SiRedux,
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import "../styles/stack.css"
const StackPage = () => {
	const technologies = [
		{
			technologie: "React",
			usecase: "Frontend Web Development",
			icon: <SiReact color='#42a5f5 ' size='1.75em' />,
		},
		{
			technologie: "Javascript",
			usecase: "Frontend Web Development",
			icon: <SiJavascript color='#F0DB4F' size='1.75em' />,
		},
		{
			technologie: "CSS",
			usecase: "Frontend Web Design",
			icon: <SiCss3 color='#2962ff ' size='1.75em' />,
		},
		{
			technologie: "HTML 5",
			usecase: "Structure",
			icon: <SiHtml5 size='1.75em' color='#e34c26' />,
		},
		{
			technologie: "React Router V6",
			usecase: "Frontend UI Routing",
			icon: <SiReactrouter size='2em' color='darkgrey' />,
		},
		{
			technologie: "Redux",
			usecase: "State Management",
			icon: <SiRedux size='2em' color='#712cf9' />,
		},
		{
			technologie: "TailwindCSS",
			usecase: "CSS Framework",
			icon: <SiTailwindcss size='2em' color='#36B7F0' />,
		},
		{
			technologie: "Typescript",
			usecase: "Strong typing on JavaScript",
			icon: <SiTypescript size='2em' color='007acc' />,
		},
		{
			technologie: "Next.js",
			usecase: "Currently learning",
			icon: <TbBrandNextjs size='2em' color='var(--primary-color)' />,
		},
	]
	return (
		<section className='tech-section'>
			<header className='tech-header'>Tech Stack</header>
			<p className='tech-description'>
				A list of my favorite tools and technologies that I use on a regular
				day.
			</p>
			<div className='tech-card-container'>
				{technologies.map((x, i) => (
					<TechCard
						technologie={x.technologie}
						usecase={x.usecase}
						icon={x.icon}
						key={i}
					/>
				))}
			</div>
		</section>
	)
}

export default StackPage
