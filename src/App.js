import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current + 1;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focuc();

  return (
    <div className="">
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Прошлое состояние: {renderCount.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-success" onClick={focus}>
        Фокус
      </button>
    </div>
  );
}
