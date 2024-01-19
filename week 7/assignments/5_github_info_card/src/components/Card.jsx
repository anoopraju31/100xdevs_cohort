import { useEffect } from 'react'
import { useState } from 'react'

const Card = () => {
	const [profile, setProfile] = useState({})

	useEffect(() => {
		const getProfile = async () => {
			const res = await fetch('https://api.github.com/users/anoopraju31')
			const data = await res.json()

			setProfile(data)
		}
		getProfile()
	}, [])

	if (!profile) return null

	return (
		<div className='max-w-lg mx-auto p-10 border border-orange-600 rounded-xl shadow-xl'>
			<div className='w-fit mx-auto'>
				<img
					className='w-52 h-52 rounded-full '
					src={profile?.avatar_url}
					alt={profile?.login}
				/>
			</div>

			<div className='py-6 flex flex-col gap-1 justify-center items-center'>
				<h2 className='text-3xl font-bold font-mono text-orange-950'>
					{' '}
					{profile?.name}{' '}
				</h2>
				<p className='text-xl font-medium font-mono text-orange-700'>
					{profile?.login}
				</p>
				<p className='text-center mt-3 font-mono text-orange-700'>
					{profile.bio}
				</p>
			</div>

			<p>email: {profile?.email}</p>
			<p> location: {profile?.location} </p>

			<div className='flex items-center justify-between gap-5'>
				<p>followers{profile.followers}</p>
				<p>public repos{profile.public_repos}</p>
				<p>following{profile.following}</p>
			</div>
		</div>
	)
}

export default Card
