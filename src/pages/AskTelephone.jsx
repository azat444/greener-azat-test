import React from "react";
import { Link } from "react-router-dom";

const AskTelephone = () => {
  const [telephone, settelephone] = React.useState(
    localStorage.getItem("telephone")
  );

  const changeHandler = (e) => {
    settelephone(e.target.value);
    localStorage.setItem("telephone", e.target.value);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center md:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>
      <section className="flex flex-col gap-24 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to={"/name"}>
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 text-center">
            Quel est votre numéro de téléphone ?
          </h1>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center">
          <label className="font-medium" htmlFor="telephone">
            Téléphone
          </label>
          <div className="flex border-2 border-[#28c985] p-[24px] w-[600px] h-[80px] rounded-[20px] nunito text-[#a9a9a9] text-[32px] leading-[58px]">
            <input
              className="outline-none caret-black flex-1 bg-transparent"
              id="telephone"
              type="number"
              value={telephone}
              onChange={changeHandler}
            />
            <img src="/assets/telephone.svg" alt="Phone" />
          </div>
        </div>

        <Link to={"/endscreen"}>
          <button disabled={!telephone} className="button">
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskTelephone;
