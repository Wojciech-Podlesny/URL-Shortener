import './Pricing.css'

const Pricing = () => {
	const plans = [
		{ name: 'Basic', price: 'Free', features: ['Max 1000 links', 'Link expiration in 30 days', 'Basic analytics'] },
		{ name: 'Pro', price: '$9.99/month', features: ['Unlimited links', 'Custom domains', 'Advanced analytics'] },
		{
			name: 'Enterprise',
			price: 'Contact us',
			features: ['Dedicated support', 'Custom integrations', 'SLA & uptime guarantees'],
		},
	]

	return (
		<div className='pricing-container'>
			<h1>Our Pricing Plans</h1>
			<div className='plans'>
				{plans.map(plan => (
					<div key={plan.name} className='plan'>
						<h2>{plan.name}</h2>
						<h3>{plan.price}</h3>
						<ul>
							{plan.features.map(feature => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}

export default Pricing
