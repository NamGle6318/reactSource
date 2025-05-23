import React, { useEffect, useState } from "react";

const Life = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlad] = useState(true);
  useEffect(() => {
    console.log("마운트 / 업데이트 시 실행");

    setTimeout(() => {
      alert("Hello");
    }, 1000);

    return () => console.log("언마운트 시 실행");
  }, [count, flag]); // true/false로 랜더링을? 원하는 때에 시킬 수 있음

  const handleClicked = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>컴포넌트 라이플 사이클</h1>
      <h2>{count}</h2>
      <button onClick={handleClicked}>나는 버튼</button>
    </div>
  );
};

export default Life;
