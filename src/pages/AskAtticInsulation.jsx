import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { generateURLstring } from "../util/generateURLstring";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskAtticInsulation = () => {
  const isMobile = useCheckMobileScreen();

  const [atticInsulation, setAtticInsulation] = React.useState("");

  const handleSelect = (number) => {
    setAtticInsulation(number);
    localStorage.setItem("atticInsulation", number);
  };
  const path = generateURLstring();
  const url = "/atticarea" + path.replace(path[0], "?");

  let navigate = useNavigate();

  React.useEffect(() => {
    if (atticInsulation) {
      return navigate(url);
    }
  }, [atticInsulation]);

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/garage">
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
              L’isolation des combles concerne ?
            </h1>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 flex-1 ${isMobile ? "gap-8" : "gap-28"}`}
        >
          <HeatEnergyItem
            icon={"./assets/attic1.svg"}
            text={"Comble Perdu"}
            number={"1"}
            selected={atticInsulation === "1"}
            setSelected={() => handleSelect("1")}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : ""}
          />
          <HeatEnergyItem
            icon={"./assets/attic2.svg"}
            text={"Comble aménagé"}
            number={"2"}
            selected={atticInsulation === "2"}
            setSelected={() => handleSelect("2")}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : ""}
          />
        </div>
        {/* <Link to={url}>
          <button disabled={!atticInsulation} className="button mt-8">
            CONTINUER
          </button>
        </Link> */}
      </section>
    </>
  );
};

export default AskAtticInsulation;
