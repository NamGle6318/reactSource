import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyFunction from "./MyComponent.jsx";
import MyComponent from "./MyComponent.jsx";
import Card from "./Card.jsx";
import Product from "./Product.jsx";
import ParentCardLayout from "./ParentCardLayout.jsx";
import Counter from "./Counter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Card /> */}
      {/* <Product /> */}
      {/* <h1>hi</h1>
      <p>
        기차s
        <br />
        기자
      </p>
      <button type="button">나는 버튼</button> */}
      {/* <MyComponent name="React">리액트!!!</MyComponent> */}
      {/* <ParentCardLayout /> */}
      <Counter />
    </>
  );
}

export default App;
