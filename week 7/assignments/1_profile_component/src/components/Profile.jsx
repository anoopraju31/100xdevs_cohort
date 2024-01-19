import Stats from './Stats'

const Profile = () => {
	return (
		<div className='max-w-lg mx-auto'>
			<div className='h-36 bg-teal-300'></div>
			<div className='pb-10 flex flex-col items-center '>
				<div className='relative w-40 h-28'>
					<img
						className='w-40 h-40 rounded-full absolute -top-20'
						src='/Rita_Correia.jpeg'
						alt='Rita Correia'
					/>
				</div>
				<h2 className='text-3xl font-bold text-gray-800'> Rita Correia </h2>
				<p className='text-xl mt-2 text-gray-600 capitalize'> London </p>
			</div>

			<div className='px-10 py-5 border-t-2 border-gray-600 flex justify-between items-center font-sans'>
				<Stats stat='80K' title='followers' />
				<Stats stat='803K' title='likes' />
				<Stats stat='1.4K' title='phots' />
			</div>
		</div>
	)
}

export default Profile
