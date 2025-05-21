// rsc
import React from "react";

const MyComponent = ({ name, age = 15, children }) => {
  //   let name = { name };
  if (name == "react") {
    name = "react";
  }

  const scores = {
    one: 1,
    two: 2,
    three: 3,
  };

  const user = {
    name: "Jane",
    email: "jane@example.com",
  };

  const colors = ["red", "blue", "green"];

  const numbers = [1, 2, 3, 4, 5];
  const items = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
  ];
  return (
    <>
      <h1>{children}</h1>
      <div>{name == "리액트" ? <p>리액트에s여</p> : <p>리액트아니s에여</p>}</div>
      <div>{scores.one}</div>
      <div>{scores.two}</div>
      <div>{scores.three}</div>
      <div>{name == "리액트" && <p>리액트에여</p>}</div>
      <p>name : {name ?? <em>No Name1</em>}</p>
      <p>name : {name || <em>No Name2</em>}</p>
      <div>이름 : {user.name}</div>
      <div>이름 : {user.email}</div>
      <div>나이 : {age}</div>
      <div>{colors}</div>
      <div>{colors[2]}</div>
      <ul>
        {colors.map((color) => (
          <li>color : {color}</li>
        ))}
      </ul>
      ------------
      <p>dobls {numbers.map((n) => n * 2).join(", ")}</p>
      <p>evens {numbers.filter((n) => n % 2 == 0).join(", ")}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.price}</li>
        ))}
      </ul>
    </>
  );
};

export default MyComponent;
