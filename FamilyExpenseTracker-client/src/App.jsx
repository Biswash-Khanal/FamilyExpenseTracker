import React from "react";
import { Link } from "react-router";

const App = () => {
  return (
    <>
      <div>App</div>
      <Link to={"/home"}>Click me</Link>
      <a href="/home">Click me</a>
    </>
  );
};

export default App;
