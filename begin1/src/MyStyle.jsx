import React from "react";

const MyStyle = () => {
  const style = {
    background: "block",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <div>
      <div style={style}>홍길동</div>
      <div style={{ color: "red", fontSize: "25px" }}>홍길동</div>
      {/* 
        class == className,
        maxlength == maxLength,
        readonly == readOnly
    */}
      <input type="text" value={style.color} className="" maxLength={20} readOnly={true} />
    </div>
  );
};

export default MyStyle;
