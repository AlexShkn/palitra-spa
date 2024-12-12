import { useEffect, useRef } from 'react'

export const useClickOutside = (ref, handler) => {
	const listenerRef = useRef(null) //Store the event listener for cleanup

	useEffect(() => {
		listenerRef.current = (event) => {
			//More robust check that considers event bubbling
			const isClickInside = ref.current?.contains(event.target)

			if (!isClickInside) {
				handler(event)
			}
		}

		document.addEventListener('mousedown', listenerRef.current)
		document.addEventListener('touchstart', listenerRef.current)

		return () => {
			document.removeEventListener('mousedown', listenerRef.current)
			document.removeEventListener('touchstart', listenerRef.current)
		}
	}, [ref, handler])
}
