const SearchInput = () => {
  return (
		<section className='bg-whiteMain text-darkGray flex mt-8 mb-12 lg:mx-6 lg:my-8 p-4 shadow-md lg:w-1/3 font-light'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-8 w-8 mx-8'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
				/>
			</svg>
			<input
				type='text'
				placeholder='Search for a country...'
				className='w-full border-none outline-none'
			/>
		</section>
	);
}

export default SearchInput
