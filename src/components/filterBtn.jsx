import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/themeContext';
import * as LiaIcons from 'react-icons/lia'

const FilterBtn = ({ getCountries }) => {
  const regions = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
  ];

  const { themeChange } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className='relative w-fit'>
        <button onClick={() => setIsActive(!isActive)} className={`${themeChange ? 'bg-blue text-gray-100' : 'bg-white text-gray-800'} p-4 rounded-md shadow flex items-center justify-center w-48 outline-none`}>
          <div className='mr-auto'>
            Filter By Region
          </div>
          <div>
            <LiaIcons.LiaAngleDownSolid />
          </div>
        </button>

        {/* region dropdown */}
        <div className={`absolute z-10 left-0 right-0 ${isActive ? 'block' : 'hidden'} top-full p-4 rounded-md shadow mt-2 ${themeChange ? 'bg-blue text-gray-100' : 'bg-white text-blue'}`}>
          {regions.map((data, index) => {
            return (
              <button onClick={() => {
                getCountries(data);
                setIsActive(false);
              }} key={index} className='bg-transparent text-left border-0 outline-none w-full'>
                {data}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FilterBtn