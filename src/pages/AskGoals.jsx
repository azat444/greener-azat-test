import React from "react";
import { Link } from "react-router-dom";
import GoalItem from "../components/GoalItem";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskGoals = () => {
  const [goals, setGoals] = React.useState(
    JSON.parse(localStorage.getItem("goals")) || {
      goal1: false,
      goal2: false,
      goal3: false,
    }
  );
  const isMobile = useCheckMobileScreen();

  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    if (goals.goal1) {
      setUrl(() => "/isolate");
      return;
    }
    if (goals.goal2) {
      setUrl(() => "/heatenergy");
      return;
    }
    if (goals.goal3) {
      setUrl(() => "/solar");
      return;
    }
    setUrl(() => "/goals");
  }, [goals]);

  // React.useEffect(() => {
  //   const goalsFromLocalStorage = JSON.parse(localStorage.getItem("goals"));
  //   if (goalsFromLocalStorage) {
  //     setGoals(goalsFromLocalStorage);
  //   }
  // }, []);

  const handleSelect = (number) => {
    setGoals((prev) => ({
      ...goals,
      [`goal${number}`]: !goals[`goal${number}`],
    }));
  };

  React.useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/area">
              <img
                className={isMobile && "w-7 h-7"}
                src="./assets/arrow.svg"
                alt="Back"
              />
            </Link>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <h1
              className={
                isMobile
                  ? "inter text-2xl text-center font-bold leading-7 px-6 py-4"
                  : "mx-auto heading flex-1 text-center lg:text-5xl"
              }
            >
              Quels sont vos objectifs ?
            </h1>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 xl:gap-12 items-center justify-center">
          <GoalItem
            icon={"./assets/goal1.svg"}
            heading={"Je souhaite isoler mon logement"}
            text={"Eviter les deperditions"}
            selected={goals.goal1}
            setGoal={() => handleSelect(1)}
            number={"1"}
            isMobile={isMobile}
          />
          <GoalItem
            icon={"./assets/goal2.svg"}
            heading={"Changer mon mode de chauffage"}
            text={"Réduire le prix de mes factures"}
            selected={goals.goal2}
            setGoal={() => handleSelect(2)}
            number={"2"}
            isMobile={isMobile}
          />
          <GoalItem
            icon={"./assets/goal3.svg"}
            heading={"Passer au solaire"}
            text={"Devenir autonome"}
            selected={goals.goal3}
            setGoal={() => handleSelect(3)}
            number={"3"}
            isMobile={isMobile}
          />
        </div>

        <Link to={url}>
          <button
            disabled={!goals.goal1 && !goals.goal2 && !goals.goal3}
            className={`button ${isMobile ? "mt-10" : ""}`}
          >
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskGoals;
