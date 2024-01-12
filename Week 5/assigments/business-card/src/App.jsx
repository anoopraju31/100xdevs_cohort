import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Provider from './components/Provider'
import Navbar from './components/Navbar'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './pages/Home'
import CreateCard from './pages/CreateCard'
import EditCardPage from './pages/EditCardPage'
import NotFoundPage from './pages/NotFoundPage'
import Footer from './components/Footer'

const App = () => {
	return (
		<Provider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/sign-up' element={<SignUpPage />} />
					<Route path='/sign-in' element={<SignInPage />} />
					<Route element={<ProtectedRoutes />}>
						<Route path='/' element={<Home />} exact />
						<Route path='/create-card' element={<CreateCard />} />
						<Route path='/edit-card' element={<EditCardPage />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>

				<Toaster />
				<Footer />
			</BrowserRouter>
		</Provider>
	)
}

export default App
