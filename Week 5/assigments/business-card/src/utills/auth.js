import { jwtDecode } from 'jwt-decode'

const checkIsAuthenticated = () => {
	const token = localStorage.getItem('token')

	if (!token) return false

	try {
		const decodedToken = jwtDecode(token)

		if (decodedToken.exp * 1000 > Date.now()) return true
		else localStorage.removeItem('token')
	} catch (error) {
		console.error('Invalid token format')
		localStorage.removeItem('token')
		return false
	}
}

export default checkIsAuthenticated
