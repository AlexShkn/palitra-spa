import { useEffect, useState } from 'react'

export const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(() => {
		if (typeof window !== 'undefined') {
			return window.matchMedia(query).matches
		}
		return false
	})

	useEffect(() => {
		let media
		if (typeof window !== 'undefined') {
			media = window.matchMedia(query)
			const handleChange = () => setMatches(media.matches)
			media.addEventListener('change', handleChange)
			return () => media.removeEventListener('change', handleChange)
		}
		return () => {}
	}, [query])

	return matches
}
