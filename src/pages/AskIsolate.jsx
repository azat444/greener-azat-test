import React from "react";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";

const AskIsolate = () => {
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
      <nav className="h-32 py-8 px-28 flex justify-center md:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>
      <section className="flex flex-col gap-24 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to="/goals">
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 text-center">
            Que voulez-vous isoler ?
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-6">
          <HeatEnergyItem
            icon={"./assets/isolate1.svg"}
            text={"Isolation garage"}
            number={"1"}
            selected={isolate.isolate1}
            setSelected={() => handleSelect(1)}
          />
          <HeatEnergyItem
            icon={"./assets/isolate2.svg"}
            text={"Isolation des combles"}
            number={"2"}
            selected={isolate.isolate2}
            setSelected={() => handleSelect(2)}
          />
          <HeatEnergyItem
            icon={"./assets/isolate3.svg"}
            text={"Isolation du sous-sol"}
            number={"3"}
            selected={isolate.isolate3}
            setSelected={() => handleSelect(3)}
          />
          <HeatEnergyItem
            icon={"./assets/isolate4.svg"}
            text={"Isolation du vide sanitaire"}
            number={"4"}
            selected={isolate.isolate4}
            setSelected={() => handleSelect(4)}
          />
          <HeatEnergyItem
            icon={"./assets/isolate5.svg"}
            text={"Isolation des murs"}
            number={"5"}
            selected={isolate.isolate5}
            setSelected={() => handleSelect(5)}
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
            className="button"
          >
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskIsolate;
