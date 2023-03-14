import TinyCard from "./TinyCard"

const ProjectCard = ({ url, title, technologies, description }) => {
	return (
		<a href={url} target='_blank' rel='noreferrer' className='project-card'>
			<h4>{title}</h4>
			<div className='card-group'>
				{technologies.map((x, i) => (
					<TinyCard technology={x} color={x} key={i} />
				))}
			</div>
			<p>{description}</p>
		</a>
	)
}

export default ProjectCard
