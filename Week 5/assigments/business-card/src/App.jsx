import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import EditCardPage from './pages/EditCardPage'
import CreateCard from './pages/CreateCard'

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/sign-up' element={<SignUpPage />} />
				<Route path='/sign-in' element={<SignInPage />} />
				<Route path='/' element={<h1> Home Page </h1>} />
				<Route path='/create-card' element={<CreateCard />} />
				<Route path='/edit-card' element={<EditCardPage />} />
			</Routes>
			<Toaster />
		</BrowserRouter>
	)
}

export default App
