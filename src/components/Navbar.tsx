import { useEffect, useState } from "react";

const Navbar = () => {
	
	const [theme, setTheme] = useState<string>('light');

 	useEffect(()=>{
		const savedTheme = localStorage.getItem('theme');
		
		if(savedTheme){
			document.documentElement.classList.add(savedTheme)
			setTheme(savedTheme)
		}
	}, [])

	const changeTheme = () =>{
		document.documentElement.classList.remove(theme);
		theme === 'light'?
			saveTheme('dark') : saveTheme('light');
	}

	const saveTheme = (theme:string) =>{
		localStorage.setItem('theme', theme)
		setTheme(theme);
		document.documentElement.classList.add(theme);
	}

  return (
		<header className='px-8 py-4 shadow-md lg:px-16 bg-whiteMain mb-2 dark:bg-darkBlue'>
			<nav className='flex items-center justify-between'>
				<h2 className='font-extrabold text-lg lg:text-xl dark:text-whiteMain'>
					Where in the world?
				</h2>
				<div className='grid content-center h-12'>
					<button
						className='flex cursor-pointer focus:outline-none'
						onClick={changeTheme}
					>
						{theme === 'light' ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5 stroke-current dark:text-whiteMain'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
								/>
							</svg>
						)}

						<h2 className='ml-1 text-veryDarkBlue font-semibold dark:text-whiteMain'>
							{theme === 'light' ? 'Dark Mode' : 'Light Mode'}
						</h2>
					</button>
				</div>
			</nav>
		</header>
	);
}

export default Navbar