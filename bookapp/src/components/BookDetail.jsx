import React, { useEffect, useState } from "react";
import { getBook, removeBook } from "../api/bookApi";
import Loading from "./Loading";
import { getBookEmoji, renderStars } from "./../util";
import { useNavigate } from "react-router-dom";
import useCustomMove from "../hooks/useCustomMove";

const BookDetail = ({ id }) => {
  const [book, setBook] = useState();
  const navigate = useNavigate();
  const { moveToEdit } = useCustomMove();
  useEffect(() => {
    getBook(id).then((data) => {
      console.log("data", data);
      setBook(data);
    });
  }, [id]);

  if (!book) return <Loading />;

  // delete 버튼 클릭 시
  const handleDelete = () => {
    const confirmed = confirm("Delete This book?");

    if (!confirmed) return;

    // 삭제
    removeBook(id).then((data) => {
      console.log(data);
      // 삭제 후 home 이동
      navigate("/");
    });
  };

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
            <strong>Rating : </strong>
            <span className="ml-1 text-[1.1em] tracking-[0.1em] text-sky-500">{renderStars(book.rating)}</span>
          </p>
          <p>
            <strong>Available : {book.available ? "Available" : "UnAvailable"}</strong>
            <span></span>
          </p>
        </div>
        <div className="text-[8.6em]">{getBookEmoji(book.id)}</div>
      </section>
      <div className="text-center p-2">
        <button
          type="button"
          className="m-1 my-6 py-3 px-4.5 text-[1.2em] bg-sky-500 text-white text-center hover:bg-sky-700"
          onClick={() => moveToEdit(book.id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="m-1 my-6 py-3 px-4.5 text-[1.2em] bg-red-500 text-white text-center hover:bg-red-700"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default BookDetail;
