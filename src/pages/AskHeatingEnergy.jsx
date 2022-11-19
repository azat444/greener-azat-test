import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";

export const getNextPath = () => {
  const goals = JSON.parse(localStorage.getItem("goals"));
  if (goals.goal3) {
    return "/solar";
  }
  return "/rooforientation";
};

const AskHeatingEnergy = () => {
  const [heatingEnergy, setHeatingEnergy] = React.useState(
    localStorage.getItem("heatingEnergy")
  );
  const setSelected = (number) => {
    setHeatingEnergy(number);
    localStorage.setItem("heatingEnergy", number);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="flex flex-col gap-12 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            {/* //TODO Add the back Link */}
            <Link to="/goals">
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 text-center">
            Quelle est l’énergie de chauffage
            <br />
            actuelle de votre logement ?
          </h1>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-3 gap-6">
          <HeatEnergyItem
            icon={"./assets/heat1.svg"}
            text={"Chauffage au Fioul"}
            size={"w-[54px] h-[82px]"}
            number={"1"}
            selected={heatingEnergy === "1"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/heat2.svg"}
            text={"Chauffage Éléctrique"}
            size={"w-[84px] h-[84px]"}
            number={"2"}
            selected={heatingEnergy === "2"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/heat3.svg"}
            text={"Chauffage au Gaz"}
            size={"w-[85px] h-[85px]"}
            number={"3"}
            selected={heatingEnergy === "3"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/heat4.svg"}
            text={"Chauffage au Bois"}
            size={"w-[65px] h-[90px]"}
            number={"4"}
            selected={heatingEnergy === "4"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/heat5.svg"}
            text={"Pompe à chaleur"}
            size={"w-[110px] h-[110px]"}
            number={"5"}
            selected={heatingEnergy === "5"}
            setSelected={setSelected}
          />
          <HeatEnergyItem
            icon={"./assets/heat6.svg"}
            text={"Chauffage au Charbon"}
            size={"w-[115px] h-[80px]"}
            number={"6"}
            selected={heatingEnergy === "6"}
            setSelected={setSelected}
          />
        </div>

        <Link
          to={`${
            heatingEnergy === "1"
              ? "/oilequiqment"
              : heatingEnergy === "2"
              ? "/electricequipment"
              : heatingEnergy === "3"
              ? "/gasequipment"
              : getNextPath()
          }`}
        >
          <button disabled={!heatingEnergy} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskHeatingEnergy;
