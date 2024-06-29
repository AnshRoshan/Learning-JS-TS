import { useEffect, useState } from 'react'

function UseEffectHooks() {
	const [count, setCount] = useState(0)

	// useEffect callback are ececuted in the order they are defined in the component
	// useEffect is called after the render is completed
	// useEffect dependency array is used to tell react when to call the useEffect
	// [] is used to call the useEffect only once when the component is mounted
	// [count] is used to call the useEffect only when the count is changed
	// useEffect(() => {
	// 	document.title = 'UseEffect Hooks' + count
	// 	console.log('UseEffect Hooks rendering', count)
	// }, [count])

	// useEffect(() => {
	// 	console.log('Effect is running')
	// 	// cleanup function is called when the component is unmounted
	// 	// so it is run only once. It is called when the component is re-rendered
	// 	return () => {
	// 		console.log('Cleanup function')
	// 	}
	// }, [count])

	// fetch return the promises
	// prpmises if not handled will be ignored and be in pending state
	// promises resolved is handled by then() method and
	// promises rejected is handled by catch() method
	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/gposts', { method: 'GET' }).then((response) =>
	// 		response
	// 			.json()
	// 			.then((data) => {
	// 				console.log(data)
	// 			})
	// 			.catch((error) => console.error('Something is wrong ---only promise rejected', error))
	// 	)
	// },[])

	// pending promises can be await
	// useEffect has two phases -mounting and unmounting
	useEffect(() => {
		const controller = new AbortController()

		async function fetchData() {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
					method: 'GET',
					signal: controller.signal,
				})
				const json = await response.json()
				console.log(json)
				console.log(controller.signal)
			} catch (error) {
				console.error('Error in the code.', error)
			}
		}
		fetchData()
		// useEffect cleanup function is called when the component is unmounted
		// cleanup function is called when the component is re-rendered
		// In strict mode useEffect is twice,cleanup function is once,[mount,unmount,mount]

		// cleanup function appear to be called first beacuse of async nature of fetch
		return () => {
			console.log('cleanup function')
			console.log(controller.signal)
			controller.abort()
		}
	}, [])

	return (
		<div>
			<p> The Number Of Click : {count}</p>
			<button className='border-2 p-2  ' onClick={() => setCount((prevCount) => prevCount + 1)}>
				Click Me
			</button>
		</div>
	)
}
export default UseEffectHooks
