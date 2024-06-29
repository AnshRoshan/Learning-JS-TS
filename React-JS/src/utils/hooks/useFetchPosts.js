import { useEffect, useState } from 'react'

export function useFetchPosts(id = '') {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		console.log('useEffect triggered with id:', id)
		const controller = new AbortController()
		setLoading(true)

		async function fetchData() {
			try {
				console.log('Fetching data for id:', id)
				const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
					signal: controller.signal,
				})
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}
				const data = await response.json()
				console.log('Fetched data:', data) // Log the fetched data
				setData(data)
			} catch (error) {
				if (error.name !== 'AbortError') {
					console.error('Error occurred in fetch HOOK:', error)
					setError(error)
				}
			} finally {
				setLoading(false)
			}
		}

		fetchData()

		return () => {
			console.log('Cleanup function for id:', id)
			controller.abort()
		}
	}, [id])

	return { data, loading, error }
}
