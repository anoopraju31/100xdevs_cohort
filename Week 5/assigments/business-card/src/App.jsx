import BusinessCard from './components/BusinessCard'

const App = () => {
	const user = {
		name: 'Anoop Raju',
		description: 'A Computer Science Engineering graduate',
		interests: [
			{
				id: '1',
				interest: 'Coding',
			},
			{
				id: '2',
				interest: 'Photography',
			},
			{
				id: '3',
				interest: 'Travel',
			},
		],
		socials: [
			{
				id: '1',
				title: 'LinkedIn',
				link: 'www.linkedin.com',
			},
			{
				id: '2',
				title: 'Instagram',
				link: 'www.instagram.com',
			},
			{
				id: '3',
				title: 'Github',
				link: 'www.github.com',
			},
		],
	}
	return (
		<div>
			<BusinessCard {...user} />
		</div>
	)
}

export default App
