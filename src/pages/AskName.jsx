import React from "react";
import { Link } from "react-router-dom";

const AskName = () => {
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
      <section className="flex flex-col gap-24 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to={"/accomodationaffected"}>
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 text-center">
            Comment vous appelez-vous ?
          </h1>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-8 justify-center">
            <label htmlFor="firstName" className="text-left">
              Prénom
            </label>
            <input
              id="firstName"
              className="input w-[350px] bg-transparent"
              type="text"
              value={firstName}
              onChange={changeFirstNameHandler}
            />
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <label htmlFor="lastName" className="text-left">
              Nom
            </label>
            <input
              id="lastName"
              className="input w-[350px] bg-transparent"
              type="text"
              value={lastName}
              onChange={changeLastNameHandler}
            />
          </div>
        </div>

        <Link to={"/telephone"}>
          <button
            disabled={firstName === "" || lastName === ""}
            className="button"
          >
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskName;
