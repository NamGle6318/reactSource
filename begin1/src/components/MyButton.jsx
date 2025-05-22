import React, { useState } from "react";

const MyButton = ({ onClick, count, style }) => {
  return (
    <div>
      <button onClick={onClick} style={style}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default MyButton;
