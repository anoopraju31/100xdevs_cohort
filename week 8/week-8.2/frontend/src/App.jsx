import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/' element={<Home />} />
				</Routes>
				<Toaster />
			</BrowserRouter>
		</RecoilRoot>
	)
}

export default App
