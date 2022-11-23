import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { getNextPath } from "./AskHeatingEnergy";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskElectricEquipment = () => {
  const isMobile = useCheckMobileScreen();
  const [electricEquipment, setElectricEquipment] = React.useState(
    localStorage.getItem("electricEquipment")
  );

  const setSelected = (number) => {
    setElectricEquipment(number);
    localStorage.setItem("electricEquipment", number);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/heatenergy">
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
              Quel type d'équipement électrique est
              <br /> installé ?
            </h1>
          </div>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          <HeatEnergyItem
            icon={"./assets/electric1.svg"}
            text={"Chaudière électrique"}
            number={"1"}
            selected={electricEquipment === "1"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : "w-[54px] h-[82px]"}
          />
          <HeatEnergyItem
            icon={"./assets/electric2.svg"}
            text={"Plafond chauffant"}
            number={"2"}
            selected={electricEquipment === "2"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : "w-[54px] h-[82px]"}
          />
          <HeatEnergyItem
            icon={"./assets/electric3.svg"}
            text={"Plancher chauffant"}
            number={"3"}
            selected={electricEquipment === "3"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : "w-[54px] h-[82px]"}
          />
          <HeatEnergyItem
            icon={"./assets/electric4.svg"}
            text={"Radiateur électrique"}
            number={"4"}
            selected={electricEquipment === "4"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : "w-[54px] h-[82px]"}
          />
        </div>

        <Link to={getNextPath()}>
          <button disabled={!electricEquipment} className="button mt-6">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskElectricEquipment;
