import React from "react";
import Child4 from "./Child4";
import { useContext } from "react";
import { ToggleContext } from "./Contexts/ToggleContext";

const Child3 = () => {
  const { isOn } = useContext(ToggleContext);
  return (
    <div>
      <h2>Child3</h2>
      <p>Toggle {isOn ? "On" : "off"}</p>
      <Child4 />
    </div>
  );
};

export default Child3;
