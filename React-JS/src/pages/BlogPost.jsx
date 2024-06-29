import { useLocation } from 'react-router-dom'

function BlogPost() {
	// the usenavigate is used in Post component to navigate to the blog page
	const { state, search } = useLocation()
	return (
		<div>
			<h1 className='text-5xl'> Welcome to Blog Post</h1>
			<p>Your blog is submitted</p>
			<p>Title: {state?.title}</p>
			<p>Body: {state?.body}</p>
		</div>
	)
}
export default BlogPost
