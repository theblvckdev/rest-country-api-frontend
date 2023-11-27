import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/themeContext'
import * as BsIcons from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'

const CountryInfo = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line
  const [error, setError] = useState('');
  const { themeChange } = useContext(ThemeContext)
  const { countryName } = useParams();

  // get selected country borders
  const borders = countries.map((country) => country.borders);

  // get countries from api by name
  const getCountryByName = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);

      // check for any erros
      if (!res.ok) {
        return new Error('Something went wrong')
      }

      const data = await res.json();
      setCountries([...data.slice(0, 99)]);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCountryByName();
  });

  return (
    <>
      <section className="w-11/12 mx-auto">
        <div className="mt-10">
          <div>
            <Link to={'/'} className='no-underline'>
              <button className={`py-3 px-7 rounded-md shadow ${themeChange ? 'bg-blue text-gray-100' : 'bg-white text-blue'} flex items-center gap-2`}>
                <div>
                  <BsIcons.BsArrowLeft />
                </div>
                <div>
                  Back
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:mt-20 mt-10">
          {countries?.map((country, index) => {
            return (
              <div key={index} className="flex lg:gap-20 gap-5 lg:flex-row flex-col lg:items-center">
                <div className="lg:basis-1/2 basis-0">
                  <img src={country.flags.png} className='h-[350px]' width={'100%'} alt={country.name.common} />
                </div>
                <div className="lg:basis-1/2 basis-0">
                  <h1 className={`text-4xl font-bold ${themeChange ? 'text-gray-100' : 'text-blue'}`}>
                    {country.name.common}
                  </h1>

                  <div className="mt-10">
                    <div className="flex">
                      <div className="basis-1/2 space-y-2">
                        <h3 className={`${themeChange ? 'text-gray-100' : 'text-blue'}`}>
                          <span className='font-semibold'>Native Name:</span> {country.name.nativeName.nld?.common === undefined ? country.name.nativeName.eng?.common : country.name.nativeName.nld?.common}
                        </h3>
                        <h3 className={`${themeChange ? 'text-gray-100' : 'text-blue'}`}>
                          <span className='font-semibold'>Population:</span> {new Intl.NumberFormat().format(country.population)}
                        </h3>
                        <h3 className={`${themeChange ? 'text-gray-100' : 'text-blue'}`}>
                          <span className='font-semibold'>Region:</span> {country.region}
                        </h3>
                        <h3 className={`${themeChange ? 'text-gray-100' : 'text-blue'}`}>
                          <span className='font-semibold'>Sub Region:</span> {country.subregion}
                        </h3>
                        <h3 className={`${themeChange ? 'text-gray-100' : 'text-blue'}`}>
                          <span className='font-semibold'>Capital:</span> {country.capital}
                        </h3>
                      </div>
                      <div className="basis-1/2 space-y-2">
                        <h3 className={`${themeChange ? 'text-gray-100' : 'text-blue'}`}>
                          <span className='font-semibold'>Top Level Domain:</span> {country.tld}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default CountryInfo