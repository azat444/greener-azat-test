import React from "react";
import NameInput from "../components/NameInput";

const AskAccomodationAffected = () => {
  const [accomodationAffected, setAccomodationAffected] = React.useState(
    localStorage.getItem("accomodationAffected")
  );

  const changeHandler = (e) => {
    setAccomodationAffected(e.target.value);
    localStorage.setItem("accomodationAffected", e.target.value);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center md:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <NameInput
        state={accomodationAffected}
        changeHandler={changeHandler}
        backNav="/electricbill"
        nextNav="/name"
        text1={"Où se situe le logement concerné par"}
        type="text"
        text2={"les travaux ?"}
        label={"Adresse"}
      />
    </>
  );
};

export default AskAccomodationAffected;
