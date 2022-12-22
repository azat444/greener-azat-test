import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SelectComp from "../components/SelectComp";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskRoofOrientation = () => {
  const isMobile = useCheckMobileScreen();
  const [roofOrientation, setRoofOrientation] = React.useState("");
  // const [roofOrientation, setRoofOrientation] = React.useState(
  //   localStorage.getItem("roofOrientation")
  // );

  const setSelected = (number) => {
    setRoofOrientation(number);
    localStorage.setItem("roofOrientation", number);
  };

  let navigate = useNavigate();

  React.useEffect(() => {
    if (roofOrientation) {
      navigate("/roofarea");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roofOrientation]);

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/solar">
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
              Quelle est l'orientation du pan de toiture où vous souhaitez
              installer vos panneaux photovoltaïques ?
            </h1>
          </div>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-6 pb-20">
          <SelectComp
            selected={roofOrientation === "1"}
            setSelected={() => setSelected("1")}
            text="Est"
            isMobile={isMobile}
          />
          <SelectComp
            selected={roofOrientation === "2"}
            setSelected={() => setSelected("2")}
            text="Sud"
            isMobile={isMobile}
          />
          <SelectComp
            selected={roofOrientation === "3"}
            setSelected={() => setSelected("3")}
            text={"Sud-Est"}
            isMobile={isMobile}
          />
          <SelectComp
            selected={roofOrientation === "4"}
            setSelected={() => setSelected("4")}
            text={"Sud-Est"}
            isMobile={isMobile}
          />
          <SelectComp
            selected={roofOrientation === "5"}
            setSelected={() => setSelected("5")}
            text={"Nord-Est"}
            isMobile={isMobile}
          />
          <SelectComp
            selected={roofOrientation === "6"}
            setSelected={() => setSelected("6")}
            text={"Sud-Ouest"}
            isMobile={isMobile}
          />
          <SelectComp
            selected={roofOrientation === "7"}
            setSelected={() => setSelected("7")}
            text={"Sud-Ouest"}
            isMobile={isMobile}
          />
          <SelectComp
            selected={roofOrientation === "8"}
            setSelected={() => setSelected("8")}
            text={"Ouest"}
            isMobile={isMobile}
          />
        </div>

        {/* <Link to={`/roofarea`}>
          <button disabled={!roofOrientation} className="button mt-6 xl:mt-0">
            CONTINUER
          </button>
        </Link> */}
      </section>
    </>
  );
};

export default AskRoofOrientation;
