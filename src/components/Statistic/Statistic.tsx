import brand from '../../assets/images/icon-brand-recognition.svg'
import record from '../../assets/images/icon-detailed-records.svg'
import customizable from '../../assets/images/icon-fully-customizable.svg'
import './Statistic.css'

const Statistic = () => {
	return (
		<div className='statistic'>
			<div className='container'>
				<h2 className='statistic-title'>Advanced Statistics</h2>
				<p className='statistic-text'>
					Track how your links are performing across the web with our <br />
					advanced statistics dashboard.
				</p>
				<div className='sections'>
					<div className='section-first'>
						<div className='card-first'>
							<div className='card-icon'>
								<img className='card-image' src={brand} alt='logo' />
							</div>
							<h3 className='card-title'>Brand Recognition</h3>
							<p className='card-text'>
								Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help
								instil confidence in your content.
							</p>
						</div>
					</div>

					<div className='section-second'>
						<div className='card-second'>
							<div className='card-icon'>
								<img className='card-image' src={record} alt='logo' />
							</div>
							<h3 className='card-title'>Detailed Records</h3>
							<p className='card-text'>
								Gain insights into who is clicking your links. Knowing when and where people engage with your content
								helps inform better decisions.
							</p>
						</div>
						<hr className='outline' />
					</div>

					<div className='section-third'>
						<div className='card-third'>
							<div className='card-icon'>
								<img className='card-image' src={customizable} alt='logo' />
							</div>
							<h3 className='card-title'>Fully Customizable</h3>
							<p className='card-text'>
								Improve brand awareness and content discoverability through customizable links, supercharging audience
								engagement.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Statistic
