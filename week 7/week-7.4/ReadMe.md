# Week 7.4 | Recoil Deep Dive

### Topics to be cover:
1. **Basic:**
    - **Atoms** 
    - **Selectors**
    - **useRecoilState**
    - **useRecoilValue**
    - **useSetRecoilState**
    - **Asychronous Data Queries**
2. **Advance:**
    - **atomFamily**
    - **selectorFamily**
    - **useRecoilStateLoadable**
    - **useRecoilValueLoadable**

### Basics:
1. **Atom**: Atom is the most smallest unit of state that we can store, similar to **useState**. Atoms can be read from and written to from any component.
2. **Selector**: Selectors represent a function, or derived state in Recoil. It is similar to a pure function without any side-effects that always returns the same value for a given set of dependency values.
3. **useRecoilState**: useRecoilState is hook that lets us read and write to an atom from a component.
4. **useRecoilValue**: useRecoilValue hook returns the value of the given Recoil state. The useRecoilValue hook will subscribe the component to re-render if there are changing in the Recoil state.
5. **useSetRecoilState**: useSetRecoilState hook returns a setter function for updating the value of the writable Recoil state. The setter function which can be used asynchronously to change the state.

Here is an example,
``` jsx
import { useRecoilValue } from 'recoil'
import NavItem from './NavItem'
import {
	jobsNotificationAtom,
	messageNotificationAtom,
	networkNotificationAtom,
	totalNotificationSelector,
} from '../store/atoms'

const Navbar = () => {
	const networkNotificationCount = useRecoilValue(networkNotificationAtom)
	const messageNotificationCount = useRecoilValue(messageNotificationAtom)
	const jobNotificationCount = useRecoilValue(jobsNotificationAtom)
	const totalNotificationCount = useRecoilValue(totalNotificationSelector)

	return (
		<nav className='p-10 flex justify-center items-center gap-5'>
			<NavItem title='Home' />
			<NavItem title='network' count={networkNotificationCount} />
			<NavItem title='Messages' count={messageNotificationCount} />
			<NavItem title='Jobs' count={jobNotificationCount} />
			<NavItem title='Profile' count={totalNotificationCount} total />
		</nav>
	)
}

export default Navbar
```

``` jsx
import PropTypes from 'prop-types'

const NavItem = (props) => {
	const { title, count, total } = props

	return (
		<div className='relative'>
			<p className='text-xl px-6 py-2 rounded-lg bg-orange-100 capitalize'>
				{title}
			</p>
			{count ? (
				<div className='absolute -top-3 -right-3 p-2 rounded-full leading-none bg-orange-300'>
					{count > 99 && !total ? '99+' : count}
				</div>
			) : null}
		</div>
	)
}

NavItem.propTypes = {
	title: PropTypes.string.isRequired,
	count: PropTypes.number,
	total: PropTypes.bool,
}

NavItem.defaultProps = {
	total: false,
}

export default NavItem
```

``` jsx
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
```
6. **Asychronous Data Queries**: Selectors can be used as one way to incorporate asynchronous data into the Recoil data-flow graph.
``` jsx
import { useRecoilValue } from 'recoil'
import NavItem from './NavItem'
import { notificationsAtom, totalNotificationsSelector } from '../store/atoms'

const Navbar = () => {
	const { network, messaging, jobs, notifications } =
		useRecoilValue(notificationsAtom)
	const totalNotificationsCount = useRecoilValue(totalNotificationsSelector)

	return (
		<nav className='p-10 flex justify-center items-center flex-wrap gap-5'>
			<NavItem title='Home' />
			<NavItem title='network' count={network} />
			<NavItem title='Messages' count={messaging} />
			<NavItem title='Jobs' count={jobs} />
			<NavItem title='notifications' count={notifications} />
			<NavItem title='Profile' count={totalNotificationsCount} total />
		</nav>
	)
}

export default Navbar
```

``` jsx
import { atom, selector } from 'recoil'
import axios from 'axios'

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
```
``` jsx
import { RecoilRoot } from 'recoil'
import Navbar from './components/Navbar'
import { Suspense } from 'react'

const App = () => {
	return (
		<RecoilRoot>
			<Suspense fallback={<h1> Loading... </h1>}>
				<Navbar />
			</Suspense>
		</RecoilRoot>
	)
}

export default App
```

### Advance:
1. **atomFamily** 
	- It is a function that returns a writable RecoilState atom.
	- The **atomFamily()** essentially provides a map from the parameter to an atom.
	- Here is an example:
	``` js
	export const todoAtomFamily = atomFamily({
		key: 'todoAtomFamily',
		default: (id) => {
			return TODOS.find((x) => x.id === id)
		},
	})
	```
	- Arguments to atomFamily():
		- **key**: A unique string used to identify the atom internally. This string should be unique with respect to other atoms and selectors in the entire application.
		- **default**: The initial value of the atom. 
	- **atomFamily** should be used when we create a collection of atoms, where each atom us uniquely identified by a specific set of parameter values(let say an **id**). This allows us to dynamically generate atoms with different default values.
