import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  const boys = [
    { name: "Ash", level: 127, type: "Archer" },
    { name: "Fathy", level: 97, type: "Ninja" },
    { name: "Ahmed", level: 112, type: "Fighter" },
  ];
  const girls = [
    { name: "Aya", level: 127, type: "Archer" },
    { name: "Dodo", level: 97, type: "Healer" },
    { name: "Haneen", level: 112, type: "Fighter" },
  ];

  return (
    <div className="mainContainer">
      <Card info={boys} gender="boy" />
      <Card info={girls} gender="girl" />
    </div>
  );
}

export default App;
