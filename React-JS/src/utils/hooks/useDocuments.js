import { useEffect } from 'react'

export function useDocuments() {
	useEffect(() => {
		console.log('Use Document Hook is Loaded')
		const handleClick = (e) => {
			console.log('Document is clicked !!!.')
		}
		document.addEventListener('click', handleClick)
		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [])
}
