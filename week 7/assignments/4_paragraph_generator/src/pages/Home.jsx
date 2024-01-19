import Form from '../components/Form'
import ParagraphContainer from '../components/ParagraphContainer'

const Home = () => {
	return (
		<main className='min-h-screen bg-orange-50'>
			<h1 className='pt-10 sm:pb-10  text-center text-3xl md:text-5xl font-bold font-mono text-orange-800'>
				Paragraph Generator
			</h1>

			<Form />

			<ParagraphContainer />
		</main>
	)
}

export default Home
