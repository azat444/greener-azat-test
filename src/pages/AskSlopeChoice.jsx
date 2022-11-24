import React from "react";
import { Link } from "react-router-dom";
import SelectComp from "../components/SelectComp";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskSlopeChoice = () => {
  const isMobile = useCheckMobileScreen();
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

      <section className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/slopechoice2">
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
                  : "mx-auto heading flex-1 text-center lg:text-5xl px-24"
              }
            >
              Quelle inclinaison correspond le plus à votre toit ?{" "}
            </h1>
          </div>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-1 gap-6">
          <SelectComp
            selected={slopeChoice === "1"}
            setSelected={() => setSelected("1")}
            text="Tuile mécanique"
            isMobile={isMobile}
          />
          <SelectComp
            selected={slopeChoice === "2"}
            setSelected={() => setSelected("2")}
            text="Ardoise"
            isMobile={isMobile}
          />
          <SelectComp
            selected={slopeChoice === "3"}
            setSelected={() => setSelected("3")}
            text={"Bac acier"}
            isMobile={isMobile}
          />
          <SelectComp
            selected={slopeChoice === "4"}
            setSelected={() => setSelected("4")}
            text={"Autre"}
            isMobile={isMobile}
          />
        </div>

        <Link to={`/electricbill`}>
          <button disabled={!slopeChoice} className="button mt-6 xl:mt-0">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskSlopeChoice;
