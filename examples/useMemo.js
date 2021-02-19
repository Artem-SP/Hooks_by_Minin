import React, { useState, useEffect, useRef, useMemo } from "react";
import "./styles.css";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000001) i++;
  return num * 2;
}

export default function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return { color: colored ? "darkred" : "blue" };
  }, [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("Styles changed");
  }, [styles]);

  return (
    <div className="">
      <h1 style={styles}>Вычисляемое свойство: {number}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Добавить
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Убрать
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
