import React, { useContext, useState } from 'react'
import * as GoIcons from 'react-icons/go'
import { ThemeContext } from '../context/themeContext'

const SearchInput = ({ handleChange }) => {
  const { themeChange } = useContext(ThemeContext);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <form action="#" className={`flex items-center rounded-md px-5 shadow md:w-96 w-[340px] gap-3 ${themeChange ? 'bg-blue' : "bg-white"}`}>
        <div>
          <GoIcons.GoSearch className={`${themeChange ? 'text-gray-100' : 'text-blue'}`} />
        </div>
        <div className='w-full'>
          <input value={searchValue} onChange={(e) => {
            setSearchValue(e.target.value);
            handleChange(searchValue);
          }} type="text" className={`outline-none bg-transparent py-4 px-0 h-full box-border block w-full ${themeChange ? 'text-gray-100' : 'text-blue'}`} placeholder='Search for a country...' />
        </div>
      </form>
    </>
  )
}

export default SearchInput