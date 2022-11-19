import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { getNextPath } from "./AskHeatingEnergy";

const AskGasEquipment = () => {
  const [gasEquipment, setGasEquipment] = React.useState(
    localStorage.getItem("gasEquipment")
  );

  const setSelected = (number) => {
    setGasEquipment(number);
    localStorage.setItem("gasEquipment", number);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
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
            Quel type d'équipement au gaz est
            <br /> installé ?
          </h1>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-4 gap-6">
          <HeatEnergyItem
            icon={"./assets/gas1.svg"}
            text={"Chaudière à condensation"}
            size={"w-[54px] h-[82px]"}
            number={"1"}
            selected={gasEquipment === "1"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/gas2.svg"}
            text={"Autre qu’à condensation"}
            size={"w-[54px] h-[82px]"}
            number={"2"}
            selected={gasEquipment === "2"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/gas3.svg"}
            text={"Radiateur gaz"}
            size={"w-[54px] h-[82px]"}
            number={"3"}
            selected={gasEquipment === "3"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/gas4.svg"}
            text={"Poêle au gaz"}
            size={"w-[54px] h-[82px]"}
            number={"4"}
            selected={gasEquipment === "4"}
            setSelected={setSelected}
          />
        </div>

        <Link to={getNextPath()}>
          <button disabled={!gasEquipment} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskGasEquipment;
