import React from "react";
import { Link } from "react-router";
import { useAppContext } from "./context/AppContext.js";

const App = () => {
  const { appName, setAppName } = useAppContext();

  const button1 = () => {
    setAppName("AppName1");
  };
  const button2 = () => {
    setAppName("AppName2");
  };

  return (
    <>
      <div>{appName}</div>
      <button onClick={button1}>btn1</button>
      <button onClick={button2}>btn2</button>
    </>
  );
};

export default App;
