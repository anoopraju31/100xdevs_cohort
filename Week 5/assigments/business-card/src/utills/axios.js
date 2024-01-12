import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')
const instance = axios.create({
	baseURL: BASE_URL,
	headers: {
		authorization: `bearer ${token}`,
	},
})

export default instance
