import { atom } from 'recoil'

export const todoAtom = atom({
	key: 'todoAtom',
	default: {
		id: 1,
		title: 'Go to GYM',
		description: 'Hit the GYM from 7-9',
	},
})
