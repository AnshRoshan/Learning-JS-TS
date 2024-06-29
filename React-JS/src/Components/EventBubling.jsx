import { func } from 'prop-types'

function EventBubling() {
	function handleClickDiv(e) {
		console.log('Div. Clicked ...', e.target)
	}

	function handleClickButton(e) {
		// e.stopPropagation()
		// the event will bubble up to the parent div without stopPropagation
		console.log('Button Clicked')
	}

	return (
		<div>
			<div onClick={handleClickDiv} className='bg-green-400 p-4 text-xl font-semibold '>
				GrandParent div -- topmost div
				<div
					onClick={(e) => handleClickDiv(e)}
					className='bg-sky-400 p-4 text-xl font-semibold border-4 m-4  '>
					Parent div -- second layer
					<button
						onClick={(e) => handleClickButton(e)}
						className='border-4 p-2 m-2 bg-rose-400 block '>
						Child-Button
						{/* Here the event will bubble up to the parent div */}
					</button>
				</div>
			</div>
		</div>
	)
}
export default EventBubling
