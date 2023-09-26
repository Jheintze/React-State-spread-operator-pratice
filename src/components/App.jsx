import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    // const newValue = e.target.value;
    setItem(e.target.value);
    console.log(item);
  }

  function handleClick() {
    setItems((prevItems) => {
      console.log(prevItems);
      return [...prevItems, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>{items}</li> */}
          {items.map((toDo) => (
            <li key={toDo}>{toDo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
