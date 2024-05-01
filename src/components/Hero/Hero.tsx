import working from '../../assets/images/illustration-working.svg'
import './Hero.css'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='container'>
				<div className='hero-section'>
					<div className='hero-header'>
						<h1 className='hero-title'>More than just shorter links</h1>
						<p className='hero-text'>
							Build your brand's recognition and get detailed insights on how your links are performing.
						</p>
						<button type='submit' className='btn-hero'>Get Started</button>
					</div>
					<div className='hero-image'>
						<img className='hero-img' src={working} alt='hero-image' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
