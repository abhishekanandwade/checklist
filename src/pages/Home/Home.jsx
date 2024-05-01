import React from "react";
import "./Home.css";
import List from "../../components/List/List";

const Home = () => {
  return (
    <div className="home">
  
        <div className="input">
          <p>+</p>
          <input type="text" placeholder="What's on your mind?" />
        </div>
        <List />
  
    </div>
  );
};

export default Home;
