const TechCard = ({ technologie, usecase, icon }) => {
	return (
		<div className='tech-card'>
			<div className={`img-container`}>{icon}</div>
			<div className='text-container'>
				<h4>{technologie}</h4>
				<p>{usecase}</p>
			</div>
		</div>
	)
}
export default TechCard
