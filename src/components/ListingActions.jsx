import React from 'react'

const ListingActions = () => {
    const buttons=["Hamısına bax","Bütün satılıq evlər","Bütün kirayə evlər"]
  return (
    <div className="flex gap-[10px] m-[10px]">
        {buttons.map((button,index)=>{
            return(
                <button key={index} className="cursor-pointer  flex items-center bg-[var(--primary-color)]  border border-[var(--primary-color)]] text-[var(--white)] py-[19px] px-[30px] rounded-[30px] hover:bg-[var(--white)] hover:text-[var(--primary-color)] focus:bg-[var(--white)] focus:text-[var(--primary-color)] active:bg-[var(--white)] active:text-[var(--primary-color)] h-[50px] transition-all duration-300 ease-in-out">{button}</button>
            )
        })}
    </div>
  )
}

export default ListingActions