import BusinessCard from '../components/BusinessCard'
import { user } from '../constants'

const Home = () => {
	return (
		<main className='min-h-screen flex justify-center  bg-orange-50 py-20 px-5'>
			<div className='max-w-7xl pt-10 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
				<BusinessCard {...user} />
				<BusinessCard {...user} />
				<BusinessCard {...user} />
				<BusinessCard {...user} />
				<BusinessCard {...user} />
				<BusinessCard {...user} />
				<BusinessCard {...user} />
			</div>
		</main>
	)
}

export default Home
