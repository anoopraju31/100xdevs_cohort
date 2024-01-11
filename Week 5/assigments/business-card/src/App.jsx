import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import Home from './pages/Home'
import CreateCard from './pages/CreateCard'
import EditCardPage from './pages/EditCardPage'

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/sign-up' element={<SignUpPage />} />
				<Route path='/sign-in' element={<SignInPage />} />
				<Route path='/' element={<Home />} />
				<Route path='/create-card' element={<CreateCard />} />
				<Route path='/edit-card' element={<EditCardPage />} />
			</Routes>
			<Toaster />
		</BrowserRouter>
	)
}

export default App
