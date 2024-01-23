import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const token = localStorage.getItem('token')
export const BASE_URL = import.meta.env.VITE_BASE_URL

export const instance = axios.create({
	baseURL: BASE_URL,
	headers: {
		authorization: `Bearer ${token}`,
	},
})

export const checkIsAuthenticated = async () => {
	if (!token) return null

	try {
		const decodedToken = jwtDecode(token)

		if (decodedToken.exp * 1000 <= Date.now()) {
			localStorage.removeItem('token')
			return null
		}

		const response = await instance.get(`${BASE_URL}/user`)
		const { firstName, lastName, username, _id: id } = response.data

		return { id, firstName, lastName, username, auth: true }
	} catch (error) {
		console.error('Invalid token format', error)
		localStorage.removeItem('token')
		return null
	}
}

export const getBalance = async () => {
	try {
		const response = await instance.get(`${BASE_URL}/account/balance`)
		return response.data.balance
	} catch (error) {
		console.error(error)
		return 0
	}
}

export const getUsers = async (username) => {
	try {
		const response = await instance.get(
			`${BASE_URL}/user/bulk?filter=${username}`,
		)

		return response.data.users
	} catch (error) {
		console.error(error)
		return []
	}
}
