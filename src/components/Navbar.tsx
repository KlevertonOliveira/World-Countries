const Navbar = () => {
  return (
		<header className='px-8 py-4 shadow-md lg:px-16 bg-whiteMain mb-2'>
			<nav className='flex items-center justify-between'>
				<h2 className='font-extrabold text-lg lg:text-xl'>Where in the world?</h2>
				<div className='grid content-center h-12'>
					<div className='flex cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
							/>
						</svg>
						<h2 className='ml-2 text-veryDarkBlue font-semibold'>Dark Mode</h2>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar