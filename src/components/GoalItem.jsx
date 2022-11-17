import React from "react";

const GoalItem = ({ icon, heading, text, selected, setGoal, number }) => {
  return (
    <div
      className={`py-10 px-9 flex flex-col gap-8 items-center justify-center  border-2 border-[#c8ccd8] rounded-[40px] bg-white w-[700px] ${
        selected && "selected"
      }`}
      onClick={() => {
        setGoal(number);
        localStorage.setItem("goal", number);
      }}
    >
      <div className="flex w-full gap-9">
        <div className="">
          <img src={icon} alt="Goal1" />
        </div>
        <div className="flex-1 ">
          <p className="nunito font-bold text-[26px] highlight-text">
            {heading}
          </p>
          <p className="text-[#999999] nunito font-medium text-[26px]">
            {text}
          </p>
        </div>
        <div
          className={`w-[60px] h-[60px] flex items-center border border-[#C8CCD8] justify-center m-auto ${
            selected && "selected-arrow"
          } rounded-[15px]`}
        >
          {selected && <img src="./assets/tick.svg" alt="Tick" />}
        </div>
      </div>
    </div>
  );
};

export default GoalItem;