import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskwallInsulation = () => {
  const isMobile = useCheckMobileScreen();
  const [wallInsulation, setwallInsulation] = React.useState("");

  const handleSelect = (number) => {
    setwallInsulation(number);
    localStorage.setItem("wallInsulation", number);
  };

  let navigate = useNavigate();

  React.useEffect(() => {
    if (wallInsulation) {
      return navigate("/wallArea");
    }
  }, [wallInsulation]);

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
              Quel type d’isolation des murs souhaitez-vous faire ?
            </h1>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 flex-1 ${isMobile ? "gap-8" : "gap-28"}`}
        >
          <HeatEnergyItem
            icon={"./assets/wallIns1.svg"}
            text={"Intérieurs"}
            number={"1"}
            selected={wallInsulation === "1"}
            setSelected={() => handleSelect("1")}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : ""}
          />
          <HeatEnergyItem
            icon={"./assets/wallIns2.svg"}
            text={"Attenant garage"}
            number={"2"}
            selected={wallInsulation === "2"}
            setSelected={() => handleSelect("2")}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : ""}
          />
        </div>
        {/* <Link to={"/wallArea"}>
          <button disabled={!wallInsulation} className="button">
            CONTINUER
          </button>
        </Link> */}
      </section>
    </>
  );
};

export default AskwallInsulation;
