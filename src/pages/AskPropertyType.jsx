import React from "react";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import { useNavigate } from "react-router-dom";

const AskPropertyType = () => {
  // const [propertyType, setPropertyType] = React.useState(
  //   localStorage.getItem("propertyType")
  // );
  const [propertyType, setPropertyType] = React.useState("");

  const startTime = new Date().toLocaleTimeString();
  localStorage.setItem("startTime", startTime);

  const isMobile = useCheckMobileScreen();
  let navigate = useNavigate();

  React.useEffect(() => {
    if (propertyType) {
      return navigate("/time");
    }
  }, [propertyType]);

  return (
    <section className="flex flex-col h-screen">
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <div className="flex flex-grow flex-col gap-24 items-center">
        {isMobile ? (
          <h1 className="inter text-2xl text-center font-bold leading-7 px-6">
            es aides concernent-elles une maison ou un appartement?
          </h1>
        ) : (
          <h1 className="heading">Votre projet concerne ?</h1>
        )}

        <div className="flex xl:gap-28 gap-6 items-center justify-center">
          <div
            id="appartement"
            className={`${isMobile ? "mobileItem" : "item"} ${
              propertyType === "appartement" && "mobileSelected xl:selected"
            }`}
            onClick={() => {
              setPropertyType("appartement");
              localStorage.setItem("propertyType", "appartement");
            }}
          >
            <img
              src={
                isMobile
                  ? "./assets/mobileAppartment.svg"
                  : "./assets/appartement.svg"
              }
              alt="Appartement"
            />
            <p className="nunito font-bold xl:text-2xl">Appartement</p>
          </div>
          <div
            id="maison"
            className={`${isMobile ? "mobileItem" : "item"} ${
              propertyType === "maison" && "mobileSelected xl:selected"
            }`}
            onClick={() => {
              setPropertyType("maison");
              localStorage.setItem("propertyType", "maison");
            }}
          >
            <img
              src={
                isMobile ? "./assets/mobileMaison.svg" : "./assets/maison.svg"
              }
              alt="Maison"
            />
            <p className="nunito font-bold xl:text-2xl">Maison</p>
          </div>
        </div>

        {/* <Link to={"/time"}>
          <button disabled={!propertyType} className="button">
            CONTINUER
          </button>
        </Link> */}
      </div>
    </section>
  );
};

export default AskPropertyType;
