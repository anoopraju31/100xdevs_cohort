import { useState } from 'react'
import OutlinedButton from './OutlinedButton'

const DropDown = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const toggleMenu = () => setOpenMenu((prev) => !prev)

	return (
		<div className='relative'>
			<OutlinedButton handleClick={toggleMenu}>
				<p className='text-black-30 font-inter'> Sort </p>
				<img src='/sort.svg' alt='sort' className='w-4 h-4' />
			</OutlinedButton>

			{openMenu ? (
				<div className='absolute right-0 top-[125%] bg-black-90 rounded shadow-md p-2'>
					<ul className='flex flex-col gap-1 text-black-30 font-inter'>
						<li className='px-4 py-2 rounded hover:text-black-12 hover:bg-black-95 whitespace-nowrap transition-colors duration-300 cursor-pointer'>
							newest
						</li>
						<li className='px-4 py-2 rounded hover:text-black-12 hover:bg-black-95 whitespace-nowrap transition-colors duration-300 cursor-pointer'>
							oldest
						</li>
						<li className='px-4 py-2 rounded hover:text-black-12 hover:bg-black-95 whitespace-nowrap transition-colors duration-300 cursor-pointer'>
							high to low
						</li>
						<li className='px-4 py-2 rounded hover:text-black-12 hover:bg-black-95 whitespace-nowrap transition-colors duration-300 cursor-pointer'>
							low to high
						</li>
					</ul>
				</div>
			) : null}
		</div>
	)
}

export default DropDown
