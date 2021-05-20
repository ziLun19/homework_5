import React from "react";

const Todo = ({ onComplete, todo }) => {
  function handleComplete() {
    onComplete(todo.id);
  }

  return (
    <li
      style={{ textDecoration: todo.complete ? "line-through" : "" }}
      onClick={handleComplete}
    >
      {todo.text}
    </li>
  );
};

export default Todo;