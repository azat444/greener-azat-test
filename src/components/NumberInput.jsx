import React from "react";
import { Link } from "react-router-dom";

const NumberInput = ({
  state,
  changeHandler,
  backNav,
  nextNav,
  text1,
  text2,
  label,
  isMobile,
}) => {
  return (
    <section className="flex h-[85vh] flex-col gap-4 xl:gap-24 items-center">
      <div className="flex items-center">
        <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
          <Link to={backNav}>
            <img
              className={isMobile && "w-[27px] h-[27px]"}
              src="./assets/arrow.svg"
              alt="Back"
            />
          </Link>
        </div>
        <div className="flex-1 flex items-center gap-2">
          <h1
            className={
              isMobile
                ? "inter text-2xl text-center font-bold leading-[29px] px-6 py-4"
                : "mx-auto heading flex-1 text-center lg:text-5xl"
            }
          >
            {text1} <br /> {text2}
          </h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2 xl:gap-8 items-center justify-center">
        <label className="text-xs xl:text-base">{label}</label>
        <input
          className={`input bg-transparent ${
            isMobile &&
            "!w-[332px] !h-[40px] !rounded-[10px] !border !text-base !leading-7 !px-3"
          }`}
          type="number"
          value={state}
          onChange={changeHandler}
        />
      </div>

      <Link to={nextNav}>
        <button
          disabled={state === "" || !state}
          className={`button ${isMobile && "mt-24 !mb-12"}`}
        >
          CONTINUER
        </button>
      </Link>
    </section>
  );
};

export default NumberInput;
