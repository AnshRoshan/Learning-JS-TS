import { useEffect, useMemo, useState } from 'react'

function RenderDynamic() {
	const url = 'https://jsonplaceholder.typicode.com/users'

	/**
	 * useMemo() is a hook that memorizes the output of a function.
	 * It is used to optimize performance.
	 * useMemo() is used to avoid unnecessary re-renders of a component.
	 *
	 *
	 */
	const initailstate = useMemo(
		() => ({
			name: '',
			email: '',
			phone: '',
			website: '',
			username: '',
		}),
		[]
	)

	async function fetchData(url) {
		const response = await fetch(url)
		const data = await response.json()
		console.log(data)
		return data
	}

	const [users, setUsers] = useState([])
	const [isEdit, setIsEdit] = useState(null)

	useEffect(() => {
		fetchData(url)
			.then((data) => setUsers([{ ...initailstate, id: 0 }, ...data]))
			.catch((error) => console.log(error))
	}, [initailstate])

	const handleDelete = (id) => {
		console.log(id)
		/**
		 * filter() method creates a new array with all elements that pass the test implemented by the provided function.
		 * Best to use filter() method when you want to remove an element from an array.
		 *
		 */
		setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
	}

	const handleEdit = (id) => {
		setIsEdit(id === isEdit ? null : id)
	}

	const handleChange = (e, id) => {
		const { name, value } = e.target
		console.log(name, value, id)
		/**
		 * map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
		 * Best to use map() method when you want to update a value of an element in an array.
		 */
		setUsers((prevUsers) =>
			prevUsers.map((user) => (user.id === id ? { ...user, [name]: value } : user))
		)
	}

	const handleAdd = (e) => {
		e.preventDefault()
		const newUser = users[0]
		console.log(newUser)
		setUsers((prevUsers) => [...prevUsers, { ...newUser, id: prevUsers.length }])
		setUsers((prevUsers) =>
			prevUsers.map((user) => (user.id === 0 ? { ...initailstate, id: 0 } : user))
		)
	}

	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
			{/* donot forget to add key to the parent element 
			 key should be unique
			Never use index as a key for the list items.
			 Always use a unique identifier for the key.
			 use a local counter to generate a unique key for each item.
			*/}
			{users.map((user) => (
				<div key={user.id} className='bg-indigo-300 even:bg-rose-300  p-4 text-lg m-4 rounded-xl'>
					{isEdit === user.id || user.id === 0 ? (
						<>
							<h2 className='text-2xl flex justify-between text-purple-800 font-semibold mb-4 pb-4 border-b-4 border-black '>
								<input
									name='name'
									value={user.name}
									onChange={(e) => handleChange(e, user.id)}
									className='bg-white/50 px-4 rounded-xl'
								/>
								<p>{user.id}</p>
							</h2>
							<div className='flex  flex-col gap-1 font-semibold [&>p>input]:rounded-xl [&>p>input]:px-4 '>
								<p>
									Username:{' '}
									<input
										type='text'
										name='username' // This should match the key in the user object. !!!!
										value={user.username} // user object has a 'username' key.
										onChange={(e) => handleChange(e, user.id)}
									/>
								</p>
								<p>
									Email:{' '}
									<input
										type='email'
										name='email'
										value={user.email}
										onChange={(e) => handleChange(e, user.id)}
									/>
								</p>
								<p>
									Phone:{' '}
									<input
										type='tel'
										name='phone'
										value={user.phone}
										onChange={(e) => handleChange(e, user.id)}
									/>
								</p>
								<p>
									Website:{' '}
									<input
										type='url'
										name='website'
										value={user.website}
										onChange={(e) => handleChange(e, user.id)}
									/>{' '}
								</p>
							</div>
						</>
					) : (
						<>
							<h2 className='text-2xl flex justify-between text-purple-800 font-semibold mb-4 pb-4 border-b-4 border-black'>
								<p>{user.name}</p>
								<p>{user.id}</p>
							</h2>
							<p>Username: {user.username}</p>
							<p>Email: {user.email}</p>
							<p>Phone: {user.phone}</p>
							<p>Website: {user.website}</p>
						</>
					)}
					{user.id === 0 ? (
						<button
							className='border-4 rounded-xl p-1 mt-8 px-8 bg-green-500 '
							onClick={(e) => handleAdd(e)}>
							ADD
						</button>
					) : (
						<div className='flex justify-between p-4'>
							<button
								className='border-4 rounded-xl p-1 px-8 bg-blue-500'
								onClick={() => handleEdit(user.id)}>
								{isEdit === user.id ? ' Save' : 'Edit'}
							</button>
							<button
								className='border-4 rounded-xl p-1 px-8 bg-red-500'
								onClick={() => handleDelete(user.id)}>
								Delete
							</button>
						</div>
					)}
				</div>
			))}
		</div>
	)
}
export default RenderDynamic
