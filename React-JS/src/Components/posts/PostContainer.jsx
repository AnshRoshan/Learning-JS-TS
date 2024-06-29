import { useContext, useEffect, useState } from 'react'
import PostContent from './Postcontent'
import { UserContext } from '../../utils/context/UserContext'
import { useFetchPosts } from '../../utils/hooks/useFetchPosts'

function PostContainer() {
	const [currentPage, setCurrentPage] = useState(1)
	const userContextData = useContext(UserContext)
	const { data, loading, error } = useFetchPosts()
	const itemsPerPage = 5
	const maxpages = Math.ceil(data.length / itemsPerPage)
	const handleNextPage = () => {
		setCurrentPage((prevPage) => (prevPage < maxpages ? prevPage + 1 : prevPage))
	}

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage))
	}
	// console.log(data.slice((currentPage - 1) * 10, currentPage * 10))
	return (
		<div>
			Post Content
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis eos corrupti
				consequatur aut magnam nihil quidem expedita, impedit earum amet. Consectetur quibusdam
				architecto maxime pariatur, ea nihil labore quis.
			</p>
			<p>
				{userContextData.username} {userContextData.name} {data.length}
			</p>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((post) => (
				<PostContent key={post.id} post={post} />
			))}
			<div className='w-fit mx-auto flex justify-center items-center gap-4 font-bold'>
				<button
					onClick={handlePrevPage}
					disabled={currentPage === 1}
					className='disabled:text-gray-500'>
					Previous
				</button>
				<p>{currentPage}</p>
				<button
					onClick={handleNextPage}
					disabled={currentPage === maxpages}
					className='disabled:text-gray-500'>
					Next
				</button>
			</div>
		</div>
	)
}

export default PostContainer
