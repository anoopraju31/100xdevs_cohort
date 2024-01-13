import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
	const navigate = useNavigate()
	const goToHome = () => navigate('/')

	return (
		<div className='h-screen flex justify-center items-center bg-orange-100'>
			<button
				className='text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 disabled:bg-orange-200 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-300'
				onClick={goToHome}>
				{' '}
				Go To Home{' '}
			</button>
		</div>
	)
}

export default Dashboard
