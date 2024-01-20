import { useRecoilValue } from 'recoil'
import { generateParagraphSelector } from '../store/atom/paragraphLengthAtom'

const ParagraphContainer = () => {
	const generatedParagraph = useRecoilValue(generateParagraphSelector)

	if (generatedParagraph == null) return null

	return (
		<section className='w-full max-w-3xl mx-auto p-10 text-lg font-mono text-orange-800'>
			<p>{generatedParagraph}</p>
		</section>
	)
}

export default ParagraphContainer
