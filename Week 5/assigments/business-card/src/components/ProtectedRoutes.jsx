import { Outlet, Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const ProtectedRoutes = () => {
	const token = localStorage.getItem('token')

	if (!token) return <Navigate to='/sign-in' />
	try {
		const decodedToken = jwtDecode(token)

		if (decodedToken.exp * 1000 > Date.now()) return <Outlet />
		else localStorage.removeItem('token')
	} catch (error) {
		console.error('Invalid token format')
		localStorage.removeItem('token')
		return <Navigate to='/sign-in' />
	}
}

export default ProtectedRoutes
