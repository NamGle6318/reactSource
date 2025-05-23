import React, { useState } from "react";
import useCounter from "./hooks/useCounter";

const Counter = (initialValue = 0) => {
  const { count, increase, decrease } = useCounter(0);

  return (
    <div>
      <h1>count : {count} </h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
};

export default Counter;
