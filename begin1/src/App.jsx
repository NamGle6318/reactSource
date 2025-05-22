import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyFunction from "./MyComponent.jsx";
import MyComponent from "./MyComponent.jsx";
import Card from "./Card.jsx";
import Product from "./Product.jsx";
import ParentCardLayout from "./ParentCardLayout.jsx";

import InputSample from "./InputSample.jsx";
import InputMultipleSample from "./InputMultipleSample.jsx";
import Say from "./Say.jsx";
import Movie from "./Movie.jsx";
import Hello from "/src/components/Hello.jsx";
import Home from "./components/Home.jsx";
import MyApp from "./components/MyApp.jsx";
import CounterRef from "./CounterRef.jsx";
import InputRef from "./InputRef.jsx";
import Profile from "./Profile.jsx";
import UserProfile from "./UserProfile.jsx";
import Form from "./Form.jsx";

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
      {/* <Counter /> */}
      {/* <InputSample /> */}
      {/* <InputMultipleSample /> */}
      {/* <Say /> */}
      {/* <Movie /> */}
      {/* <Hello /> */}
      {/* <Hello /> */}
      {/* <Home /> */}
      {/* <MyApp /> */}
      {/* <CounterRef /> */}
      {/* <InputRef /> */}
      {/* <Profile /> */}
      {/* <UserProfile /> */}
      <Form />
    </>
  );
}

export default App;
