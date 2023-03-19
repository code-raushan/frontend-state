import React from "react";
import Card from "./Card";
import Styles from "../css/Dashboard.module.css";
import News from "./News";
import Feed from "./Feed";

const Dashboard = () => {
  return (
    <>
      <div className={Styles.main_container}>
        <main className={`${Styles.card} ${Styles.card_container}`}>
          <Card title="25" description="more days to go" />
          <Card title="32" description="Age Limit" />
          <Card title="735" description="Posts this year" />
          <Card title="3" description="more attempts" />
          <Card title="100" description="Application Fee" />
          <Card title="12" description=" days deadline to apply" />
          {/* <div className={Styles.vertical_line}></div>
          <div className={Styles.horizontal_line}></div> */}
        </main>
        <div>
          <Feed />
        </div>
        <div className={Styles.news_and_resources}>
          <div className={Styles.news_container}>
            <News />
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Dashboard;
