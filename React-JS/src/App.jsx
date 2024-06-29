import { useState } from 'react'
import CustomHook from './Components/CustomHook'
import EventBubling from './Components/EventBubling'
import EventHandling from './Components/EventHandling'
import Posts from './Components/Posts'
import PostButton from './Components/posts/PostButton.jsx'
import PostContainer from './Components/posts/PostContainer'
import Props from './Components/Props'
import PropsDrill from './Components/PropsDrill'
import RenderDynamic from './Components/RenderDynamic'
import UseEffectHooks from './Components/UseEffectHooks'
import { UserContext } from './utils/context/UserContext.js'
import { Outlet } from 'react-router-dom'

function App() {
	const list = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

	const marks = {
		maths: 90,
		physics: 80,
		chemistry: 70,
	}

	const info = [
		{
			name: 'Address',
			value: 'Bhagalpur',
		},
		{
			name: 'Phone',
			value: '1234567890',
		},
		{
			name: 'Martial Status',
			value: 'Single',
		},
	]

	const [userData, setUserData] = useState({
		username: '@anshroshan',
		name: 'Ansh Roshan',
	})

	return (
		<div className=''>
			<h1 className='text-3xl font-bold '>App is Root Components</h1>

			{/* Here using the info={info} is not required , short hand is working with spread only but avoid it !!! */}
			{/*
			<Props
				title="Props and prop-types "
				username="@anshroshan"
				email="ansh@roshan.com"
				islogged={true}
				age={22}
				// Spread props directly when structure is known:
				{...list}
				{...marks}
				// Spread info prop cautiously (consider alternatives):
				{...info}
			/>
	   		*/}
			<Props
				title='Props and prop-types '
				Component={() => (
					<PropsDrill
						username={'@anshroshan'}
						email={'ansh@roshan.com'}
						islogged={true}
						age={22}
						list={list}
						marks={marks}
						info={info}
					/>
				)}
			/>
			<Props title={'Dynamically Render The Components'} Component={RenderDynamic} />
			<Props title={'Event Handling'} Component={EventHandling} />
			<Props title={'Event Bubling'} Component={EventBubling} />
			<Props title={'Use Effect Hooks'} Component={UseEffectHooks} />
			<Props title={'POST method- posting a post'} Component={Posts} />
			<Props title={'Custom Hooks'} Component={CustomHook} />
			<Props
				title={'Context API testing'}
				Component={() => (
					<>
						<PostButton />
						<UserContext.Provider value={{ ...userData }}>
							<PostContainer />
						</UserContext.Provider>
					</>
				)}
			/>
			<Outlet />
		</div>
	)
}
export default App
