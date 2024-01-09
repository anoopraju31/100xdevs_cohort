import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateCard from './pages/CreateCard'
import EditCardPage from './pages/EditCardPage'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<h1> Home Page </h1>} />
				<Route path='/create-card' element={<CreateCard />} />
				<Route path='/edit-card' element={<EditCardPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
