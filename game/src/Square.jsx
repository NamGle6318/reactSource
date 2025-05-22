import React from "react";
import { useState } from "react";

const Square = ({ value, handleClick }) => {
  // const [value, setValue] = useState("");

  return (
    <>
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </>
  );
};

export default Square;
