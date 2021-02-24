import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} from "react";
import "./styles.css";
import Main from "./Main";
import Alert from "./Alert";
import { AlertProvider } from "./alert/AlertContext";

export default function App() {
  return (
    <AlertProvider>
      <div className={"container pt-3"}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
}
