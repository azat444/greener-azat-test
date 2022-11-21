import React from "react";
import NumberInput from "../components/NumberInput";
import { generateURLstring } from "../util/generateURLstring";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskatticArea = () => {
  const isMobile = useCheckMobileScreen();
  const [atticArea, setatticArea] = React.useState(
    localStorage.getItem("atticArea")
  );

  const changeHandler = (e) => {
    setatticArea(e.target.value);
    localStorage.setItem("atticArea", e.target.value);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <NumberInput
        state={atticArea}
        changeHandler={changeHandler}
        backNav="/isolate"
        nextNav={generateURLstring()}
        text1={"Quelle est la surface approximative de"}
        text2={"combles à isoler ?"}
        label={"Surface en m2"}
        isMobile={isMobile}
      />
    </>
  );
};

export default AskatticArea;
