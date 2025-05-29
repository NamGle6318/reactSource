import React, { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import { getBook, postBook, putPublishedDateBook } from "../api/bookApi";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const EditBook = () => {
  // id 가져오기
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    getBook(id).then((data) => {
      setBook(data);
    });
  }, [id]);

  if (!book) return <Loading />;

  const onSubmit = (book) => {
    putPublishedDateBook(book).then((data) => {
      console.log("날짜 수정", data);
    });
  };

  return (
    <div>
      <h1 className="text-[32px]">Edit Book</h1>
      <BookForm initalData={book} onSubmit={onSubmit} />
    </div>
  );
};

export default EditBook;
