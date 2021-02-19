import React, { useState, useEffect, useRef, useMemo } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(false);
  const [colored, setColored] = useState(1);

  const styles = {
    color: colored ? "darkred" : "blue"
  };

  return (
    <div className="">
      <h1 style={styles}>Количество элементов:</h1>
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
    </div>
  );
}
