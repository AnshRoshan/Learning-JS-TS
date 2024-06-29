import PostButton from './PostButton'

function PostContent({ post }) {
	return (
		<div className='border-4 border-red-400 bg-orange-300 p-2 mb-2 rounded-xl'>
			<PostButton title={post.title} />
			<p>{post.body}</p>
		</div>
	)
}
export default PostContent
