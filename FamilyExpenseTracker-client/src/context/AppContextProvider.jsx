import { useState } from "react";
import { AppContext } from "./AppContext.js";

export const AppContextProvider = ({ children }) => {
  const [appName, setAppName] = useState("default");

  const value = {
    appName,
    setAppName,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
