import React, { useState } from "react";

export const EditToDoForm = ({ task ,editTodo}) => {
  const [value, setValue] = useState(task.task);

  const handelSubmit = e => {
    e.preventDefault();

    editTodo(value ,task.id);

    setValue("")
  };
  return (
    <form className="ToDoform" onSubmit={handelSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className="todo-btn">
        Update task
      </button>
    </form>
  );
};