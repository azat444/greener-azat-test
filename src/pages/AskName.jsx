import React from "react";
import { Link } from "react-router-dom";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskName = () => {
  const isMobile = useCheckMobileScreen();
  const [firstName, setFirstName] = React.useState(
    localStorage.getItem("firstName")
  );
  const [lastName, setLastName] = React.useState(
    localStorage.getItem("lastName")
  );

  const changeFirstNameHandler = (e) => {
    setFirstName(e.target.value);
    localStorage.setItem("firstName", e.target.value);
  };

  const changeLastNameHandler = (e) => {
    setLastName(e.target.value);
    localStorage.setItem("lastName", e.target.value);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/accomodationaffected">
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
              Comment vous appelez-vous ?
            </h1>
          </div>
        </div>

        <div
          className={`flex-1 flex ${isMobile ? "flex-col" : "flex-row"} gap-16`}
        >
          <div className="flex flex-col gap-2 xl:gap-8 justify-center">
            <label
              htmlFor="firstName"
              className={`text-left ${isMobile ? "text-sm" : ""}`}
            >
              Prénom
            </label>
            <input
              id="firstName"
              className={`input ${
                isMobile && "!w-[320px] !h-[60px] !text-base !p-3"
              } bg-transparent`}
              type="text"
              value={firstName}
              onChange={changeFirstNameHandler}
            />
          </div>
          <div className="flex flex-col gap-2 xl:gap-8 justify-center">
            <label
              htmlFor="lastName"
              className={`text-left ${isMobile ? "text-sm" : ""}`}
            >
              Nom
            </label>
            <input
              id="lastName"
              className={`input ${
                isMobile && "!w-[320px] !h-[60px] !text-base !p-3"
              } bg-transparent`}
              type="text"
              value={lastName}
              onChange={changeLastNameHandler}
            />
          </div>
        </div>

        <Link to={"/telephone"}>
          <button
            disabled={firstName === "" || lastName === ""}
            className="button mt-6"
          >
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskName;
