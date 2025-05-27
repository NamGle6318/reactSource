import { useState } from "react";
import "./App.css";
import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import Error from "./components/Error";
import Home from "./pages/Home";
// http://localhost:5173/ => Home
// http://localhost:5173/add => AddBook
// http://localhost:5173/edit/1 => EditBook
// http://localhost:5173/books/1 => BookDetails
// 그 외 => Error

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/add" element={<AddBook></AddBook>}></Route>
          <Route path="/edit/:id" element={<EditBook></EditBook>}></Route>
          <Route path="/books/:id" element={<BookDetails></BookDetails>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
