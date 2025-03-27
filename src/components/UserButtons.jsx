import React from 'react'

const UserButtons = () => {
  return (
    <div className='flex items-center gap-[10px] m-[10px] font-[var(--font-primary)]'>
        <button className='flex items-center gap-[10px] cursor-pointer'> 
            <img src="./images/user.svg" alt="Invest Home" />
            <span>Daxil ol</span>
        </button>
        <button className='flex items-center cursor-pointer gap-[10px] bg-[var(--primary-color)] text-[var(--white)] px-[26px] py-[15px] rounded-[50px]'>
            <img src="./images/add.svg" alt="Invest Home"/>
            <span className='w-[75px]'>Elan ver</span>
        </button>
    </div>
  )
}

export default UserButtons