import Image from 'next/image';

export interface Country {
	id: string;
	name: string;
	nativeName: string;
	population: number;
	region: string;
	subRegion: string;
	capital: string;
	topLevelDomain: string;
	currencies: Array<{}>;
	languages: String[];
	borderCountries: string;
	flag: string;
}

interface CountryProps {
	country: Country;
}

const CountryComp = ({ country }: CountryProps) => {

	return (
		<article className='bg-whiteMain shadow-lg w-4/5 mx-auto my-16 rounded-lg'>
			<div>
				<Image
					src={country.flag}
					alt={country.name}
					width={592}
					height={400}
					layout='responsive'
					objectFit='cover'
					className='rounded-t-lg'
				/>
			</div>
			<div className='py-6 px-5 mt-2'>
				<h2 className='text-2xl font-extrabold mb-6'>{country.name}</h2>
				<p className='text-lg font-semibold mb-2'>
					Population: <span className='font-light'>{country.population.toLocaleString()}</span>
				</p>
				<p className='text-lg font-semibold mb-2'>
					Region: <span className='font-light'>{country.region}</span>
				</p>
				<p className='text-lg font-semibold mb-2'>
					Capital: <span className='font-light'>{country.capital}</span>
				</p>
			</div>
		</article>
	);
};

export default CountryComp;
