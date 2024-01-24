import ChevronDown from './ChevronDown'
import { navItems } from '../constants'
import NavItem from './NavItem'

const Navbar = () => {
	return (
		<nav className='sticky top-0 w-full min-w-60 py-4 px-[10px] flex flex-col gap-6 bg-navbar min-h-screen'>
			{/* logo */}
			<div className='flex items-center gap-3'>
				<div className='w-10 h-10 rounded-md bg-black-100'>
					<img
						src='/nishyan.png'
						alt='nishyan logo'
						className='w-full h-full rounded-md'
					/>
				</div>
				<div className='flex-1 flex flex-col justify-center gap-1 text-black-100'>
					<h6 className='text-[15px] leading-[22px] font-medium font-inter'>
						Nishyan
					</h6>
					<p className='text-[13px] leading-4 underline opacity-80'>
						Visit store
					</p>
				</div>

				<ChevronDown style='fill-black-100' />
			</div>

			{/* navigations */}
			<ul className='flex-1 flex flex-col gap-1'>
				{navItems.map((item) => (
					<NavItem key={item.id} {...item} />
				))}
			</ul>

			{/* credits */}
			<div className='px-3 py-[6px] flex items-center gap-3 rounded bg-navbar-secondary'>
				<img
					src='/wallet.svg'
					className='p-[6px] rounded bg-navbar-hover'
					alt='wallet'
				/>

				<div className='flex flex-col gap-[2px] text-black-100 font-inter'>
					<p className='text-[13px] leading-4 opacity-80 whitespace-nowrap'>
						Available credits
					</p>
					<p className='font-medium text-base'> 222.10 </p>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
