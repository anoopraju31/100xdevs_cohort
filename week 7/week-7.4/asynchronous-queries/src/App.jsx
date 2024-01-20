import { RecoilRoot } from 'recoil'
import Navbar from './components/Navbar'
import { Suspense } from 'react'

const App = () => {
	return (
		<RecoilRoot>
			<Suspense fallback={<h1> Loading... </h1>}>
				<Navbar />
			</Suspense>
		</RecoilRoot>
	)
}

export default App
