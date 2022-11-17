import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { generateURLstring } from "../util/generateURLstring";

const AskAtticInsulation = () => {
  const [atticInsulation, setAtticInsulation] = React.useState(
    localStorage.getItem("atticInsulation")
  );

  const handleSelect = (number) => {
    setAtticInsulation(number);
    localStorage.setItem("atticInsulation", number);
  };
  const path = generateURLstring();
  const url = "/atticarea" + path.replace(path[0], "?");

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
            icon={"./assets/attic1.svg"}
            text={"Comble Perdu"}
            number={"1"}
            selected={atticInsulation === "1"}
            setSelected={() => handleSelect("1")}
          />
          <HeatEnergyItem
            icon={"./assets/attic2.svg"}
            text={"Comble aménagé"}
            number={"2"}
            selected={atticInsulation === "2"}
            setSelected={() => handleSelect("2")}
          />
        </div>
        <Link to={url}>
          <button disabled={!atticInsulation} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskAtticInsulation;
