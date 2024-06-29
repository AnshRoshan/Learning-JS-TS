import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserPages from './pages/UserPages.jsx'
import BlogPost from './pages/BlogPost.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'user',
				element: <UserPages />,
			},
		],
	},
	{
		path: '/blog',
		element: <BlogPost />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
)
