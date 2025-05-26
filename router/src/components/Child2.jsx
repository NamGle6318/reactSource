import React from "react";
import { useContext } from "react";
import { CounterContext } from "./Contexts/CountContext";

const Child2 = () => {
  // context에 있는 정보 가져오기
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <h2>child2</h2>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Child2;
