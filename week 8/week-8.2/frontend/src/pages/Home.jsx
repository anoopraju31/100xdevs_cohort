import { useRecoilValue, useRecoilValueLoadable } from 'recoil'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authAtom, isModelOpenAtom } from '../store/atom'
import Balance from '../components/Balance'
import Banking from '../components/Banking'
import SendModel from '../components/SendModel'

const Home = () => {
	const auth = useRecoilValueLoadable(authAtom)
	const isModelOpen = useRecoilValue(isModelOpenAtom)
	const navigate = useNavigate()

	useEffect(() => {
		if (!auth.contents) navigate('/sign-in')
	}, [navigate, auth])

	return (
		<main
			className={`${
				isModelOpen ? 'h-screen overflow-hidden' : 'min-h-screen'
			} relative bg-orange-100 py-20`}>
			<Balance />
			<Banking />
			{isModelOpen ? <SendModel /> : null}
		</main>
	)
}

export default Home
