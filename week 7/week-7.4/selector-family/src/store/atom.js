import { atomFamily, selectorFamily } from 'recoil'

export const todoAtomFamily = atomFamily({
	key: 'todoAtomFamily',
	default: selectorFamily({
		key: 'todoSelectorFamily',
		get: (id) => async () => {
			const response = await fetch(
				`https://sum-server.100xdevs.com/todo?id=${id}`,
			)
			const data = await response.json()
			return data.todo
		},
	}),
})
