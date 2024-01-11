import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import CreateCard from './pages/CreateCard'
import EditCardPage from './pages/EditCardPage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'

const App = () => {
	return (
		<BrowserRouter>
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
