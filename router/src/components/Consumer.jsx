import React from "react";
import Child1 from "./Child1";
import { CountProvider } from "./Contexts/CountContext";
import Child3 from "./Child3";
import { ToggleProvider } from "./Contexts/ToggleContext";

const Consumer = () => {
  return (
    <>
      <CountProvider>
        <h2>Count Consumer</h2>
        <Child1 />
      </CountProvider>
      <ToggleProvider>
        <Child3 />
      </ToggleProvider>
    </>
  );
};

export default Consumer;
