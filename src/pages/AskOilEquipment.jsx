import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { getNextPath } from "./AskHeatingEnergy";

const AskOilEquipment = () => {
  const [oilEquipment, setOilEquipment] = React.useState(
    localStorage.getItem("oilEquipment")
  );

  const setSelected = (number) => {
    setOilEquipment(number);
    localStorage.setItem("oilEquipment", number);
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
            Quel type d'équipement au fioul est
            <br /> installé ?
          </h1>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-3 gap-6">
          <HeatEnergyItem
            icon={"./assets/oil1.svg"}
            text={"Chaudière gaz à condensation"}
            size={"w-[54px] h-[82px]"}
            number={"1"}
            selected={oilEquipment === "1"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/oil2.svg"}
            text={"Chaudière à bois"}
            size={"w-[84px] h-[84px]"}
            number={"2"}
            selected={oilEquipment === "2"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/oil3.svg"}
            text={"Chaudière fioul à condensation"}
            size={"w-[85px] h-[85px]"}
            number={"3"}
            selected={oilEquipment === "3"}
            setSelected={setSelected}
          />
        </div>

        <Link to={getNextPath()}>
          <button disabled={!oilEquipment} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskOilEquipment;
