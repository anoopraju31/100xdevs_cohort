const Footer = () => {
	return (
		<footer className='pb-10 bg-orange-50 text-center'>
			<p className='text-lg text-center mb-2 font-bold font-mono text-orange-900'>
				Made by{' '}
				<a
					className='underline hover:line-through transition-all duration-300'
					href='https://www.github.com/anoopraju31'
					target='_blank'
					rel='noreferrer'>
					Anoop Raju
				</a>
			</p>
		</footer>
	)
}

export default Footer
