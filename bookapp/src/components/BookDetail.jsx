import React, { useEffect, useState } from "react";
import { getBook } from "../api/bookApi";
import Loading from "./Loading";

const BookDetail = ({ id }) => {
  const [book, setBook] = useState();
  useEffect(() => {
    getBook(id).then((data) => {
      console.log("data", data);
      setBook(data);
    });
  }, [id]);

  if (!book) return <Loading />;

  return (
    <>
      <section className="flex mt-6 p-5 border-t border-neutral-200">
        <div className="first:grow-1">
          <h2 className="text-2x1 mb-2.5">{book.title}</h2>
          <p className="my-[5px]">
            <strong>Author : {book.author}</strong>
          </p>
          <p>
            <strong>Genre : {book.genreName}</strong>
          </p>
          <p>
            <strong>Published date : {book.publishedDate}</strong>
          </p>
          <p>
            <strong>Rating : {book.rating}</strong>
            <span></span>
          </p>
          <p>
            <strong>Available : {book.available ? "Available" : "UnAvailable"}</strong>
            <span></span>
          </p>
        </div>
      </section>
      <div className="text-[8.6em]"></div>
      <div className="text-center p-2">
        <button
          type="submit"
          className="m-1 my-6 py-3 px-4.5 text-[1.2em] bg-sky-500 text-white text-center hover:bg-sky-700"
        >
          Edit
        </button>
        <button
          type="button"
          className="m-1 my-6 py-3 px-4.5 text-[1.2em] bg-red-500 text-white text-center hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default BookDetail;
