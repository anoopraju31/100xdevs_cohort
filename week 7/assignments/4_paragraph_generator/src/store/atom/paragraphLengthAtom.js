import { atom, selector } from 'recoil'
import { generateRandomParagraph } from '../../helpers'

export const paragraphLengthAtom = atom({
	key: 'paragraphLengthAtom',
	default: '',
})

export const generateParagraphSelector = selector({
	key: 'generateParagraphSelector',
	get: ({ get }) => {
		const paragraphLength = get(paragraphLengthAtom)

		if (!paragraphLength) return null

		return generateRandomParagraph(parseInt(paragraphLength))
	},
})
