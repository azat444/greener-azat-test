import React from "react";
import { Link } from "react-router-dom";

const NotEligibleForRenovation = () => {
  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center md:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="flex flex-col gap-24 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to="/time">
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 text-center">
            Oups... Votre projet n’est pas éligible aux aides
            <br />à la rénovation
          </h1>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <h2 className="heading2">
            Télécharger l’application et soyez rémunerer en fonction des
            ecomoies que vous faites réalisé à votre entourage
          </h2>
          <img src={"./assets/phones.png"} alt="Phone" />
        </div>
      </section>
    </>
  );
};

export default NotEligibleForRenovation;
