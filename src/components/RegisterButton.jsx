import React from 'react'

const RegisterButton = () => {
  return (
    <div className=' m-[10px]'>
        <button className='flex items-center gap-[10px] cursor-pointer border border-[#EB664E] py-[19px] px-[50px] rounded-[30px] h-[50px] hover:bg-[#EB664E] hover:text-[var(--white)] focus:bg-[#EB664E] focus:text-[var(--white)] active:bg-[#EB664E] active:text-[var(--white)] transition-all duration-300 ease-in-out'>
            İndi Qeydiyyatdan Keçin
        </button>
    </div>
  )
}

export default RegisterButton