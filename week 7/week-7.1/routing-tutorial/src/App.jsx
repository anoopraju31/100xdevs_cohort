import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
