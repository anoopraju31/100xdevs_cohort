import Help from './Help'
import SearchInput from './SearchInput'
import IconWrapper from './IconWrapper'

const Header = () => {
	return (
		<header className='fixed top-0 right-0 w-full py-3 px-8 flex items-center gap-4 border-b border-black-85 bg-black-100'>
			{/* logo */}
			<div className='flex-1 flex items-center gap-4'>
				<h4 className='text-black-12 text-xl font-medium'> Payouts </h4>
				<div className='hidden sm:flex items-center gap-[6px]'>
					<Help styles='fill-black-30' />

					<p className='text-xs text-black-30'>How it works</p>
				</div>
			</div>

			{/* Search Bar */}
			<div className='flex-1 hidden md:block'>
				<SearchInput
					id='search'
					name='search'
					label='search'
					placeholder='Search features, tutorials, etc.'
				/>
			</div>

			{/* Icon Container */}
			<div className='flex-1 flex justify-end gap-2'>
				<div className='md:hidden'>
					<IconWrapper icon='/search.svg' altText='search' />
				</div>
				<IconWrapper icon='/message.svg' altText='message' />
				<IconWrapper icon='/menu.svg' altText='menu' />
			</div>
		</header>
	)
}

export default Header
