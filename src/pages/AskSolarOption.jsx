import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";

const AskSolarOption = () => {
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
      <section className="flex flex-col gap-24 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to="/goals">
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 text-center">
            Quel équipement solaire souhaitez-vous installer ?
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-28">
          <HeatEnergyItem
            icon={"./assets/solar1.svg"}
            text={"Panneaux Solaires Photovoltaïques"}
            number={"1"}
            selected={solarOption === "1"}
            setSelected={() => handleSelect("1")}
          />
          <HeatEnergyItem
            icon={"./assets/solar2.svg"}
            text={"Système Solaire Combiné"}
            number={"2"}
            selected={solarOption === "2"}
            setSelected={() => handleSelect("2")}
          />
        </div>
        <Link to={"/rooforientation"}>
          <button disabled={!solarOption} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskSolarOption;
