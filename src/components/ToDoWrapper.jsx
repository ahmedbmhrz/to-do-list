import React, { useState } from "react";
import { ToDoForm } from "./ToDOForm";
import { v4 as uuidv4 } from "uuid";
import { ToDo } from "./ToDo";
import { EditToDoForm } from "./EditToDoListForm";
import "../App.css";
uuidv4();

const ToDoWrapper = () => {
  const [toDos, setTodos] = useState([]);

  const addTodo = (toDo) => {
    setTodos([
      ...toDos,
      { id: uuidv4(), task: toDo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(toDos.filter((todo) => todo.id !== id));
  };
  const editToDo = (id) => {
    setTodos(
      toDos.map((toDo) =>
        toDo.id === id
          ? {
              ...toDo,
              isEditing: !toDo.isEditing,
            }
          : toDo
      )
    );
  };

  const editTask = (task,id) => {
    setTodos(toDos.map(todo => todo.id === id ? {
        ...todo, task, isEditing: !todo.isEditing} : todo
))
  }

  return (
    <div className="ToDoWrapper">
      <h1>Get Things Done!!</h1>
      <ToDoForm addTodo={addTodo} />
      {toDos.map((todo, index) =>
        todo.isEditing ? (
          <EditToDoForm editTodo={editTask} task={todo} />
        ) : (
          <ToDo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editToDoListForm={editToDo}
          />
        )
      )}
    </div>
  );
};

export default ToDoWrapper;