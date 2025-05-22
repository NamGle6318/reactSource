import React, { useState } from "react";

const Say = () => {
  // 입장 : 안녕하세요, 퇴장 : 안녕히가세요

  const [message, setMessage] = useState("");
  const [colors, setColor] = useState("black");

  const handleClick = (e) => {
    console.log(e.target.textContent);
    switch (e.target.textContent) {
      case "입장":
        setMessage("안녕하세요");
        break;
      case "퇴장":
        setMessage("안녕히가세요");
        break;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>입장</button>
        <button onClick={handleClick}>퇴장</button>
      </div>
      <h1 style={{ color: colors }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
    </div>
  );
};

export default Say;
