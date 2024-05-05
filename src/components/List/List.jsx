import React, { useEffect, useState } from "react";
import "./List.css";
import { assets } from "../../assets/assets";

const List = ({ items, id, setItems }) => {
  let thisItems = items;
  const [newItem, setNewItem] = useState(
    items[id] ? { id: id, value: thisItems[id].value } : { id: id, value: "", isChecked: false}
  );
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setItems(
      thisItems.map((i) => {
        if (i.id === id) {
          return newItem;
        }
        return i;
      })
    );
  }, [newItem]);

 const checked = (e) => {
    setIsChecked(e);
    setNewItem({ id: id, value: newItem.value, isChecked: e });
    setItems(
      thisItems.map((i) => {
        if (i.id === id) {
          return newItem;
        }
        return i;
      })
    );
  }

  const deleteItem = () => {
    setItems(thisItems.filter((i) => i.id !== id));
  };

  return (
    <div className={!isChecked?"list":"list-checked"}>
      <input
        className="checkbox"
        type="checkbox"
        onChange={(e) => checked(e.target.checked)}
        checked={isChecked}
      />
      <input
        className={!isChecked ? "text" : "text-checked"}
        onChange={(e) => setNewItem({ id: id, value: e.target.value })}
        type="text"
        placeholder="What's on your mind?"
        defaultValue={newItem.value}
      />
      <img onClick={()=>deleteItem()} src={assets.deleteIcon} alt="" />
    </div>
  );
};

export default List;
