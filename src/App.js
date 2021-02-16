import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [counter, setCounter] = useState(0);

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now()
  });

  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }
  function decrement() {
    setCounter(counter - 1);
    console.log(counter);
  }

  function updateTitle() {
    setState((prev) => {
      return { ...prev, title: "Новое название" };
    });
  }

  return (
    <div className="">
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>
      <button onClick={updateTitle} className="btn">
        Изменить название
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
