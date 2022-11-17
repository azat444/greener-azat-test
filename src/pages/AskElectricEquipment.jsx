import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { getNextPath } from "./AskHeatingEnergy";

const AskElectricEquipment = () => {
  const [electricEquipment, setElectricEquipment] = React.useState(
    localStorage.getItem("electricEquipment")
  );

  const setSelected = (number) => {
    setElectricEquipment(number);
    localStorage.setItem("electricEquipment", number);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center md:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="flex flex-col gap-12 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to="/heatenergy">
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 text-center">
            Quel type d'équipement électrique est
            <br /> installé ?
          </h1>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-4 gap-6">
          <HeatEnergyItem
            icon={"./assets/electric1.svg"}
            text={"Chaudière électrique"}
            size={"w-[54px] h-[82px]"}
            number={"1"}
            selected={electricEquipment === "1"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/electric2.svg"}
            text={"Plafond chauffant"}
            size={"w-[54px] h-[82px]"}
            number={"2"}
            selected={electricEquipment === "2"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/electric3.svg"}
            text={"Plancher chauffant"}
            size={"w-[54px] h-[82px]"}
            number={"3"}
            selected={electricEquipment === "3"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/electric4.svg"}
            text={"Radiateur électrique"}
            size={"w-[54px] h-[82px]"}
            number={"4"}
            selected={electricEquipment === "4"}
            setSelected={setSelected}
          />
        </div>

        <Link to={getNextPath()}>
          <button disabled={!electricEquipment} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskElectricEquipment;
