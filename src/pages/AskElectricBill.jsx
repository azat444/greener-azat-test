import React from "react";
import { Link } from "react-router-dom";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskElectricBill = () => {
  const isMobile = useCheckMobileScreen();
  const [electricBill, setElectricBill] = React.useState(
    localStorage.getItem("electricBill")
  );

  const changeHandler = (e) => {
    setElectricBill(e.target.value);
    localStorage.setItem("electricBill", e.target.value);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <form className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/slopechoice">
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
              Quel est le montant de votre facture d’électricité ?
            </h1>
          </div>
        </div>

        <div
          className={`flex-1 flex ${
            isMobile ? "gap-4" : "gap-8"
          } items-center justify-center`}
        >
          <input
            autoFocus
            className={`input ${
              isMobile ? "!w-52 !h-14 !text-xl !rounded-2xl !p-2" : "!w-96"
            } bg-transparent`}
            type="number"
            value={electricBill}
            onChange={changeHandler}
          />
          <p className={`font-bold ${isMobile ? "text-3xl" : "text-5xl"}`}>
            / mois
          </p>
        </div>

        <Link to={"/accomodationaffected"}>
          <button
            type="submit"
            disabled={!electricBill}
            className="button mt-6"
          >
            CONTINUER
          </button>
        </Link>
      </form>
    </>
  );
};

export default AskElectricBill;
