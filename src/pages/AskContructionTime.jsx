import React from "react";
import { Link } from "react-router-dom";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskContructionTime = () => {
  const [constructionTime, setConstructionTime] = React.useState(
    localStorage.getItem("constructionTime")
  );

  const isMobile = useCheckMobileScreen();

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/">
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
              De quand date la construction de {!isMobile && <br />}
              votre logement ?
            </h1>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-4 xl:gap-28 items-center justify-center">
          <div
            className={`item ${
              constructionTime === "1" && "mobileSelected xl:selected"
            } ${isMobile && "!w-[160px] !h-[152px]"}`}
            id="option1"
            onClick={() => {
              setConstructionTime("1");
              localStorage.setItem("constructionTime", "1");
            }}
          >
            <img
              className={isMobile && "w-[73px] h-[73px]"}
              src="./assets/calender.svg"
              alt="Calender"
            />
            <p
              className={`text-calender ${
                isMobile && "!text-base !leading-[17px]"
              }`}
            >
              Moins de 2 ans
            </p>
          </div>

          <div
            className={`item ${
              constructionTime === "2" && "mobileSelected xl:selected"
            } ${isMobile && "!w-[160px] !h-[152px]"}`}
            id="option2"
            onClick={() => {
              setConstructionTime("2");
              localStorage.setItem("constructionTime", "2");
            }}
          >
            <img
              className={isMobile && "w-[73px] h-[73px]"}
              src="./assets/calender.svg"
              alt="Calender"
            />
            <p
              className={`text-calender ${
                isMobile && "!text-base !leading-[17px]"
              }`}
            >
              Entre 2 et 15 ans
            </p>
          </div>

          <div
            className={`item ${
              constructionTime === "3" && "mobileSelected xl:selected"
            } ${isMobile && "!w-[160px] !h-[152px]"}`}
            id="option3"
            onClick={() => {
              setConstructionTime("3");
              localStorage.setItem("constructionTime", "3");
            }}
          >
            <img
              className={isMobile && "w-[73px] h-[73px]"}
              src="./assets/calender.svg"
              alt="Calender"
            />
            <p
              className={`text-calender ${
                isMobile && "!text-base !leading-[17px]"
              }`}
            >
              Plus de 15 ans
            </p>
          </div>
        </div>
        <Link to={constructionTime === "1" ? "/noteligible" : "/area"}>
          <button
            disabled={!constructionTime}
            className={`button ${isMobile && "mt-10"}`}
          >
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskContructionTime;
