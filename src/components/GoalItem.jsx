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
          ? "w-80 h-20 rounded-[1.25rem] border py-3 px-4"
          : "w-[44rem] rounded-[2.5rem] border-2 py-10 px-9"
      } ${selected && "mobileSelected xl:selected"}`}
      onClick={() => {
        setGoal(number);
        localStorage.setItem("goal", number);
      }}
    >
      <div className={`flex w-full ${isMobile ? "gap-3" : "gap-9"}`}>
        <div className="flex items-center justify-center">
          <img className={isMobile ? "w-9 h-10" : ""} src={icon} alt="Goal1" />
        </div>
        <div className="flex-1 ">
          <p
            className={`nunito font-bold ${
              isMobile ? "text-sm leading-5" : "text-2xl"
            } highlight-text`}
          >
            {heading}
          </p>
          <p
            className={`text-[#999999] nunito font-medium ${
              isMobile ? "text-sm leading-5" : "text-2xl"
            }`}
          >
            {text}
          </p>
        </div>
        <div
          className={`${
            isMobile ? "w-7 h-7 !rounded-lg" : "w-14 h-14 rounded-2xl"
          } flex items-center border border-[#C8CCD8] justify-center m-auto ${
            selected && "selected-arrow"
          }`}
        >
          {selected && (
            <img
              className={isMobile && "w-4 h-3"}
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
