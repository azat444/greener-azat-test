import React from "react";
import { Link } from "react-router-dom";
import SelectComp from "../components/SelectComp";

const AskSlopeChoice = () => {
  const [slopeChoice, setslopeChoice] = React.useState(
    localStorage.getItem("slopeChoice")
  );

  const setSelected = (number) => {
    setslopeChoice(number);
    localStorage.setItem("slopeChoice", number);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="flex flex-col gap-12 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to="/slopechoice2">
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
            selected={slopeChoice === "1"}
            setSelected={() => setSelected("1")}
            text="Tuile mécanique"
          />
          <SelectComp
            selected={slopeChoice === "2"}
            setSelected={() => setSelected("2")}
            text="Ardoise"
          />
          <SelectComp
            selected={slopeChoice === "3"}
            setSelected={() => setSelected("3")}
            text={"Bac acier"}
          />
          <SelectComp
            selected={slopeChoice === "4"}
            setSelected={() => setSelected("4")}
            text={"Autre"}
          />
        </div>

        <Link to={`/electricbill`}>
          <button disabled={!slopeChoice} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskSlopeChoice;
