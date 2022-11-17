import React from "react";
import { Link } from "react-router-dom";

const NameInput = ({
  state,
  changeHandler,
  backNav,
  nextNav,
  text1,
  text2,
  label,
}) => {
  return (
    <section className="flex flex-col gap-24 items-center">
      <div className="flex items-center gap-2 w-[100vw]">
        <div className="ml-28">
          <Link to={backNav}>
            <img src="./assets/arrow.svg" alt="Back" />
          </Link>
        </div>
        <h1 className="ml-32 mr-72 heading flex-1 text-center my-0">
          {text1}
          <br />
          {text2}
        </h1>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <label>{label}</label>
        <input
          className="input bg-transparent"
          type="text"
          value={state}
          onChange={changeHandler}
        />
      </div>

      <Link to={nextNav}>
        <button disabled={state === ""} className="button">
          CONTINUER
        </button>
      </Link>
    </section>
  );
};

export default NameInput;