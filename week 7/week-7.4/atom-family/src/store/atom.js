import { atom, atomFamily } from 'recoil'
import { TODOS } from '../utills/constants'

export const todoAtom = atom({
	key: 'todoAtom',
	default: {
		id: 1,
		title: 'Go to GYM',
		description: 'Hit the GYM from 7-9',
	},
})

export const todoAtomFamily = atomFamily({
	key: 'todoAtomFamily',
	default: (id) => {
		return TODOS.find((x) => x.id === id)
	},
})
