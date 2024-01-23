import { useRecoilValueLoadable } from 'recoil'
import { balanceAtom } from '../store/atom'

const Balance = () => {
	const balance = useRecoilValueLoadable(balanceAtom)

	if (balance.state !== 'hasValue') return null

	return (
		<section className='border-t border-orange-800 py-6 px-4 sm:p-10'>
			<h2 className='p-6 font-mono font-bold text-xl text-orange-800 bg-orange-200 rounded-xl'>
				Your Balance: &#8377;{balance.contents / 100}
			</h2>
		</section>
	)
}

export default Balance
