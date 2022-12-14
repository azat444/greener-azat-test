import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { getNextPath } from "./AskHeatingEnergy";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskGasEquipment = () => {
  const isMobile = useCheckMobileScreen();
  const [gasEquipment, setGasEquipment] = React.useState("");
  // const [gasEquipment, setGasEquipment] = React.useState(
  //   localStorage.getItem("gasEquipment")
  // );

  const setSelected = (number) => {
    setGasEquipment(number);
    localStorage.setItem("gasEquipment", number);
  };

  let navigate = useNavigate();
  React.useEffect(() => {
    if (gasEquipment) {
      navigate(getNextPath());
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gasEquipment]);

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
                  : "mx-auto heading flex-1 text-center lg:text-5xl"
              }
            >
              Quel type d'équipement au gaz est
              <br /> installé ?
            </h1>
          </div>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          <HeatEnergyItem
            icon={"./assets/gas1.svg"}
            text={"Chaudière à condensation"}
            number={"1"}
            selected={gasEquipment === "1"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-14 h-20"}
          />
          <HeatEnergyItem
            icon={"./assets/gas2.svg"}
            text={"Autre qu’à condensation"}
            number={"2"}
            selected={gasEquipment === "2"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-14 h-20"}
          />
          <HeatEnergyItem
            icon={"./assets/gas3.svg"}
            text={"Radiateur gaz"}
            number={"3"}
            selected={gasEquipment === "3"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-14 h-20"}
          />
          <HeatEnergyItem
            icon={"./assets/gas4.svg"}
            text={"Poêle au gaz"}
            number={"4"}
            selected={gasEquipment === "4"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-14 h-20"}
          />
        </div>

        {/* <Link to={getNextPath()}>
          <button disabled={!gasEquipment} className="button mt-6">
            CONTINUER
          </button>
        </Link> */}
      </section>
    </>
  );
};

export default AskGasEquipment;
