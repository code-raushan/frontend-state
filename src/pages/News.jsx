import React from "react";
import Styles from "../css/News.module.css";
import Articles from "./Articles.jsx";

function News() {
  const articlesArr = [
    [
      "Lorem ipsum dolor sit dolor sit amet1, conse ctetur adipis icing elit Lorem ipsum dolor sit dolor sit amet1, conse ctetur adipis icing elit...",
    ],
    [
      "Lorem ipsum dolor sit dolor sit amet2, conse ctetur adipis icing elit...",
    ],
    [
      "Lorem ipsum dolor sit dolor sit amet3, conse ctetur adipis icing elit...",
    ],
    [
      "Lorem ipsum dolor sit dolor sit amet3, conse ctetur adipis icing elit...",
    ],
    [
      "Lorem ipsum dolor sit dolor sit amet3, conse ctetur adipis icing elit...",
    ],
    [
      "Lorem ipsum dolor sit dolor sit amet3, conse ctetur adipis icing elit...",
    ],
    [
      "Lorem ipsum dolor sit dolor sit amet3, conse ctetur adipis icing elit...",
    ],
  ];
  return (
    <>
      <main>
        <h1 className={Styles.news_title}>News</h1>
        <div className={`${Styles.container} ${Styles.scrollbar_style}`}>
          {articlesArr.map((ele, index) => (
            <Articles news={ele} index={index} />
          ))}
        </div>
      </main>
    </>
  );
}

export default News;
