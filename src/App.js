import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [type, setType] = useState("users");

  // useEffect(() => {
  //   console.log("render");
  // });

  useEffect(() => {
    console.log(`Type change: ${type}`);
  }, [type]);

  return (
    <div className="">
      <h1> ресурс: {type}</h1>
      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todo")}>Todo</button>
      <button onClick={() => setType("posts")}>Posts</button>
    </div>
  );
}
