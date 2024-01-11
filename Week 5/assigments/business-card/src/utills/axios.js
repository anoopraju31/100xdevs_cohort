import axios from 'axios'
import { BASE_URL } from '../constants'

const token = localStorage.getItem('token')
const instance = axios.create({
	baseURL: BASE_URL,
	headers: {
		authorization: `bearer ${token}`,
	},
})

export default instance
