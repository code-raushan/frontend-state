import React from "react";
import Styles from "../css/News.module.css";

const Articles = (props) => {
  return (
    <>
      <article className={`${Styles.card} ${Styles.shadow}`}>
        <div>
          <p key={props.index}>{props.news}</p>
        </div>
      </article>
    </>
  );
};

export default Articles;
