import React from "react";
import "./List.css";

const List = () => {
  return (


    <div className="list">
      <input className="checkbox" type="checkbox" />
      <input className="text" type="text" placeholder="What's on your mind?" value="Pre-filled text" />
    </div>
  );
};

export default List;
