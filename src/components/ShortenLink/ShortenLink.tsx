import { useState } from 'react'
import './ShortenLink.css'
import ErrorBoundary from '../../hoc/ErrorBoundary'
import useLocalStorage from '../../hooks/useLocalStorage'
import { LinkResponse } from '../../types/types'
import { apiKey } from '../../../passes'

const ShortenLink = () => {
	const [originalLink, setOriginalLink] = useState<string>('')
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
	const [error, setError] = useState<string>('')
	const [savedLinks, setSavedLinks] = useLocalStorage('savedLinks', [])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setOriginalLink(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setIsSubmitting(true)
	}

	const fetchData = async () => {
		const config: { url: string } = { url: originalLink }

		try {
			if (!isValidUrl(originalLink)) {
				setError('Please provide a URL to shorten')
				return
			}

			const response = await fetch('https://api.tinyurl.com/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${apiKey}`,
				},

				body: JSON.stringify(config),
			})

			const data: LinkResponse = await response.json()
			setSavedLinks([...savedLinks, { original: originalLink, shortened: data.data.tiny_url, copied: false }])
			setOriginalLink('')
		} catch (error: any) {
			setError('Error occurred while shortening the link.')
		} finally {
			setIsSubmitting(false)
		}
	}

	const copyLink = async (index: number) => {
		try {
			await navigator.clipboard.writeText(savedLinks[index].shortened)
			const updatedSavedLinks = [...savedLinks]
			updatedSavedLinks[index].copied = true
			setSavedLinks(updatedSavedLinks)
		} catch (error: any) {
			setError('Failed to copy link')
		}
	}

	const isValidUrl = (url: string) => {
		const pattern = /^(ftp|http|https):\/\/[^ "]+$/
		return pattern.test(url)
	}

	return (
		<ErrorBoundary>
			<div className='shorten-link'>
				<div className='container'>
					<form className='card-form' onSubmit={handleSubmit}>
						<div className='card'>
							<div className='input-info'>
								<input
									type='url'
									placeholder='Shorten a link here'
									className={`input ${error ? 'error' : ''}`}
									value={originalLink}
									onChange={handleInputChange}
								/>
								<button type='submit' disabled={isSubmitting} onClick={fetchData} className='btn-shorten'>
									Shorten It!
								</button>
								{error && <p className='error'>{error}</p>}
							</div>
						</div>
					</form>
					<div className='card-link'>
						<ul className='card-header'>
							{savedLinks.map(
								(link: any, index: any) =>
									link.original && (
										<li className='li-item' key={index}>
											<a className='long-link' href={link.original}>
												{link.original}
											</a>
											<div className='card-info'>
												<a className='short-link' href={link.shortened}>
													{link.shortened}
												</a>
												<button
													type='button'
													className={`btn-copy ${link.copied ? 'copied' : ''}`}
													onClick={() => copyLink(index)}>
													{link.copied ? 'Copied!' : 'Copy'}
												</button>
											</div>
										</li>
									)
							)}
						</ul>
					</div>
				</div>
			</div>
		</ErrorBoundary>
	)
}

export default ShortenLink
