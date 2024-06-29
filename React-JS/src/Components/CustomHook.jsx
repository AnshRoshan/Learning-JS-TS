import { useEffect, useState } from 'react'
import { useDocuments } from '../utils/hooks/useDocuments.js'

function CustomHook() {
	const [toggle, setToggle] = useState(false)
	useDocuments()

	return (
		<div>
			<button
				className='border-2 underline font-bold text-3xl bg-green-300 p-2 w-fit mx-auto'
				onClick={() => setToggle(!toggle)}>
				Toggle
			</button>
			{toggle && <Component />}
		</div>
	)
}

function Component() {
	useEffect(() => {
		const eventHandler = (event) => {
			console.log('Event Ocuured --> ', event)
		}
		window.addEventListener('resize', eventHandler('resize mounting'))
		return () => {
			window.removeEventListener('resize', eventHandler('resize unmounted/removed'))
		}
	}, [])
	useDocuments()
	return (
		<div>
			Components
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dignissimos expedita
				dolor possimus at blanditiis, quam nobis hic assumenda atque aliquam voluptas voluptatem
				libero earum distinctio repellat quaerat. Ipsum, numquam.
			</p>
		</div>
	)
}

export default CustomHook
