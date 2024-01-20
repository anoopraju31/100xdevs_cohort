import { atom, selector } from 'recoil'

export const networkNotificationAtom = atom({
	key: 'networkNotificationAtom',
	default: 103,
})

export const jobsNotificationAtom = atom({
	key: 'jobsAjobsNotificationAtomtom',
	default: 13,
})

export const messageNotificationAtom = atom({
	key: 'messageNotificationAtom',
	default: 0,
})

export const totalNotificationSelector = selector({
	key: 'totalNotificationSelector',
	get: ({ get }) => {
		const networkNotificationCount = get(networkNotificationAtom)
		const messageNotificationCount = get(messageNotificationAtom)
		const jobNotificationCount = get(jobsNotificationAtom)

		return (
			networkNotificationCount + messageNotificationCount + jobNotificationCount
		)
	},
})
