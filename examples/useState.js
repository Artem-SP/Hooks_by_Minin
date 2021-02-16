import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [type, setType] = useState("users");

  return (
    <div className="">
      <h1> ресурс: {type}</h1>
      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todo")}>Todo</button>
      <button onClick={() => setType("posts")}>Posts</button>
    </div>
  );
}
