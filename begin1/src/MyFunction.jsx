import React from "react";

const MyFunction = () => {
  const name = "홍길동";
  const greeting = (name) => `Hello, ${name}`;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div>
      {" "}
      안녕 <br />
      {greeting("Axios")} <br />
      {formatDate(new Date())}
      <p>
        {(() => {
          const hours = new Date().getHours();
          return hours < 12 ? "morning" : "afternoon";
        })()}
      </p>
    </div>
  );
};

export default MyFunction;
