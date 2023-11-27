import React, { useContext, useEffect, useState } from 'react'
import SearchInput from '../components/searchInput'
import FilterBtn from '../components/filterBtn'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { themeChange } = useContext(ThemeContext)

  // get all countries from api on page load
  const getAllCountries = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`)

      // check if an error occured
      if (!res.ok) {
        return new Error('Something went wrong');
      }

      const data = await res.json();
      setCountries([...data.slice(0, 99)]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  // get countries from api by region
  const getAllCountriesByRegion = async (region) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);

      // check if an error occured
      if (!res.ok) {
        return new Error('Something went wrong');
      }

      const data = await res.json();
      setCountries([...data.slice(0, 99)]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  // get countries from api by name
  const getCountriesByName = async (countryName) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

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
    getAllCountries();
  }, []);

  return (
    <>
      <section className='w-11/12 mx-auto'>
        <div className="mt-10">
          <div className="flex md:flex-row flex-col gap-3">
            <div className="mr-auto">
              <SearchInput handleChange={getCountriesByName} />
            </div>
            <div>
              <FilterBtn getCountries={getAllCountriesByRegion} />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            {countries?.map((country, index) => {
              return (
                <Link key={index} to={`/country/${country.name.common}`} className='no-underline'>
                  <div className={`${themeChange ? 'bg-blue text-gray-100' : 'bg-white text-blue'} shadow rounded-md overflow-hidden w-full`}>
                    {isLoading ? <SkeletonTheme baseColor={themeChange ? '#404552' : null} highlightColor={themeChange ? "#383C4A" : null}>
                      <Skeleton
                        className='h-[170px] w-full'
                      />
                    </SkeletonTheme> : <div>
                      <img src={country.flags.png} width={'100%'} className='h-[170px]' alt={country.name.common} />
                    </div>}

                    <div className="pt-5 px-4 pb-10">
                      {isLoading ? <SkeletonTheme baseColor={themeChange ? '#404552' : null} highlightColor={themeChange ? "#383C4A" : null}>
                        <Skeleton
                          className='h-full w-full'
                        />
                      </SkeletonTheme> : <h1 className={`${themeChange ? 'text-gray-100' : 'text-blue'} font-bold text-xl`}>
                        {country.name.common}
                      </h1>}

                      <div className="mt-3">
                        {isLoading ? <SkeletonTheme baseColor={themeChange ? '#404552' : null} highlightColor={themeChange ? "#383C4A" : null}>
                          <Skeleton
                            className='h-full w-full'
                          />
                        </SkeletonTheme> : <h3 className={`${themeChange ? 'text-gray-100' : 'text-blue'}`}>
                          <span className='font-semibold'>Population:</span> {new Intl.NumberFormat().format(country.population)}
                        </h3>}
                        {isLoading ? <SkeletonTheme baseColor={themeChange ? '#404552' : null} highlightColor={themeChange ? "#383C4A" : null}>
                          <Skeleton
                            className='h-full w-full'
                          />
                        </SkeletonTheme> : <h3 className={`${themeChange ? 'text-gray-100' : 'text-blue'}`}>
                          <span className='font-semibold'>Region:</span> {country.region}
                        </h3>}
                        {isLoading ? <SkeletonTheme baseColor={themeChange ? '#404552' : null} highlightColor={themeChange ? "#383C4A" : null}>
                          <Skeleton
                            className='h-full w-full'
                          />
                        </SkeletonTheme> : <h3 className={`${themeChange ? 'text-gray-100' : 'text-blue'}`}>
                          <span className='font-semibold'>Capital:</span> {country.capital}
                        </h3>}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home