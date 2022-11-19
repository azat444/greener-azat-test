import React from "react";
import { Link } from "react-router-dom";

const AskElectricBill = () => {
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
      <section className="flex flex-col gap-24 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to={"/slopechoice2"}>
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 text-center">
            Quel est le montant de votre facture <br /> d’électricité ?
          </h1>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <input
            className="input w-[350px] bg-transparent"
            type="number"
            value={electricBill}
            onChange={changeHandler}
          />
          <p className="font-bold text-[50px]">/ mois</p>
        </div>

        <Link to={"/accomodationaffected"}>
          <button disabled={!electricBill} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskElectricBill;
