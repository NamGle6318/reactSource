import React from "react";

const Child = ({ active, onClick }) => {
  console.log("child render", active);
  return (
    <div>
      child : {active ? "Active" : "Not Active"}
      <button onClick={onClick}>바튼</button>
    </div>
  );
};

export default React.memo(Child);
