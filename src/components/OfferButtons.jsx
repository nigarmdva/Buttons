import React from "react";

const OfferButtons = () => {
  const buttons = ["Bütün", "Satılıq", "Kirayə"];
  return (
    <div className="flex items-center gap-[10px] m-[10px]">
      {buttons.map((button, index) => {
        return (
          <button key={index} className="cursor-pointer flex items-center bg-[var(--white)] text-[var(--primary-color)] border border-[var(--primary-color)] px-[30px] py-[19px] rounded-[30px] hover:bg-[var(--primary-color)] hover:text-[var(--white)] transition-all duration-300 ease-in-out focus:bg-[var(--primary-color)] focus:text-[var(--white)] h-[50px] active:bg-[var(--primary-color)] active:text-[var(--white)]">
            <span >{button}</span>
          </button>
        );
      })}
    </div>
  );
};

export default OfferButtons;
