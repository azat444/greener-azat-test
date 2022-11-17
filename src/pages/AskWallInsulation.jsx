import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";

const AskwallInsulation = () => {
  const [wallInsulation, setwallInsulation] = React.useState(
    localStorage.getItem("wallInsulation")
  );

  const handleSelect = (number) => {
    setwallInsulation(number);
    localStorage.setItem("wallInsulation", number);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center md:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>
      <section className="flex flex-col gap-24 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to="/garage">
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 text-center">
            L’isolation des combles concerne ?
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-28">
          <HeatEnergyItem
            icon={"./assets/wallIns1.svg"}
            text={"Intérieurs"}
            number={"1"}
            selected={wallInsulation === "1"}
            setSelected={() => handleSelect("1")}
          />
          <HeatEnergyItem
            icon={"./assets/wallIns2.svg"}
            text={"Attenant garage"}
            number={"2"}
            selected={wallInsulation === "2"}
            setSelected={() => handleSelect("2")}
          />
        </div>
        <Link to={"/wallArea"}>
          <button disabled={!wallInsulation} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskwallInsulation;
