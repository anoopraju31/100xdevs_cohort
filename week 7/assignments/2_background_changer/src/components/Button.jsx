import PropTypes from 'prop-types'
import { backgroundAtom } from '../store/atoms/background'
import { useSetRecoilState } from 'recoil'

const Button = (props) => {
	const { title, color, styles } = props
	const setBackground = useSetRecoilState(backgroundAtom)
	const handleClick = () => {
		setBackground(color)
	}

	return (
		<button
			type='button'
			onClick={handleClick}
			className={`text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 disabled:bg-orange-200 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-300 ${styles}`}>
			{title}
		</button>
	)
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	styles: PropTypes.string,
}

export default Button
