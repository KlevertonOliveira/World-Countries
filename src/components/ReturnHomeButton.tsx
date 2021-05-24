import Link from 'next/link';

const ReturnHomeButton = () => {
  return (
		<Link href='/'>
			<a className='inline-block shadow-lg px-8 py-2 text-veryDarkBlueText dark:bg-darkBlue dark:text-whiteMain'>
				<div className='flex items-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M10 19l-7-7m0 0l7-7m-7 7h18'
						/>
					</svg>
					<div className='ml-3 text-veryDarkBlueText dark:text-whiteMain'>
						Back
					</div>
				</div>
			</a>
		</Link>
	);
}

export default ReturnHomeButton
