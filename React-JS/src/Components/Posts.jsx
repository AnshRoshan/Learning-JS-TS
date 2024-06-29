import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Posts() {
	const [posts, setPosts] = useState({ title: '', body: '' })
	const navigate = useNavigate()
	function handleChange(e) {
		const { name, value } = e.target
		setPosts((prevPost) => ({ ...prevPost, [name]: value }))
	}

	async function handleSubmit(e) {
		e.preventDefault()
		if (posts.title && posts.body) {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
					method: 'POST',
					body: JSON.stringify({
						...posts,
						userID: 1,
					}),
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				})
				const data = await response.json()
				console.log('Data:--> ', data)
				navigate('/blog', { replace: true, state: { title: posts.title, body: posts.body } })
			} catch (error) {
				console.error(error)
			}
		}
	}
	return (
		<div>
			<form
				action=''
				method='post'
				onSubmit={handleSubmit}
				className='flex flex-col gap-2  text-xl font-semibold'>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					id='title'
					name='title'
					value={posts.title}
					onChange={(e) => handleChange(e)}
				/>
				<label htmlFor='body'>Body</label>
				<textarea
					type='text'
					id='body'
					name='body'
					value={posts.body}
					onChange={(e) => handleChange(e)}
					className='h-36 p-2'
				/>
				<button
					type='submit'
					className='border-2 underline font-bold text-3xl bg-green-300 p-2 w-fit mx-auto'>
					Create Post
				</button>
			</form>
		</div>
	)
}
export default Posts
