import React from "react";
import { Link } from "react-router-dom";

const EndScreen = () => {
  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="flex flex-col gap-24 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to="/telephone">
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 text-center">
            Merci ! Vos informations sont enregistrés, vous serrez contactez
            rapidement
          </h1>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <img src={"./assets/endscreen.png"} alt="Phone" />
        </div>
      </section>
    </>
  );
};

export default EndScreen;
