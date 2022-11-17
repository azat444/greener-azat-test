import React from "react";

const HeatEnergyItem = ({
  icon,
  text,
  selected,
  setSelected,
  number,
  size,
}) => {
  return (
    <div
      className={`h-[206px] w-[214px] flex flex-col items-center justify-center gap-6 border-2 border-[#c8ccd8] rounded-[42px] bg-white ${
        selected && "selected"
      }`}
      onClick={() => setSelected(number)}
    >
      <img className={size} src={icon} alt="Icon" />
      <p className="nunito w-[200px] text-center text-[22px] leading-[22px] font-semibold">
        {text}
      </p>
    </div>
  );
};

export default HeatEnergyItem;