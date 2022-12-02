import React from "react";
import { Link } from "react-router-dom";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const sendData = () => {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbwU1FD1LOaKq_TfqlTRRq7F8Tt3G7isIYlmHh7OEog0Y9Vq4aQTG5EXeILGl-HuZBhphQ/exec";

  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const telephone = localStorage.getItem("telephone");
  const propertyType = localStorage.getItem("propertyType");
  const constructionTime = localStorage.getItem("constructionTime");
  const area = localStorage.getItem("area");
  const goals = JSON.parse(localStorage.getItem("goals"));
  const isolate = JSON.parse(localStorage.getItem("isolate"));
  // const goal = localStorage.getItem("goal");

  const garage = localStorage.getItem("garage");
  const atticInsulation = localStorage.getItem("atticInsulation");
  const atticArea = localStorage.getItem("atticArea");
  const basement = localStorage.getItem("basement");
  const crawlSpace = localStorage.getItem("crawlSpace");
  const wallInsulation = localStorage.getItem("wallInsulation");
  const wallarea = localStorage.getItem("wallarea");

  const heatingEnergy = localStorage.getItem("heatingEnergy");
  const gasEquipment = localStorage.getItem("gasEquipment");
  const electricEquipment = localStorage.getItem("electricEquipment");
  const oilEquipment = localStorage.getItem("oilEquipment");
  const heatingEquipment = localStorage.getItem("heatingEquipment");
  const solarOption = localStorage.getItem("solarOption");
  const roofOrientation = localStorage.getItem("roofOrientation");
  const roofArea = localStorage.getItem("roofArea");
  const slopeChoice2 = localStorage.getItem("slopeChoice2");
  const slopeChoice = localStorage.getItem("slopeChoice");
  const electricBill = localStorage.getItem("electricBill");
  const accomodationAffected = localStorage.getItem("accomodationAffected");
  const startTime = localStorage.getItem("startTime");

  // Goals Transformation
  // Goal 1 -> Insulate Home
  // Goal 2 -> Change Heating System
  // Goal 3 -> Install Solar Panels
  let goalString = "";

  if (goals.goal1 === true) {
    goalString += "Insulate the Home ";
  }
  if (goals.goal2 === true) {
    if (goals.goal1) {
      goalString += ", Change Heating System ";
    } else {
      goalString += "Change Heating System ";
    }
  }
  if (goals.goal3 === true) {
    if (goals.goal1 || goals.goal2) {
      goalString += ", Install Solar Panels";
    } else {
      goalString += "Install Solar Panels";
    }
  }

  // Isolate Transformation
  // Isolate 1 -> Garage
  // Isolate 2 -> Attic
  // Isolate 3 -> Basement
  // Isolate 4 -> Crawl Space
  // Isolate 5 -> Wall

  let isolateString = "";

  if (isolate.isolate1 === true) {
    isolateString += "Garage ";
  }
  if (isolate.isolate2 === true) {
    if (isolate.isolate1) {
      isolateString += ", Attic ";
    } else {
      isolateString += "Attic ";
    }
  }
  if (isolate.isolate3 === true) {
    if (isolate.isolate1 || isolate.isolate2) {
      isolateString += ", Basement ";
    } else {
      isolateString += "Basement ";
    }
  }
  if (isolate.isolate4 === true) {
    if (isolate.isolate1 || isolate.isolate2 || isolate.isolate3) {
      isolateString += ", Crawl Space ";
    } else {
      isolateString += "Crawl Space ";
    }
  }
  if (isolate.isolate5 === true) {
    if (
      isolate.isolate1 ||
      isolate.isolate2 ||
      isolate.isolate3 ||
      isolate.isolate4
    ) {
      isolateString += ", Wall ";
    } else {
      isolateString += "Wall ";
    }
  }

  console.log("isolated", isolateString);

  // Construction Time Transformation
  // Construction Time 1 -> Moins de 2 ans
  // Construction Time 2 -> Entre 2 et 15 ans
  // Construction Time 3 -> Plus de 15 ans

  let constructionTimeString = "";
  switch (constructionTime) {
    case "1":
      constructionTimeString = "Moins de 2 ans";
      break;
    case "2":
      constructionTimeString = "Entre 2 et 15 ans";
      break;
    case "3":
      constructionTimeString = "Plus de 15 ans";
      break;
    default:
      break;
  }

  console.log("constructionTime", constructionTimeString);

  // Attic Insulation Transformatin
  // Attic Insulation 1 -> Comble Perdu
  // Attic Insulation 2 -> Comble aménagé

  let atticInsulationString = "";
  switch (atticInsulation) {
    case "1":
      atticInsulationString = "Comble Perdu";
      break;
    case "2":
      atticInsulationString = "Comble aménagé";
      break;
    default:
      break;
  }

  console.log("atticInsulation", atticInsulationString);

  // Wall Insulation Transformation

  // Wall Insulation 1 -> Intérieurs
  // Wall Insulation 2 -> Attenant garage

  let wallInsulationString = "";
  switch (wallInsulation) {
    case "1":
      wallInsulationString = "Intérieurs";
      break;
    case "2":
      wallInsulationString = "Attenant garage";
      break;
    default:
      break;
  }

  console.log("wallInsulation", wallInsulationString);

  // Heating Energy Transformation

  // Heating Energy 1 -> Chauffage au Fioul
  // Heating Energy 2 -> Chauffage Éléctrique
  // Heating Energy 3 -> Chauffage au Gaz
  // Heating Energy 4 -> Chauffage au Bois
  // Heating Energy 5 -> Pompe à chaleur
  // Heating Energy 6 -> Chauffage au Charbon

  let heatingEnergyString = "";
  switch (heatingEnergy) {
    case "1":
      heatingEnergyString = "Chauffage au Fioul";
      break;
    case "2":
      heatingEnergyString = "Chauffage Éléctrique";
      break;
    case "3":
      heatingEnergyString = "Chauffage au Gaz";
      break;
    case "4":
      heatingEnergyString = "Chauffage au Bois";
      break;
    case "5":
      heatingEnergyString = "Pompe à chaleur";
      break;
    case "6":
      heatingEnergyString = "Chauffage au Charbon";
      break;
    default:
      break;
  }

  // Electric Equipment Transformation

  // Electric Equipment 1 -> Chaudière électrique
  // Electric Equipment 2 -> Plafond chauffant
  // Electric Equipment 3 -> Plancher chauffant
  // Electric Equipment 4 -> Radiateur électrique

  let electricEquipmentString = "";
  switch (electricEquipment) {
    case "1":
      electricEquipmentString = "Chaudière électrique";
      break;
    case "2":
      electricEquipmentString = "Plafond chauffant";
      break;
    case "3":
      electricEquipmentString = "Plancher chauffant";
      break;
    case "4":
      electricEquipmentString = "Radiateur électrique";
      break;
    default:
      break;
  }

  // Gas Equipment Transformation

  // Gas Equipment 1 -> Chaudière à condensation
  // Gas Equipment 2 -> Autre qu’à condensation
  // Gas Equipment 3 -> Radiateur gaz
  // Gas Equipment 4 -> Poêle au gaz

  let gasEquipmentString = "";
  switch (gasEquipment) {
    case "1":
      gasEquipmentString = "Chaudière à condensation";
      break;
    case "2":
      gasEquipmentString = "Autre qu’à condensation";
      break;
    case "3":
      gasEquipmentString = "Radiateur gaz";
      break;
    case "4":
      gasEquipmentString = "Poêle au gaz";
      break;
    default:
      break;
  }

  // Oil Equipment Transformation

  // Oil Equipment 1 -> Chaudière gaz à condensation
  // Oil Equipment 2 -> Chaudière à bois
  // Oil Equipment 3 -> Chaudière fioul à condensation

  let oilEquipmentString = "";
  switch (oilEquipment) {
    case "1":
      oilEquipmentString = "Chaudière gaz à condensation";
      break;
    case "2":
      oilEquipmentString = "Chaudière à bois";
      break;
    case "3":
      oilEquipmentString = "Chaudière fioul à condensation";
      break;
    default:
      break;
  }

  // Heating Equipment Transformation

  // Heating Equipment 1 -> Pompe à chaleur
  // Heating Equipment 2 -> Chaudière
  // Heating Equipment 3 -> Poêle à bois
  // Heating Equipment 4 -> Insert cheminée
  // Heating Equipment 5 -> Radiateur électrique

  let heatingEquipmentString = "";
  switch (heatingEquipment) {
    case "1":
      heatingEquipmentString = "Pompe à chaleur";
      break;
    case "2":
      heatingEquipmentString = "Chaudière";
      break;
    case "3":
      heatingEquipmentString = "Poêle à bois";
      break;
    case "4":
      heatingEquipmentString = "Insert cheminée";
      break;
    case "5":
      heatingEquipmentString = "Radiateur électrique";
      break;
    default:
      break;
  }

  // Solar Option Transformation

  // Solar Option 1 -> Panneaux Solaires Photovoltaïques
  // Solar Option 2 -> Système Solaire Combiné

  let solarOptionString = "";
  switch (solarOption) {
    case "1":
      solarOptionString = "Panneaux Solaires Photovoltaïques";
      break;
    case "2":
      solarOptionString = "Système Solaire Combiné";
      break;
    default:
      break;
  }

  // Roof Orientation Transformation

  // Roof Orientation 1 -> Est
  // Roof Orientation 2 -> Sud
  // Roof Orientation 3 -> Sud-Est
  // Roof Orientation 4 -> Sud-Est
  // Roof Orientation 5 -> Nord-Est
  // Roof Orientation 6 -> Sud-Ouest
  // Roof Orientation 7 -> Sud-Ouest
  // Roof Orientation 8 -> Ouest

  let roofOrientationString = "";
  switch (roofOrientation) {
    case "1":
      roofOrientationString = "Est";
      break;
    case "2":
      roofOrientationString = "Sud";
      break;
    case "3":
      roofOrientationString = "Sud-Est";
      break;
    case "4":
      roofOrientationString = "Sud-Est";
      break;
    case "5":
      roofOrientationString = "Nord-Est";
      break;
    case "6":
      roofOrientationString = "Sud-Ouest";
      break;
    case "7":
      roofOrientationString = "Sud-Ouest";
      break;
    case "8":
      roofOrientationString = "Ouest";
      break;
    default:
      break;
  }

  // Roof Slope Transformation

  // Roof Slope 1 -> 0° - Toit plat
  // Roof Slope 2 -> 15° - Méditerranéenne
  // Roof Slope 3 -> 30° - Classique
  // Roof Slope 4 -> 45° - Alsacienne

  let roofSlopeString = "";
  switch (slopeChoice) {
    case "1":
      roofSlopeString = "0° - Toit plat";
      break;
    case "2":
      roofSlopeString = "15° - Méditerranéenne";
      break;
    case "3":
      roofSlopeString = "30° - Classique";
      break;
    case "4":
      roofSlopeString = "45° - Alsacienne";
      break;
    default:
      break;
  }

  // Roof Slope2 Transformation

  // Roof Slope2 1 -> Tuile mécanique
  // Roof Slope2 2 -> Ardoise
  // Roof Slope2 3 -> Bac acier
  // Roof Slope2 4 -> Autre

  let roofSlope2String = "";
  switch (slopeChoice2) {
    case "1":
      roofSlope2String = "Tuile mécanique";
      break;
    case "2":
      roofSlope2String = "Ardoise";
      break;
    case "3":
      roofSlope2String = "Bac acier";
      break;
    case "4":
      roofSlope2String = "Autre";
      break;
    default:
      break;
  }

  // get current time and date
  const date = new Date();
  const endtime = date.toLocaleTimeString();
  const endday = date.toLocaleDateString();

  // append all these variables to a formData
  const formData = new FormData();
  // formData.append("goal", goal);
  formData.append("First Name", firstName);
  formData.append("Last Name", lastName);
  formData.append("Telephone", telephone);
  formData.append("Property Type", propertyType);
  formData.append("Construction Time", constructionTimeString);
  formData.append("Area (m2)", area);
  formData.append("Goals", goalString);
  formData.append("Insulate", isolateString);

  formData.append("Garage Area (m2)", garage);
  formData.append("Attic Insulation", atticInsulationString);
  formData.append("Attic Area (m2)", atticArea);
  formData.append("Basement Area (m2)", basement);
  formData.append("Crawl Space (m2)", crawlSpace);
  formData.append("Wall Insulation", wallInsulationString);
  formData.append("Wall Area (m2)", wallarea);

  formData.append("Heating Energy", heatingEnergyString);
  formData.append("Electric Equipment", electricEquipmentString);
  formData.append("Gas Equipment", gasEquipmentString);
  formData.append("Oil Equipment", oilEquipmentString);
  formData.append("Heating Equipment", heatingEquipmentString);

  formData.append("Solar Option", solarOptionString);
  formData.append("Roof Orientation", roofOrientationString);
  formData.append("Roof Area (m2)", roofArea);
  formData.append("Roof Slope", roofSlopeString);
  formData.append("Roof Slope2", roofSlope2String);
  formData.append("Electric Bill (mois)", electricBill);
  formData.append("Accomodation Affected", accomodationAffected);
  formData.append("Start Time", startTime);
  formData.append("End Time", endtime);
  formData.append("Date", endday);

  fetch(scriptUrl, { method: "POST", body: formData })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));

  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
};

const EndScreen = () => {
  const isMobile = useCheckMobileScreen();

  React.useEffect(() => {
    sendData();
  }, []);

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/telephone">
              <img
                className={isMobile && "w-[27px] h-[27px]"}
                src="./assets/arrow.svg"
                alt="Back"
              />
            </Link>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <h1
              className={
                isMobile
                  ? "inter text-2xl text-center font-bold leading-[29px] px-6 py-4"
                  : "mx-auto heading flex-1 text-center lg:text-5xl px-24"
              }
            >
              Merci ! Vos informations sont enregistrés, vous serrez contactez
              rapidement
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <img src={"./assets/endscreen.png"} alt="Phone" />
        </div>
      </section>
    </>
  );
};

export default EndScreen;
