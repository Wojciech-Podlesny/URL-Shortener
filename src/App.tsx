import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ShortenLink from './components/ShortenLink/ShortenLink'
import Footer from './components/Footer/Footer'
import Statistic from './components/Statistic/Statistic'
import Newsletter from './components/Newsletter/Newsletter'
import NotFound from './pages/NotFound'

const Pricing = lazy(() => import('./pages/Pricing'))
const Resources= lazy(() => import('./pages/Resources')) 
const Features= lazy(() => import('./pages/Features')) 

const App = () => {
	return (
		<div>
			<Router>
				<Suspense fallback = {<p>Loading ...</p>}>
				<Header />
				<Hero />
				<Routes>
						<Route path='/' element={<ShortenLink />} Component={ShortenLink} />
						<Route path='/pricing' element={<Pricing />} Component={Pricing} />
						<Route path='/features' element={<Features />} Component={Features} />
						<Route path='/resources' element={<Resources />} Component={Resources} />
						<Route path='*' element={<NotFound />} Component={NotFound} />
				</Routes>
				<Statistic />
				<Newsletter />
				<Footer />
				</Suspense>
			</Router>
		</div>
	)
}

export default App
