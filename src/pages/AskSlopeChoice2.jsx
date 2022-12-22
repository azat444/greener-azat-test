import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SelectComp from "../components/SelectComp";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskSlopeChoice2 = () => {
  const isMobile = useCheckMobileScreen();
  const [slopeChoice2, setslopeChoice2] = React.useState("");
  // const [slopeChoice2, setslopeChoice2] = React.useState(
  //   localStorage.getItem("slopeChoice2")
  // );

  const setSelected = (number) => {
    setslopeChoice2(number);
    localStorage.setItem("slopeChoice2", number);
  };

  let navigate = useNavigate();
  React.useEffect(() => {
    if (slopeChoice2) {
      return navigate("/slopechoice");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slopeChoice2]);

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/roofarea">
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
                  : "mx-auto heading flex-1 text-center lg:text-5xl px-24"
              }
            >
              Quelle inclinaison correspond le plus à votre toit ?
            </h1>
          </div>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-1 gap-6">
          <SelectComp
            selected={slopeChoice2 === "1"}
            setSelected={() => setSelected("1")}
            text="0° - Toit plat"
            isMobile={isMobile}
          />
          <SelectComp
            selected={slopeChoice2 === "2"}
            setSelected={() => setSelected("2")}
            text="15° - Méditerranéenne"
            isMobile={isMobile}
          />
          <SelectComp
            selected={slopeChoice2 === "3"}
            setSelected={() => setSelected("3")}
            text={"30° - Classique"}
            isMobile={isMobile}
          />
          <SelectComp
            selected={slopeChoice2 === "4"}
            setSelected={() => setSelected("4")}
            text={"45° - Alsacienne"}
            isMobile={isMobile}
          />
        </div>

        {/* <Link to={`/slopechoice`}>
          <button disabled={!slopeChoice2} className="button mt-6 xl:mt-0">
            CONTINUER
          </button>
        </Link> */}
      </section>
    </>
  );
};

export default AskSlopeChoice2;
