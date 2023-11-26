import React, { useContext } from 'react'
import * as GoIcons from 'react-icons/go'
import { ThemeContext } from '../context/themeContext'

const SearchInput = () => {
  const { themeChange } = useContext(ThemeContext);

  return (
    <>
      <form action="#" className={`flex items-center rounded-md px-5 shadow gap-3 ${themeChange ? 'bg-blue' : "bg-white"}`}>
        <div>
          <GoIcons.GoSearch className={`${themeChange ? 'text-gray-100' : 'text-blue'}`} />
        </div>
        <div>
          <input type="text" className={`outline-none bg-transparent py-4 px-0 h-full box-border w-full ${themeChange ? 'text-gray-100' : 'text-blue'}`} placeholder='Search for a country...' />
        </div>
      </form>
    </>
  )
}

export default SearchInput