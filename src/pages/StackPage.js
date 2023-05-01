import TechCard from "../components/TechCard"
import {
	SiJavascript,
	SiCss3,
	SiReact,
	SiHtml5,
	SiTailwindcss,
	SiTypescript,
	SiRedux,
	SiMaterialui,
	SiGraphql,
	SiExpress,
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
			technologie: "Next.js",
			usecase: "React Framework",
			icon: <TbBrandNextjs size='2em' color='var(--primary-color)' />,
		},
		{
			technologie: "CSS",
			usecase: "Frontend Web Design",
			icon: <SiCss3 color='#2962ff ' size='1.75em' />,
		},

		{
			technologie: "Redux",
			usecase: "State Management",
			icon: <SiRedux size='2em' color='#712cf9' />,
		},
		{
			technologie: "GraphQL",
			usecase: "Query Language",
			icon: <SiGraphql size='2em' color='#DE33A6' />,
		},
		{
			technologie: "TailwindCSS",
			usecase: "CSS Framework",
			icon: <SiTailwindcss size='2em' color='#38BDF8' />,
		},
		{
			technologie: "Material-UI",
			usecase: "CSS Framework",
			icon: <SiMaterialui size='2em' color='#0079F2' />,
		},

		{
			technologie: "Typescript",
			usecase: "Strong typing on JavaScript",
			icon: <SiTypescript size='2em' color='007acc' />,
		},
		{
			technologie: "HTML 5",
			usecase: "Structure",
			icon: <SiHtml5 size='1.75em' color='#e34c26' />,
		},

		{
			technologie: "Express.js",
			usecase: "Node Framework",
			icon: <SiExpress size='2em' color='var(--primary-color)' />,
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
