import React from "react";
import InfoCard from "./InfoCard.jsx";

const cards = [
  { idx: 1, title: "Props in React", content: "props pass data from one componenet to another", author: "Alice" },
  {
    idx: 2,
    title: "React Composition",
    content: "Composition makes your components more reusable",
    author: "Charamel",
  },
  { idx: 3, content: "props pass data from one componenet to another" },
];
console.log(cards[1].title);
const Card = () => {
  return (
    <>
      {cards.map((card) => (
        <InfoCard key={card.id} title={card.title} content={card.content} author={card.author} />
      ))}
    </>
  );
};

export default Card;
