import { atom, selector } from 'recoil'

export const usernameAtom = atom({
	key: 'usernameAtom',
	default: '',
})

export const githubProfileSelector = selector({
	key: 'githubProfileSelector',
	get: async ({ get }) => {
		const username = get(usernameAtom)

		if (!username) return null

		const res = await fetch(`https://api.github.com/users/${username}`)
		const data = await res.json()

		return data
	},
})
