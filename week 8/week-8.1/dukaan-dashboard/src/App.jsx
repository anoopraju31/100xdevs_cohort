import Navbar from './components/Navbar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

const App = () => {
	return (
		<div className='flex'>
			<div className='hidden lg:block'>
				<Navbar />
			</div>
			<div className='flex-1 relative'>
				<Header />
				<Dashboard />
			</div>
		</div>
	)
}

export default App
