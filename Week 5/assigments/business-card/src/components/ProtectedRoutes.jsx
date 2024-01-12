import { Outlet, Navigate } from 'react-router-dom'
import checkIsAuthenticated from '../utills/auth'

const ProtectedRoutes = () => {
	const isAuthenticated = checkIsAuthenticated()

	return isAuthenticated ? <Outlet /> : <Navigate to='/sign-in' />
}

export default ProtectedRoutes
