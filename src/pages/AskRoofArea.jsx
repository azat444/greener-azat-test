import React from "react";
import NumberInput from "../components/NumberInput";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskRoofArea = () => {
  const isMobile = useCheckMobileScreen();
  const [roofArea, setRoofArea] = React.useState(
    localStorage.getItem("roofArea")
  );

  const changeHandler = (e) => {
    setRoofArea(e.target.value);
    localStorage.setItem("roofArea", e.target.value);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <NumberInput
        state={roofArea}
        changeHandler={changeHandler}
        backNav="/rooforientation"
        nextNav="/slopechoice2"
        text1={"Quelle est la surface du pan de toiture"}
        text2={"où poser les panneaux ?"}
        label={"Surface en m2"}
        isMobile={isMobile}
      />
    </>
  );
};

export default AskRoofArea;
