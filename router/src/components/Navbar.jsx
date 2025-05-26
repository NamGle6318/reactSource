import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// React Router 주소 설정 방법
// 1. Navbar
// 2. Routh 태그

const Navbar = () => {
  const navigate = useNavigate();
  const navTo = (path) => navigate(path);

  return (
    <>
      <div>
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/contact"}>contact</Link>
      </div>
      <div>
        <button onClick={() => navTo("/")}>Home</button>
        <button onClick={() => navTo("/about")}>About</button>
        <button onClick={() => navTo("/contact")}>Contact</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default Navbar;
