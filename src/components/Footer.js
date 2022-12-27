import "../styles/footer.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = ({ theme }) => {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<div className='footer-left'>Designed by: Ian Duhamel 2022</div>
				<div className='footer-right'>
					<a
						className='footer-btn'
						href='https://github.com/Ianduha13?tab=repositories'
						target={"_blank"}
						rel='noreferrer'
					>
						{theme === "light" ? (
							<FaGithub size='1.2em' color='black' />
						) : (
							<FaGithub size='1.2em' color='white' />
						)}
					</a>
					<a
						className='footer-btn'
						href='https://github.com/Ianduha13?tab=repositories'
						target={"_blank"}
						rel='noreferrer'
					>
						{theme === "light" ? (
							<FaLinkedin size='1.2em' color='black' />
						) : (
							<FaLinkedin size='1.2em' color='white' />
						)}
					</a>
				</div>
			</div>
		</footer>
	)
}
export default Footer
