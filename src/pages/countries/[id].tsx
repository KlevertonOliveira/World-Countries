import { GetStaticPaths, GetStaticProps } from 'next';
import {ICountry} from '../../components/Country';
import Navbar from '../../components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import ReturnHomeButton from '../../components/ReturnHomeButton';

const getCountryDetails:any = async (id) => {
	
	const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);

	const countryDetails = await response.json();

	return countryDetails;
};

interface CountryDetailsProps{
  country: ICountry;
}

const CountryDetails = ({country}:CountryDetailsProps) => {

  return (
		<>
			<Head>
				<title>{country.name}</title>
			</Head>

			<Navbar />

			<main className='bg-veryLightGray dark:bg-veryDarkBlueBackground min-h-screen'>
				<section className='m-12'>
					<ReturnHomeButton />

					<div className='grid'>
						<section className='w-full h-64 relative my-16'>
							<Image
								src={country.flag}
								alt={country.name}
								layout='fill'
								objectFit='cover'
							/>
						</section>

						<section className='dark:text-whiteMain'>
							<div>
								<h2>{country.name}</h2>
								<p>
									Native Name: <span>{country.nativeName}</span>
								</p>
								<p>
									Region: <span>{country.region}</span>
								</p>
								<p>
									Sub Region: <span>{country.subRegion}</span>
								</p>
								<p>
									Capital: <span>{country.capital}</span>
								</p>
							</div>

							<div>
								<p>
									Top Level Domain: <span>{country.topLevelDomain}</span>
								</p>
								<p>
									Currencies:
									{country.currencies.map((currency, index) => {
										return (
											<span key={index}>
												{` ${currency.name}`}
												{index + 1 === country.currencies.length ? '' : ', '}
											</span>
										);
									})}
								</p>

								<p>
									Languages: 
									{country.languages.map((language, index) => {
										return (
											<span key={index}>
												{` ${language.name}`}
												{index + 1 === country.languages.length ? '' : ','}
											</span>
										);
									})}
								</p>
							</div>

							<div>
								<h3>
									Border Countries:
									{
										country.borderCountries.map((borderCountry, index)=>{
											return <span key={index}>{borderCountry}</span>
										})
									}
								</h3>
							</div>
						</section>
					</div>
				</section>
			</main>
		</>
	);
}

export default CountryDetails

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch('https://restcountries.eu/rest/v2/all');
	const data = await response.json();

	const paths = data.map((country) => {
		return {
			params: { id: country.alpha3Code },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({params}) => {
	
	const countryDetails = await getCountryDetails(params.id);
		
  const {
		alpha3Code,
		capital,
		currencies,
		borders,
		flag,
		languages,
		name,
		nativeName,
		population,
		region,
		subregion,
		topLevelDomain,
	} = countryDetails;

	// Gets all current country's border countries with all details.
	const borderCountriesDetailed:any = await Promise.all(
		borders.map((borderCountry)=>getCountryDetails(borderCountry))
	)

	// Maps the previous array to get only the name of each border country.
	const borderCountries = borderCountriesDetailed.map((country)=> country.name);

  const country:ICountry = {
		id: alpha3Code,
		name,
		nativeName,
		population,
		region,
		subRegion: subregion,
		capital,
		topLevelDomain,
		currencies,
		languages,
		borderCountries,
		flag,
	};

	return {
		props: {
			country
		},
	};
};