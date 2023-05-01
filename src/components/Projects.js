import "../styles/projects.css"
import ProjectCard from "./ProjectCard"

const Projects = () => {
	const projects = [
		{
			url: "https://my-google-delta.vercel.app/",
			title: "Google Clone",
			technologies: ["Next", "TailwindCSS", "React"],
			description:
				"I was learning Next.js 13 while I finished doing an amazing project based on the most used search engine of the world. I made the whole desing with Tailwind CSS and implemented the Custom Search API made by Google",
		},
		{
			url: "https://www.devink.dev/",
			title: "Devink",
			technologies: ["TailwindCSS", "Redux", "React"],
			description:
				"I am excited to share my first freelance project: a landing page for a Data Science company. I used React for the interactive elements of the page, and TailwindCSS for the styling and animations. It has a headless CMS integrated made by Strapi.",
		},
		{
			url: "https://code-ecommerce.vercel.app/",
			title: "Code Commerce",
			technologies: ["React", "Redux", "React-Router"],
			description:
				"In this project, is interesting how I implemented Redux in a way that ensures efficient data management and seamless updates to the UI complemented by React Router.",
		},
		{
			url: "https://ai-img-generator.vercel.app/",
			title: "Img IA Generator",
			technologies: ["React", "Express", "CSS"],
			description:
				"I developed an image generator app using React.js, Express, and the Dalle-2 API. It's a user-friendly and powerful tool that allows you to easily create unique images with just a few clicks.",
		},
	]
	return (
		<section className='projects-section'>
			<header className='project-header'>Projects</header>
			{projects.map((x, i) => (
				<ProjectCard
					url={x.url}
					title={x.title}
					key={i}
					technologies={x.technologies}
					description={x.description}
				/>
			))}
		</section>
	)
}

export default Projects
