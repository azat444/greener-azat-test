import React from "react";
import NumberInput from "../components/NumberInput";
import { generateURLstring } from "../util/generateURLstring";

const AskGarage = () => {
  const [garage, setGarage] = React.useState(localStorage.getItem("garage"));

  const changeHandler = (e) => {
    setGarage(e.target.value);
    localStorage.setItem("garage", e.target.value);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center md:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <NumberInput
        state={garage}
        changeHandler={changeHandler}
        backNav="/isolate"
        nextNav={generateURLstring()}
        text1={"Quelle est la surface de votre garage à"}
        text2={" isoler ?"}
        label={"Surface en m2"}
      />
    </>
  );
};

export default AskGarage;
