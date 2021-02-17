import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [type, setType] = useState("users");
const [data, setData] = useState([])
  // useEffect(() => {
  //   console.log("render");
  // });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
  .then(response => response.json())
  .then(json => setData(json))
  }, [type]);

  return (
    <div className="">
      <h1> ресурс: {type}</h1>
      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todos")}>Todo</button>
      <button onClick={() => setType("posts")}>Posts</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
