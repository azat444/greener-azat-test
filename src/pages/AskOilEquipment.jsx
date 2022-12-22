import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { getNextPath } from "./AskHeatingEnergy";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskOilEquipment = () => {
  const isMobile = useCheckMobileScreen();
  const [oilEquipment, setOilEquipment] = React.useState("");
  // const [oilEquipment, setOilEquipment] = React.useState(
  //   localStorage.getItem("oilEquipment")
  // );

  const setSelected = (number) => {
    setOilEquipment(number);
    localStorage.setItem("oilEquipment", number);
  };
  let navigate = useNavigate();

  React.useEffect(() => {
    if (oilEquipment) {
      navigate(getNextPath());
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oilEquipment]);

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
              Quel type d'équipement au fioul est
              <br /> installé ?
            </h1>
          </div>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-6">
          <HeatEnergyItem
            icon={"./assets/oil1.svg"}
            text={"Chaudière gaz à condensation"}
            number={"1"}
            selected={oilEquipment === "1"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-14 h-20"}
          />
          <HeatEnergyItem
            icon={"./assets/oil2.svg"}
            text={"Chaudière à bois"}
            number={"2"}
            selected={oilEquipment === "2"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-20 h-20"}
          />
          <HeatEnergyItem
            icon={"./assets/oil3.svg"}
            text={"Chaudière fioul à condensation"}
            number={"3"}
            selected={oilEquipment === "3"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-20 h-20"}
          />
        </div>

        {/* <Link to={getNextPath()}>
          <button disabled={!oilEquipment} className="button mt-6">
            CONTINUER
          </button>
        </Link> */}
      </section>
    </>
  );
};

export default AskOilEquipment;
