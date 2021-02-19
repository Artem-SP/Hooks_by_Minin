import React, { useState, useEffect, useRef, useMemo } from "react";
import ItemsList from "./itemsList";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(false);
  const [colored, setColored] = useState(1);

  const styles = {
    color: colored ? "darkred" : "blue"
  };

  const generateItemsFromAPI = () => {
    return new Array(count).fill("").map((_, it) => `Item ${it + 1}`);
  };

  return (
    <div className="">
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Добавить
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((prev) => !prev)}
      >
        Изменить
      </button>
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}
