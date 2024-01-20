import { atom, selector } from 'recoil'
import axios from 'axios'

// export const notificationsAtom = atom({
// 	key: 'notificationsAtom',
// 	default: {
// 		network: 103,
// 		jobs: 13,
// 		messaging: 3,
// 		notifications: 3,
// 	},
// })

export const notificationsAtom = atom({
	key: 'notificationsAtom',
	default: selector({
		key: 'notificationsSelector',
		get: async () => {
			const response = await axios.get(
				'https://sum-server.100xdevs.com/notifications',
			)
			return response.data
		},
	}),
})

export const totalNotificationsSelector = selector({
	key: 'totalNotificationsSelector',
	get: ({ get }) => {
		const { network, messaging, jobs, notifications } = get(notificationsAtom)

		return network + messaging + jobs + notifications
	},
})
