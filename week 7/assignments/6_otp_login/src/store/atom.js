import { atom } from 'recoil'

export const mobileNumberFormAtom = atom({
	key: 'mobileNumberFormAtom',
	default: {
		mobile: '',
		isSubmitted: false,
	},
})
