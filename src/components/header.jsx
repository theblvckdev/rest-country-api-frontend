import React, { useContext } from 'react'
import * as LuIcons from 'react-icons/lu'
import { ThemeContext } from '../context/themeContext'

const Header = () => {
  const { themeChange, handleThemeChange } = useContext(ThemeContext);

  return (
    <>
      <header className={themeChange ? 'shadow bg-blue' : 'shadow bg-white'}>
        <div className="w-11/12 mx-auto py-4">
          <div className="flex items-center">
            <div className="mr-auto">
              <h2 className={`text-xl ${themeChange ? 'text-gray-100' : 'text-blue'} font-bold font-NunitoSans`}>Where in the world?</h2>
            </div>
            <div>
              <button onClick={handleThemeChange} className={`bg-transparent border-0 outline-none flex items-center gap-3 capitalize ${themeChange ? 'text-gray-100' : 'text-blue'}`}>
                {themeChange ?
                  <>
                    <LuIcons.LuSun />
                    <span>Light mode</span>
                  </> : <>
                    <LuIcons.LuMoon />
                    <span>Dark mode</span>
                  </>}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header