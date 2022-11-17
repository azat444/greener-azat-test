import React from "react";
import NumberInput from "../components/NumberInput";

const AskwallArea = () => {
  const [wallarea, setwallarea] = React.useState(
    localStorage.getItem("wallarea")
  );

  const changeHandler = (e) => {
    setwallarea(e.target.value);
    localStorage.setItem("wallarea", e.target.value);
  };

  const getNextPath = () => {
    const goals = JSON.parse(localStorage.getItem("goals"));
    console.log(goals);
    if (goals.goal2) {
      return "/heatenergy";
    }
    if (goals.goal3) {
      return "/solar";
    }
    return "/rooforientation";
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center md:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <NumberInput
        state={wallarea}
        changeHandler={changeHandler}
        backNav="/isolate"
        nextNav={getNextPath()}
        text1={"Quelle est la surface des murs à isoler"}
        text2={"?"}
        label={"Surface en m2"}
      />
    </>
  );
};

export default AskwallArea;
