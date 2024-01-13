import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='flex gap-4'>
			<Link to='/'>Home</Link>
			<Link to='/contact'>Contact</Link>
			<Link to='/dashboard'>Dashboard</Link>
		</nav>
	)
}

export default Navbar
