import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
	generateParagraphSelector,
	isFormSubmitAtom,
} from '../store/atom/isFormSubmitAtom'

const ParagraphContainer = () => {
	const generatedParagraph = useRecoilValue(generateParagraphSelector)
	const setIsSubmitting = useSetRecoilState(isFormSubmitAtom)

	if (generatedParagraph == null) return null
	else setIsSubmitting(false)

	return (
		<section className='w-full max-w-3xl mx-auto p-10 text-lg font-mono text-orange-800'>
			<p>{generatedParagraph}</p>
		</section>
	)
}

export default ParagraphContainer
