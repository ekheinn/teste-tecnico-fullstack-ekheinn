import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import { PageError } from '../pages/Error'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <PageError />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
])

export default router
