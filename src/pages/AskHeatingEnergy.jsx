import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

export const getNextPath = () => {
  const goals = JSON.parse(localStorage.getItem("goals"));
  if (goals.goal3) {
    return "/solar";
  }
  return "/rooforientation";
};

const AskHeatingEnergy = () => {
  const isMobile = useCheckMobileScreen();
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

      <section className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/goals">
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
              Quelle est l’énergie de chauffage
              <br />
              actuelle de votre logement ?
            </h1>
          </div>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <HeatEnergyItem
            icon={"./assets/heat1.svg"}
            text={"Chauffage au Fioul"}
            number={"1"}
            selected={heatingEnergy === "1"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : "w-[54px] h-[82px]"}
          />
          <HeatEnergyItem
            icon={"./assets/heat2.svg"}
            text={"Chauffage Éléctrique"}
            number={"2"}
            selected={heatingEnergy === "2"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : "w-[84px] h-[84px]"}
          />
          <HeatEnergyItem
            icon={"./assets/heat3.svg"}
            text={"Chauffage au Gaz"}
            number={"3"}
            selected={heatingEnergy === "3"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : "w-[85px] h-[85px]"}
          />
          <HeatEnergyItem
            icon={"./assets/heat4.svg"}
            text={"Chauffage au Bois"}
            number={"4"}
            selected={heatingEnergy === "4"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : "w-[65px] h-[90px]"}
          />
          <HeatEnergyItem
            icon={"./assets/heat5.svg"}
            text={"Pompe à chaleur"}
            number={"5"}
            selected={heatingEnergy === "5"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : "w-[110px] h-[110px]"}
          />
          <HeatEnergyItem
            icon={"./assets/heat6.svg"}
            text={"Chauffage au Charbon"}
            number={"6"}
            selected={heatingEnergy === "6"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : "w-[115px] h-[80px]"}
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
          <button disabled={!heatingEnergy} className="button mt-6">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskHeatingEnergy;
