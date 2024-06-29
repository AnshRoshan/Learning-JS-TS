import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function EventHandling() {
	// for uncontrolled input
	const intialState = {
		name: '',
		email: '',
		password: '',
	}
	const [formValues, setFormValues] = useState(intialState)
	const [isDisabled, setIsDisabled] = useState(true)
	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const data = Object.fromEntries(formData)
		console.log(data)
		setFormValues(intialState)
	}

	// for controlled input
	const handleChange = (e) => {
		// console.log(e.target);--it will give the input field
		const { name, value } = e.target
		setFormValues((currentState) => ({ ...currentState, [name]: value }))
	}

	// for this always use useEffect not useit in handlechange function
	useEffect(() => {
		if (formValues.name && formValues.email && formValues.password) {
			setIsDisabled((currentState) => false)
		} else {
			setIsDisabled(() => true)
		}
	}, [formValues])

	return (
		<form
			action=''
			method='POST'
			onSubmit={(event) => handleSubmit(event)}
			className='flex  flex-col gap-4 text-xl font-semibold'>
			<label htmlFor='name'>
				Name:{' '}
				<input
					className='px-4  py-2 m-1 rounded-xl'
					type='text'
					name='name'
					id='name'
					value={formValues.name}
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<label htmlFor='email'>
				Email:{' '}
				<input
					className='px-4  py-2 m-1 rounded-xl'
					type='email'
					name='email'
					id='email'
					value={formValues.email}
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<label htmlFor='password'>
				Password:{' '}
				<input
					className='px-4  py-2 m-1 rounded-xl'
					type='password'
					name='password'
					id='password'
					value={formValues.password}
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<button
				type='submit'
				className='bg-blue-500 text-white rounded-lg p-2 disabled:bg-rose-200 disabled:cursor-not-allowed disabled:text-gray-500'
				disabled={isDisabled}>
				Submit
			</button>
		</form>
	)
}
export default EventHandling

EventHandling.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
	password: PropTypes.string,
}
