import React from "react";
import Styles from "../css/Card.module.css";

const Card = (props) => {
  return (
    <>
      <main>
        <div className={Styles.card}>
          <div className={Styles.card_content}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Card;
