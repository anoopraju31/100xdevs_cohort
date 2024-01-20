import { useRecoilValue } from 'recoil'
import NavItem from './NavItem'
import { notificationsAtom, totalNotificationsSelector } from '../store/atoms'

const Navbar = () => {
	const { network, message, job, notifications } =
		useRecoilValue(notificationsAtom)
	const totalNotificationsCount = useRecoilValue(totalNotificationsSelector)

	return (
		<nav className='p-10 flex justify-center items-center flex-wrap gap-5'>
			<NavItem title='Home' />
			<NavItem title='network' count={network} />
			<NavItem title='Messages' count={message} />
			<NavItem title='Jobs' count={job} />
			<NavItem title='notifications' count={notifications} />
			<NavItem title='Profile' count={totalNotificationsCount} total />
		</nav>
	)
}

export default Navbar
