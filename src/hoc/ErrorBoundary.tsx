import  { useState, useEffect, ReactNode } from 'react'

type Props = {
	children: ReactNode
}

function ErrorBoundary({children} : Props) {
	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		if (hasError) {
			setHasError(true)
		}
	}, [hasError])

	if (hasError) {
		return <h1>There are errors</h1>
	}

	return children
}

export default ErrorBoundary
