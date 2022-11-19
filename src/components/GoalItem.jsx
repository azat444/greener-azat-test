import React from "react";

const GoalItem = ({
  icon,
  heading,
  text,
  selected,
  setGoal,
  number,
  isMobile,
}) => {
  return (
    <div
      className={` flex flex-col gap-8 items-center justify-center  border-[#c8ccd8] bg-white ${
        isMobile
          ? "w-[337px] h-[82px] rounded-[20px] border py-3 px-4"
          : "w-[700px] rounded-[40px] border-2 py-10 px-9"
      } ${selected && "mobileSelected xl:selected"}`}
      onClick={() => {
        setGoal(number);
        localStorage.setItem("goal", number);
      }}
    >
      <div className={`flex w-full ${isMobile ? "gap-3" : "gap-9"}`}>
        <div className="flex items-center justify-center">
          <img
            className={isMobile ? "w-[38px] h-[42px]" : ""}
            src={icon}
            alt="Goal1"
          />
        </div>
        <div className="flex-1 ">
          <p
            className={`nunito font-bold ${
              isMobile ? "text-[14px] leading-[29px]" : "text-[26px]"
            } highlight-text`}
          >
            {heading}
          </p>
          <p
            className={`text-[#999999] nunito font-medium ${
              isMobile ? "text-[14px] leading-[29px]" : "text-[26px]"
            }`}
          >
            {text}
          </p>
        </div>
        <div
          className={`${
            isMobile
              ? "w-[30px] h-[30px] !rounded-[7px]"
              : "w-[60px] h-[60px] rounded-[15px]"
          } flex items-center border border-[#C8CCD8] justify-center m-auto ${
            selected && "selected-arrow"
          }`}
        >
          {selected && (
            <img
              className={isMobile && "w-[18px] h-[14px]"}
              src="./assets/tick.svg"
              alt="Tick"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalItem;
