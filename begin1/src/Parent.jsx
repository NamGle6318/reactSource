import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  // 매번 increase 함수를 랜더링할때마다 새로 생성되게 냅두면 자식 까지 랜더링이 다시 됨
  // => useCallback을 사용하여 increase 를 랜더링마다 생성하지 않게 만들 수 있음
  // useCallback이 랜더링 되려면 의존성 배열이 변경되어야 함

  const increase = useCallback(() => {
    setCount((c) => (c += 1));
  }, []);

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={() => setActive(!active)}>변경</button>
      <p>count : {count}</p>
      <Child active={active} onClick={increase} />
    </div>
  );
};

export default Parent;
