import React from "react";

const books = [
  { id: 1, title: "React Basic", published: 0, publisher: "Manning" },
  { id: 2, title: "Advanced hooks", published: 1, publisher: "Oreilly" },
  { id: 1, title: "JSX in Depth", published: 1, publisher: "Packt" },
];

// books 배열에서 published가 true인 것만 추출
const published = books.filter((book) => book.published);
const Book = () => {
  return (
    <div>
      {published.length > 0 && <h2>Published Books</h2>}
      {published.length ? (
        published.map((book) => (
          <article key={book.id}>
            <strong>{book.title}</strong>
            <em>{book.publisher}</em>
          </article>
        ))
      ) : (
        <p>No published books found</p>
      )}
    </div>
  );
};

export default Book;
