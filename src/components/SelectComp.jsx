import React from "react";

const SelectComp = ({ selected, setSelected, text, isMobile }) => {
  return (
    <div
      onClick={setSelected}
      className={`${
        isMobile
          ? "w-80 max-h-12 rounded-xl"
          : "w-96 max-h-20 rounded-[1.25rem]"
      } flex items-center justify-center border-2 border-[#28c985] p-6 ${
        selected && "bg-[#E9FFF6]"
      }`}
    >
      <p
        className={`flex-1 nunito font-semibold ${
          isMobile ? "text-base" : "text-xl"
        }`}
      >
        {text}
      </p>
      <div
        className={`${
          isMobile ? "w-4 h-4" : "h-7 w-7"
        } border border-black rounded-full ${selected && "lineargradient"} `}
      ></div>
    </div>
  );
};

export default SelectComp;
