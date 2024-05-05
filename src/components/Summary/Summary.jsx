import React from "react";
import "./Summary.css";

const Summary = ({ totalItems, completedItems, message }) => {
  return (
    <div className="summary">
      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total</h3>
          <p>{totalItems}</p>
        </div>
        <div className="summary-card">
          <h3>Completed</h3>
          <p>{completedItems}</p>
        </div>
      </div>
        <p className="message">{message}</p>
    </div>
  );
};

export default Summary;
