import React from "react";
import styles from "./Card.module.css";

console.log(styles);
const InfoCard = ({ title = "no title", content = "empty", author = "Anonymous" }) => {
  return (
    <div>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Author : {author}</p>
      </div>
    </div>
  );
};

export default InfoCard;
