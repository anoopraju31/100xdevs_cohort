import { atom } from 'recoil'

export const mobileNumberFormAtom = atom({
	key: 'mobileNumberFormAtom',
	default: {
		mobile: '',
		isSubmitted: false,
	},
})

export const otpFormAtom = atom({
	key: 'otpFormAtom',
	default: {
		first: '',
		second: '',
		third: '',
		forth: '',
		isSubmitted: false,
	},
})
