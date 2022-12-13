import React from "react";
import { Link } from "react-router-dom";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskTelephone = () => {
  const isMobile = useCheckMobileScreen();
  const [telephone, settelephone] = React.useState(
    localStorage.getItem("telephone")
  );

  const changeHandler = (e) => {
    settelephone(e.target.value);
    localStorage.setItem("telephone", e.target.value);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <form className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/name">
              <img
                className={isMobile && "w-7 h-7"}
                src="./assets/arrow.svg"
                alt="Back"
              />
            </Link>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <h1
              className={
                isMobile
                  ? "inter text-2xl text-center font-bold leading-7 px-6 py-4"
                  : "mx-auto heading flex-1 text-center lg:text-5xl px-24"
              }
            >
              Quel est votre numéro de téléphone ?
            </h1>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8 items-center justify-center">
          <label className="font-medium text-sm" htmlFor="telephone">
            Téléphone
          </label>
          <div
            className={`flex items-center border-2 border-[#28c985] ${
              isMobile
                ? "w-72 h-14 rounded-[1.25rem] p-2 text-sm"
                : "p-6 w-[37.5rem] h-20 rounded-[1.25rem] text-3xl leading-10"
            } nunito text-[#a9a9a9]`}
          >
            <input
              className="outline-none caret-black flex-1 bg-transparent"
              id="telephone"
              type="number"
              value={telephone}
              autoFocus
              onChange={changeHandler}
            />
            <img
              className={isMobile && "w-6 h-6"}
              src="/assets/telephone.svg"
              alt="Phone"
            />
          </div>
        </div>

        <Link to={"/endscreen"}>
          <button type="submit" disabled={!telephone} className="button mt-12">
            CONTINUER
          </button>
        </Link>
      </form>
    </>
  );
};

export default AskTelephone;
