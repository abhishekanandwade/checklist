import React, { useEffect, useState } from "react";
import "./Home.css";
import List from "../../components/List/List";
import Summary from "../../components/Summary/Summary";

const Home = () => {
  // const items = [];
const [items, setItems] = useState([{ id: 0, value: '', isChecked: false }]);  
const [input, setInput] = useState("");

let numberTotal = items.length - 1;
let numberComplete = items.filter((i) => i.isChecked).length;

function getMessage() {
  const percentage = numberComplete/numberTotal * 100;
  if (percentage === 0) {
    return 'Try to do at least one! 🙏';
  }
  if (percentage === 100) {
    return 'Nice job for today! 🏝';
  }
  return 'Keep it going 💪🏻';
}
  useEffect(() => {
    console.log("Items", items);

  }, [items]);

  const onAdd = () => {
    setItems([...items, { id: items.length, value: input, isChecked: false}]);
    setInput("");
  };

  return (
    <div className="home">
      <div className="summary">
        <Summary totalItems={numberTotal} completedItems={numberComplete} message={getMessage()}/>
      </div>
      <div className="input">
        <p onClick={() => onAdd()}>+</p>
      <input
  type="text"
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      onAdd();
      e.preventDefault();
    }
  }}
  placeholder="What's on your mind?"
  value={input}
/>
      </div>
      <div className="list-item">
        {items.length > 1 &&
          items.map((item) => {
            return item.id!=0 && <List items={items} id={item.id} key={item.id} setItems={setItems} />;
          })}
      </div>
    </div>
  );
};

export default Home;
