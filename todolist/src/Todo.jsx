import React, { useState } from "react";
import List from "./List";

function Todo() {
  const [allTodo, setAllTodo] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTodo([todo, ...allTodo]);
    setTodo("");
  };
  return (
    <div className="todo">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          required
        />
        <button>Add</button>
      </form>
      {allTodo.map((item, key) => (
        <List item={item} key={key} id={key} setAllTodo={setAllTodo} allTodo={allTodo} />
      ))}
    </div>
  );
}

export default Todo;
