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

export const AlertContext = React.createContext();

export default function App() {
  const [alert, setAlert] = useState(false);

  const toggleAlert = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider value={alert}>
      <div className={"container pt-3"}>
        <Alert />
        <Main toggle={toggleAlert} />
      </div>
    </AlertContext.Provider>
  );
}
