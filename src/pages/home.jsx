import React from 'react'
import SearchInput from '../components/searchInput'
import FilterBtn from '../components/filterBtn'

const Home = () => {
  return (
    <>
      <section className='w-11/12 mx-auto'>
        <div className="mt-10">
          <div className="flex">
            <div className="mr-auto">
              <SearchInput />
            </div>
            <div>
              <FilterBtn />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home