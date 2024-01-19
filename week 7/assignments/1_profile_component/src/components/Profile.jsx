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
				<div className='flex flex-col items-center gap-2'>
					<p className='text-2xl font-bold text-gray-800'> 80K </p>
					<p className='text-gray-600 capitalize'>followers</p>
				</div>

				<div className='flex flex-col items-center gap-2'>
					<p className='text-2xl font-bold text-gray-800'> 803K </p>
					<p className='text-gray-600 capitalize'>Likes</p>
				</div>

				<div className='flex flex-col items-center gap-2'>
					<p className='text-2xl font-bold text-gray-800'> 1.4K </p>
					<p className='text-gray-600 capitalize'>Photos</p>
				</div>
			</div>
		</div>
	)
}

export default Profile
