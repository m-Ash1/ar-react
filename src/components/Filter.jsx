import { useState } from "react";
import styles from "../css/Filter.module.css";
const Filter = ({ inputRef, inputHandler, filterNames }) => {
  const [filter, setFilter] = useState("");
  const filterHandler = (e) => {
    setFilter(e.target.value);
    filterNames(e.target.value);
  };
  return (
    // INPUT USING REF
    <>
      <input
        className={styles.btn}
        type="text"
        ref={inputRef}
        onChange={inputHandler}
      />
      {/* INPUT USING STATE */}
      <input
        className={styles.btn}
        type="text"
        onChange={filterHandler}
        value={filter}
      />
    </>
  );
};

export default Filter;
