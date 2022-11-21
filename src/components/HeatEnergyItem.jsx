import React from "react";

const HeatEnergyItem = ({
  icon,
  text,
  selected,
  setSelected,
  number,
  size,
  isMobile,
  mobileSize,
}) => {
  return (
    <div
      className={`${
        isMobile ? mobileSize : "h-[206px] w-[214px]"
      } flex flex-col items-center justify-center ${
        isMobile
          ? "gap-3 border rounded-[30px]"
          : "gap-6 border-2 rounded-[42px]"
      } border-[#c8ccd8] bg-white ${selected && "selected"}`}
      onClick={() => setSelected(number)}
    >
      <img className={size} src={icon} alt="Icon" />
      <p
        className={`nunito w-[200px] text-center ${
          isMobile ? "text-[16px]" : "text-[22px]"
        } leading-[22px] font-semibold w-fit px-2`}
      >
        {text}
      </p>
    </div>
  );
};

export default HeatEnergyItem;
