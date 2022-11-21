import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskIsolate = () => {
  const isMobile = useCheckMobileScreen();

  const [isolate, setIsolate] = React.useState({
    isolate1: false,
    isolate2: false,
    isolate3: false,
    isolate4: false,
    isolate5: false,
  });
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    const isolateFromLocalStorage = JSON.parse(localStorage.getItem("isolate"));
    if (isolateFromLocalStorage) {
      setIsolate(isolateFromLocalStorage);
    }
  }, []);

  const generateURLstring = (isolate) => {
    let url = "";
    if (isolate.isolate1) {
      url ? (url += "?garage") : (url += "/garage");
    }
    if (isolate.isolate2) {
      url ? (url += "?atticInsulation") : (url += "/atticInsulation");
    }
    if (isolate.isolate3) {
      url ? (url += "?basementArea") : (url += "/basementArea");
    }
    if (isolate.isolate4) {
      url ? (url += "?crawlSpaceArea") : (url += "/crawlSpaceArea");
    }
    if (isolate.isolate5) {
      url ? (url += "?wallInsulation") : (url += "/wallInsulation");
    }
    setUrl((prev) => url);
  };

  React.useEffect(() => {
    generateURLstring(isolate);
  }, [isolate]);

  const handleSelect = (number) => {
    setIsolate((prev) => ({
      ...prev,
      [`isolate${number}`]: !prev[`isolate${number}`],
    }));
    localStorage.setItem("isolate", JSON.stringify(isolate));
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/goals">
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
              Que voulez-vous isoler ?
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <HeatEnergyItem
            icon={"./assets/isolate1.svg"}
            text={"Isolation garage"}
            number={"1"}
            selected={isolate.isolate1}
            setSelected={() => handleSelect(1)}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : ""}
          />
          <HeatEnergyItem
            icon={"./assets/isolate2.svg"}
            text={"Isolation des combles"}
            number={"2"}
            selected={isolate.isolate2}
            setSelected={() => handleSelect(2)}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[90px] h-[56px]" : ""}
          />
          <HeatEnergyItem
            icon={"./assets/isolate3.svg"}
            text={"Isolation du sous-sol"}
            number={"3"}
            selected={isolate.isolate3}
            setSelected={() => handleSelect(3)}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[85px] h-[73px]" : ""}
          />
          <HeatEnergyItem
            icon={"./assets/isolate4.svg"}
            text={"Isolation du vide sanitaire"}
            number={"4"}
            selected={isolate.isolate4}
            setSelected={() => handleSelect(4)}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[101px] h-[67px]" : ""}
          />
          <HeatEnergyItem
            icon={"./assets/isolate5.svg"}
            text={"Isolation des murs"}
            number={"5"}
            selected={isolate.isolate5}
            setSelected={() => handleSelect(5)}
            isMobile={isMobile}
            mobileSize={"h-[148px] w-[154px]"}
            size={isMobile ? "w-[104px] h-[60px]" : ""}
          />
        </div>
        {/* // TODO: Route to different screens as the user has selected different options*/}
        <Link to={url}>
          <button
            disabled={
              !isolate.isolate1 &&
              !isolate.isolate2 &&
              !isolate.isolate3 &&
              !isolate.isolate4 &&
              !isolate.isolate5
            }
            className="button mt-4"
          >
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskIsolate;
