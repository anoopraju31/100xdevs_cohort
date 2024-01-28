import { useEffect } from 'react'

const useDebounce = (callback, delay) => {
	useEffect(() => {
		const handler = setTimeout(() => {
			callback()
		}, delay)

		return () => clearTimeout(handler)
	}, [callback, delay])
}

export default useDebounce
