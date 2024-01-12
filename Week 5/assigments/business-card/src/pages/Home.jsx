import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import BusinessCard from '../components/BusinessCard'
import axios from '../utills/axios'

const Home = () => {
	const [cards, setCards] = useState([])

	useEffect(() => {
		const getCards = async () => {
			try {
				const res = await axios.get('/business-card')
				setCards(res.data.cards)
			} catch (error) {
				toast.error(error.response.data.message)
			}
		}

		getCards()
	}, [])

	if (cards.length === 0)
		return (
			<main className='min-h-screen flex justify-center items-center bg-orange-50 py-20 px-5'>
				<h1 className='text-2xl font-mono font-bold text-orange-900'>
					Sorry, No cards available
				</h1>
			</main>
		)

	const allBusinessCards = cards.map((card) => (
		<BusinessCard key={card.id} {...card} />
	))

	return (
		<main className='min-h-screen flex justify-center  bg-orange-50 py-20 px-5'>
			<div className='max-w-7xl w-full pt-10 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
				{allBusinessCards}
			</div>
		</main>
	)
}

export default Home
