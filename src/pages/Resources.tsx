import './Resources.css'

const Resources = () => {
	return (
		<div className='resources'>
			<h1>Useful Resources for URL Shortening</h1>
			<p>Here are some helpful resources to understand more about URL shortening and how to use it effectively.</p>
			<ul>
				<li>
					<a href='https://en.wikipedia.org/wiki/URL_shortening' target='_blank' rel='noopener noreferrer'>
						What is URL Shortening?
					</a>
				</li>
				<li>
					<a href='https://www.owasp.org/index.php/URL_Redirection' target='_blank' rel='noopener noreferrer'>
						Learn about URL redirection and its security implications
					</a>
				</li>
				<li>
					<a href='https://tools.ietf.org/html/rfc3986' target='_blank' rel='noopener noreferrer'>
						URL Standard (RFC 3986)
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Resources
