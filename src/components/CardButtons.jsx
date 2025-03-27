import React from "react";

const CardButtons = () => {
  const buttons = [
    "././public/images/search.svg",
    "././public/images/home.svg",
    "././public/images/bed.svg",
  ];
  return (
    <div className="flex gap-[10px] m-[10px]">
      {buttons.map((button, index) => {
        return (
            <button key={index} alt="Invest Home" className="cursor-pointer flex justify-center w-[90px] h-[90px] bg-[var(--primary-color)] rounded-[50%] shadow-[4px_10px_30px_rgba(67,_97,_238,_0.40)]">
                <img src={button} alt="Invest Home" className="w-[40px]"  />
            </button>
        )
      })}
    </div>
  );
};

export default CardButtons;
