import React from "react";
import { Link } from "react-router-dom";
import SelectComp from "../components/SelectComp";

const AskSlopeChoice2 = () => {
  const [slopeChoice2, setslopeChoice2] = React.useState(
    localStorage.getItem("slopeChoice2")
  );

  const setSelected = (number) => {
    setslopeChoice2(number);
    localStorage.setItem("slopeChoice2", number);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center md:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="flex flex-col gap-12 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to="/roofarea">
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 leading-[60px] text-center">
            Quelle inclinaison correspond le plus <br /> à votre toit ?
          </h1>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-1 gap-6">
          <SelectComp
            selected={slopeChoice2 === "1"}
            setSelected={() => setSelected("1")}
            text="0° - Toit plat"
          />
          <SelectComp
            selected={slopeChoice2 === "2"}
            setSelected={() => setSelected("2")}
            text="15° - Méditerranéenne"
          />
          <SelectComp
            selected={slopeChoice2 === "3"}
            setSelected={() => setSelected("3")}
            text={"30° - Classique"}
          />
          <SelectComp
            selected={slopeChoice2 === "4"}
            setSelected={() => setSelected("4")}
            text={"45° - Alsacienne"}
          />
        </div>

        <Link to={`/slopechoice`}>
          <button disabled={!slopeChoice2} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskSlopeChoice2;
