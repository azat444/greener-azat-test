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
        isMobile ? mobileSize : "h-52 w-56"
      } flex flex-col items-center justify-center ${
        isMobile
          ? "gap-3 border rounded-[1.875rem]"
          : "gap-6 border-2 rounded-[2.625rem]"
      } border-[#c8ccd8] bg-white ${selected && "selected"}`}
      onClick={() => setSelected(number)}
    >
      <img className={size} src={icon} alt="Icon" />
      <p
        className={`nunito w-48 text-center ${
          isMobile ? "text-base px-6" : "text-xl"
        } leading-5 font-semibold w-fit px-2`}
      >
        {text}
      </p>
    </div>
  );
};

export default HeatEnergyItem;
