import { useContext } from 'react'
import { UserContext } from '../../utils/context/UserContext.js'

function PostButton({ title }) {
	const userContextData = useContext(UserContext)

	return (
		<div className='underline underline-offset-8'>
			<span className='text-slate-600 text-md '> {title}</span> <sub>{userContextData.name}</sub>
		</div>
	)
}
export default PostButton
