import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import Button from './Button'
import checkIsAuthenticated from '../utills/auth'

const Navbar = () => {
	const [showUserMenu, setShowUserMenu] = useState(false)
	const { pathname } = useLocation()
	const isAuthenticated = checkIsAuthenticated()
	const toggleUserMenu = () => setShowUserMenu((prev) => !prev)

	return (
		<header className='fixed top-0 left-0 w-full z-50 backdrop-blur-3xl'>
			<div className='max-w-7xl mx-auto py-5 px-5 xl:px-0 flex justify-between items-center'>
				<Link
					to='/'
					className='text-xl text-center mb-2 font-bold font-mono text-orange-900'>
					Card Generator
				</Link>

				<div className='flex items-center gap-6'>
					{pathname === '/' && (
						<Link
							className='text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 disabled:bg-orange-200 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-300'
							to='/create-card'>
							{' '}
							Create Card{' '}
						</Link>
					)}

					{isAuthenticated && (
						<div
							onClick={toggleUserMenu}
							className='text-3xl relative text-orange-900'>
							<FaUserCircle />
							{showUserMenu && <UserMenu />}
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

const UserMenu = () => {
	const navigate = useNavigate()
	const logout = () => {
		localStorage.setItem('token', null)
		navigate('/sign-in')
	}

	return (
		<div className='p-2 flex justify-center items-center bg-orange-300 rounded-lg absolute top-12 right-0'>
			<Button title='Logout' handleClick={logout} />
		</div>
	)
}

export default Navbar
