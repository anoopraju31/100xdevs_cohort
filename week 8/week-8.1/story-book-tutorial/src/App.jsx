import Card from './components/Card'

const App = () => {
	return (
		<div className='max-w-sm mx-auto my-20 flex flex-col gap-5'>
			<Card
				title='Noteworthy technology acquisitions 2021'
				description='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
				image='https://flowbite.com/docs/images/blog/image-1.jpg'
				altText='technology'
				link='https://flowbite.com/docs/components/card/'
				linkText='See our guideline'
			/>

			<Card
				title='Noteworthy technology acquisitions 2021'
				description='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
				image='https://flowbite.com/docs/images/blog/image-1.jpg'
				altText='technology'
				link='https://flowbite.com/docs/components/card/'
				linkText='See our guideline'
				isButton={true}
			/>

			<Card
				title='Noteworthy technology acquisitions 2021'
				description='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
				link='https://flowbite.com/docs/components/card/'
				linkText='See our guideline'
				isButton={true}
			/>

			<Card
				title='Noteworthy technology acquisitions 2021'
				description='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
				link='https://flowbite.com/docs/components/card/'
				linkText='See our guideline'
			/>
		</div>
	)
}

export default App
