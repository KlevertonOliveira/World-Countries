import CountryComp, {Country} from './CountryComp';

export interface CountriesProps{
  countries: Country[];
}

const CountriesGrid = ({countries}:CountriesProps) => {

  return (
    <section className='grid sm:grid-cols-2 lg:grid-cols-3'>
      {
        countries.map((country)=>{
          return <CountryComp key={country.id} country={country}/>
        })
      }
    </section>
  )
}

export default CountriesGrid
