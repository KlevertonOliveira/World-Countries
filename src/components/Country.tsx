import Image from 'next/image';

export interface ICountry {
	id: string;
	name: string;
	nativeName: string;
	population: number;
	region: string;
	subRegion: string;
	capital: string;
	topLevelDomain: string;
	currencies: Array<{name:string}>;
	languages: Array<{name: string}>;
	borderCountries: string[];
	flag: string;
}

interface CountryProps {
	country: ICountry;
}

const Country = ({ country }: CountryProps) => {

	return (
		<article className='bg-whiteMain shadow-lg w-10/12 sm:w-full rounded-lg mx-auto dark:bg-darkBlue dark:text-whiteMain'>
			<section
				className='shadow-md'
				style={{ height: '176px', width: '100%', position: 'relative' }}
			>
				<Image
					src={country.flag}
					alt={country.name}
					layout='fill'
					objectFit='cover'
					priority
					className='rounded-t-md'
				/>
			</section>

			<section className='py-6 px-5 mt-2'>
				<h2 className='text-2xl font-extrabold mb-6'>{country.name}</h2>
				<p className='text-lg font-semibold mb-2'>
					Population:{' '}
					<span className='font-light'>
						{country.population.toLocaleString()}
					</span>
				</p>
				<p className='text-lg font-semibold mb-2'>
					Region: <span className='font-light'>{country.region}</span>
				</p>
				<p className='text-lg font-semibold mb-2'>
					Capital: <span className='font-light'>{country.capital}</span>
				</p>
			</section>
		</article>
	);
};

export default Country;
