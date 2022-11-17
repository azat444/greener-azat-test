import React from "react";
import { Link } from "react-router-dom";
import GoalItem from "../components/GoalItem";

const AskGoals = () => {
  const [goals, setGoals] = React.useState(
    JSON.parse(localStorage.getItem("goals")) || {
      goal1: false,
      goal2: false,
      goal3: false,
    }
  );

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
      <nav className="h-32 py-8 px-28 flex justify-center md:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="flex flex-col gap-6 items-center">
        <div className="flex items-center gap-2 w-[100vw]">
          <div className="ml-28">
            <Link to="/area">
              <img src="./assets/arrow.svg" alt="Back" />
            </Link>
          </div>
          <h1 className="ml-32 mr-72 heading flex-1 text-center">
            Quels sont vos objectifs ?
          </h1>
        </div>

        <GoalItem
          icon={"./assets/goal1.svg"}
          heading={"Je souhaite isoler mon logement"}
          text={"Eviter les deperditions"}
          selected={goals.goal1}
          setGoal={() => handleSelect(1)}
          number={"1"}
        />
        <GoalItem
          icon={"./assets/goal2.svg"}
          heading={"Changer mon mode de chauffage"}
          text={"Réduire le prix de mes factures"}
          selected={goals.goal2}
          setGoal={() => handleSelect(2)}
          number={"2"}
        />
        <GoalItem
          icon={"./assets/goal3.svg"}
          heading={"Passer au solaire"}
          text={"Devenir autonome"}
          selected={goals.goal3}
          setGoal={() => handleSelect(3)}
          number={"3"}
        />

        <Link to={url}>
          <button
            disabled={!goals.goal1 && !goals.goal2 && !goals.goal3}
            className="button"
          >
            CONTINUER
          </button>
        </Link>
      </section>
    </>
  );
};

export default AskGoals;
