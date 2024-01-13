import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Loading from './components/Loading'

const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<Suspense fallback={<Loading />}>
							<Home />
						</Suspense>
					}
				/>
				<Route
					path='/contact'
					element={
						<Suspense fallback={<Loading />}>
							<Contact />
						</Suspense>
					}
				/>
				<Route
					path='/dashboard'
					element={
						<Suspense fallback={<Loading />}>
							<Dashboard />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
