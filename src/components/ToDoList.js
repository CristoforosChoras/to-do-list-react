import React from "react";
import ListTodo from "./Todo";

const ToDoList = ({ todo }) => {
  return (
    <div className="toDoContainer">
      <ul className="toDoItem">
        {todo.map((todoItem) => (
          <ListTodo />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
