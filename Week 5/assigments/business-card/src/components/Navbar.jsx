import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
	const { pathname } = useLocation()

	return (
		<header className='fixed top-0 left-0 w-full z-50'>
			<div className='max-w-7xl mx-auto py-5 px-5 xl:px-0 flex justify-between items-center backdrop-blur-3xl'>
				<Link
					to='/'
					className='text-xl text-center mb-2 font-bold font-mono text-orange-900'>
					Card Generator
				</Link>

				{pathname === '/' && (
					<Link
						className='text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 disabled:bg-orange-200 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-300'
						to='/create-card'>
						{' '}
						Create Card{' '}
					</Link>
				)}
			</div>
		</header>
	)
}

export default Navbar
