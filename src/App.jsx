import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  const [boyState, setState] = useState([
    { name: "Ash", level: 127, type: "Archer" },
    { name: "Fathy", level: 97, type: "Ninja" },
    { name: "Ahmed", level: 112, type: "Fighter" },
  ]);
  
  return (
    <div className="mainContainer">
      <Card info={boyState} gender="boy" deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
