import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<main className='h-screen flex justify-center items-center flex-col bg-orange-50'>
			<h1 className='text-9xl font-extrabold font-mono tracking-tight text-center text-orange-900'>
				404 <br className='md:hidden' /> Page Not Found
			</h1>
			<p className='text-xl text-orange-900 font-mono mt-10 font-bold'>
				{' '}
				Return to{' '}
				<Link className='underline' to='/'>
					{' '}
					Home{' '}
				</Link>{' '}
			</p>
		</main>
	)
}

export default NotFoundPage
