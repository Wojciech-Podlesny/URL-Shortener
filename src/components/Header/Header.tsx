import { useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'
import { HiBars3 } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Header = () => {
	const [mobile, setMobile] = useState<boolean>(false)

	const toogleMobile = () => {
		setMobile(mobile)
	}

	const closeMobile = () => {
		setMobile(!mobile)
	}

	return (
		<header className='navbar'>
			<div className='container-section'>
				<img className='image' src={logo} alt='logo' />
				<ul className={mobile ? 'nav-link-mobile' : 'nav'} onClick={toogleMobile}>
					<li className='nav-item'>
						<Link to='/' className='nav-link'>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/features' className='nav-link'>
							Features
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/pricing' className='nav-link'>
							Pricing
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/resources' className='nav-link'>
							Resources
						</Link>
					</li>
				</ul>

				<button className='mobile-menu-icon' onClick={closeMobile}>
					{mobile ? <RxCross2 /> : <HiBars3 />}
				</button>
			</div>
		</header>
	)
}

export default Header
