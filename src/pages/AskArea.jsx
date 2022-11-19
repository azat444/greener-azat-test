import React from "react";
import NumberInput from "../components/NumberInput";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskArea = () => {
  const [area, setArea] = React.useState(localStorage.getItem("area"));

  const changeHandler = (e) => {
    setArea(e.target.value);
    localStorage.setItem("area", e.target.value);
  };
  const isMobile = useCheckMobileScreen();

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <NumberInput
        isMobile={isMobile}
        state={area}
        changeHandler={changeHandler}
        backNav="/time"
        nextNav="/goals"
        text1={"Quelle est la surface habitable de"}
        text2={"votre logement ?"}
        label={"Surface en m2"}
      />
    </>
  );
};

export default AskArea;
