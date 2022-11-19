import React from "react";
import { Link } from "react-router-dom";
import SelectComp from "../components/SelectComp";

const AskRoofOrientation = () => {
  const [roofOrientation, setRoofOrientation] = React.useState(
    localStorage.getItem("roofOrientation")
  );

  const setSelected = (number) => {
    setRoofOrientation(number);
    localStorage.setItem("roofOrientation", number);
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
          <h1 className="ml-32 mr-72 heading flex-1 leading-[60px] text-center">
            Quelle est l'orientation du pan de toiture où vous souhaitez
            installer vos panneaux photovoltaïques ?
          </h1>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-2 gap-6">
          <SelectComp
            selected={roofOrientation === "1"}
            setSelected={() => setSelected("1")}
            text="Est"
          />
          <SelectComp
            selected={roofOrientation === "2"}
            setSelected={() => setSelected("2")}
            text="Sud"
          />
          <SelectComp
            selected={roofOrientation === "3"}
            setSelected={() => setSelected("3")}
            text={"Sud-Est"}
          />
          <SelectComp
            selected={roofOrientation === "4"}
            setSelected={() => setSelected("4")}
            text={"Sud-Est"}
          />
          <SelectComp
            selected={roofOrientation === "5"}
            setSelected={() => setSelected("5")}
            text={"Nord-Est"}
          />
          <SelectComp
            selected={roofOrientation === "6"}
            setSelected={() => setSelected("6")}
            text={"Sud-Ouest"}
          />
          <SelectComp
            selected={roofOrientation === "7"}
            setSelected={() => setSelected("7")}
            text={"Sud-Ouest"}
          />
          <SelectComp
            selected={roofOrientation === "8"}
            setSelected={() => setSelected("8")}
            text={"Ouest"}
          />
        </div>

        <Link to={`/roofarea`}>
          <button disabled={!roofOrientation} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskRoofOrientation;
