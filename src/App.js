import React, { useEffect, useState } from "react";

function useLoger(value) {
  useEffect(() => {
    console.log("Voalue changed ", value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");
  return {
    bind: { value, onChange },
    value,
    clear
  };

  return {
    value,
    onChange
  };
}

function App() {
  const input = useInput("");
  const lastName = useInput("");

  useLoger(input.value);

  return (
    <div className={"container pt-3"}>
      <input type="text" {...input.bind} />
      <input type="text" {...lastName} />
      <h1>
        {input.value} {lastName.value}
      </h1>
      <button className="btn btn-warning" onClick={() => input.clear}>
        {" "}
        Clear{" "}
      </button>
    </div>
  );
}

export default App;
