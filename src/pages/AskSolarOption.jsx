import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskSolarOption = () => {
  const isMobile = useCheckMobileScreen();
  const [solarOption, setsolarOption] = React.useState(
    localStorage.getItem("solarOption")
  );

  const handleSelect = (number) => {
    setsolarOption(number);
    localStorage.setItem("solarOption", number);
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
              Quel équipement solaire souhaitez-vous installer ?
            </h1>
          </div>
        </div>

        <div className="flex-1 items-center grid grid-cols-2 gap-6 xl:gap-28">
          <HeatEnergyItem
            icon={"./assets/solar1.svg"}
            text={"Panneaux Solaires Photovoltaïques"}
            number={"1"}
            selected={solarOption === "1"}
            setSelected={() => handleSelect("1")}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : ""}
          />
          <HeatEnergyItem
            icon={"./assets/solar2.svg"}
            text={"Système Solaire Combiné"}
            number={"2"}
            selected={solarOption === "2"}
            setSelected={() => handleSelect("2")}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : ""}
          />
        </div>
        <Link to={"/rooforientation"}>
          <button disabled={!solarOption} className="button mt-6">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskSolarOption;
