import { useRef, useState } from "react";
import Card from "./components/Card.jsx";
import Filter from "./components/Filter";
import "./css/App.css";
function App() {
  // STATES
  const [boyState, setBoyState] = useState([
    { name: "Ash", level: 127, type: "Archer" },
    { name: "Fathy", level: 97, type: "Ninja" },
    { name: "Ahmed", level: 112, type: "Fighter" },
    { name: "Ramy", level: 45, type: "Healer" },
    { name: "Dodo", level: 106, type: "Mage" },
  ]);
  const [count, setCount] = useState(0);
  const [cardToggle, setCardToggle] = useState(true);
  const [filterState, setFilterState] = useState("");

  // USEREF
  const inputRef = useRef(null);

  // HANDLERS
  const deleteHandler = (index) => {
    setBoyState((prev) => {
      return prev.filter((el, idx) => idx !== index);
    });
  };
  const countHandler = () => {
    setCount(count + 1);
  };

  const toggleHandler = () => {
    setCardToggle(!cardToggle);
  };

  const inputHandler = () => {
    console.log(inputRef.current.value);
  };

  const filterHandler = (value) => {
    setFilterState(value);
  };
  const filteration = () => {
    if (filterState.length !== 0) {
      return boyState.filter((el) =>
        el.name.toLowerCase().includes(filterState.toLowerCase())
      );
    }
    console.log(filterState);
    return boyState;
  };

  // RETURN
  return (
    <div className="mainContainer">
      <button onClick={toggleHandler}>
        {cardToggle ? "Hide names" : "Show names"}
      </button>
      <div className={cardToggle ? "cards show" : "cards hide"}>
        <Card info={filteration()} gender="boy" deleteHandler={deleteHandler} />
      </div>
      <button onClick={countHandler}>
        You pressed the button {count} times
      </button>
      <Filter
        filterNames={filterHandler}
        inputRef={inputRef}
        inputHandler={inputHandler}
      ></Filter>
    </div>
  );
}

export default App;
