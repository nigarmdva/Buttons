import React from 'react'

const SearchButton = () => {
  return (
    <div className='m-[10px]'>
        <button className='flex justify-center items-center gap-[17px] cursor-pointer bg-[var(--primary-color)] text-[var(--white)] px-[26px] py-[15px] rounded-[50px] w-[340px] h-[60px] '>
            <img src="././public/images/searchButton.svg" alt="Invest Home" />
            <span>Axtarın</span>
        </button>
    </div>
  )
}

export default SearchButton