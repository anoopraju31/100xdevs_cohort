import { atom, selector } from 'recoil'
import { paragraphLengthAtom } from './paragraphLengthAtom'
import { generateRandomParagraph } from '../../helpers'

export const isFormSubmitAtom = atom({
	key: 'isFormSubmitAtom',
	default: false,
})

export const generateParagraphSelector = selector({
	key: 'generateParagraphSelector',
	get: ({ get }) => {
		const isSubmitting = get(isFormSubmitAtom)
		const paragraphLength = get(paragraphLengthAtom)

		if (!isSubmitting) return null

		return generateRandomParagraph(parseInt(paragraphLength))
	},
	set: ({ set }, newValue) => set(isFormSubmitAtom, newValue),
})
