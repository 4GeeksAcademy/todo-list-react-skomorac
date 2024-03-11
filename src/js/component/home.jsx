import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTodoItems([...todoItems, inputValue.trim()]);
      setInputValue("");
    } else {
      alert("Task can't be empty");
    }
  };

  return (
    <div className="container">
      <h1>My ToDoS</h1>
      <div>
        Tasks left to complete: <strong>{todoItems.length}</strong>
      </div>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleAddTask();
              }
            }}
            placeholder={
              todoItems.length === 0
                ? "No tasks, add a task"
                : "Type to add more tasks"
            }
          />
        </li>
        {todoItems.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <i
              className="fas fa-trash"
              onClick={() =>
                setTodoItems(
                  todoItems.filter((_, currentIndex) => index !== currentIndex)
                )
              }
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
