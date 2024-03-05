import React from 'react'

const SignInLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<div className=''>
			<div className='text-center p-4 bg-red-500 text-white font-mono'>
				Login now to get 20% OFF
			</div>
			{children}
		</div>
	)
}

export default SignInLayout
