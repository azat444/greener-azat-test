import React from "react";

const SelectComp = ({ selected, setSelected, text, isMobile }) => {
  return (
    <div
      onClick={setSelected}
      className={`${
        isMobile
          ? "w-[342px] max-h-[50px] rounded-[14px]"
          : "w-[400px] max-h-[72px] rounded-[20px]"
      } flex items-center justify-center border-2 border-[#28c985] p-6 ${
        selected && "bg-[#E9FFF6]"
      }`}
    >
      <p
        className={`flex-1 nunito font-semibold ${
          isMobile ? "text-base" : "text-[22px]"
        }`}
      >
        {text}
      </p>
      <div
        className={`${
          isMobile ? "h-[18px] w-[18px]" : "h-[27px] w-[27px]"
        } border border-black rounded-full ${selected && "lineargradient"} `}
      ></div>
    </div>
  );
};

export default SelectComp;
