import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";
import PersonCardFunct from "./components/PersonCardFunct";

function App() {
  return (
    <div className="App">
      <PersonCardFunct
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hairColor={"Black"}
      />
      <PersonCardFunct
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hairColor={"Brown"}
      />
      <PersonCardFunct
        firstName={"Millard"}
        lastName={"Fillmore"}
        age={50}
        hairColor={"Brown"}
      />
      <PersonCardFunct
        firstName={"Maria"}
        lastName={"Smith"}
        age={62}
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
