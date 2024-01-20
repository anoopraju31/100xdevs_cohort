import { atom, selector } from 'recoil'

export const notificationsAtom = atom({
	key: 'notificationsAtom',
	default: {
		network: 103,
		job: 13,
		message: 3,
		notifications: 3,
	},
})

export const totalNotificationsSelector = selector({
	key: 'totalNotificationsSelector',
	get: ({ get }) => {
		const { network, message, job, notifications } = get(notificationsAtom)

		return network + message + job + notifications
	},
})
