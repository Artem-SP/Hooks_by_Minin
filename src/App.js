import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} from "react";
import "./styles.css";
import Main from "./Main";

export default function App() {
  return (
    <div className={"container"}>
      <Main />
    </div>
  );
}
