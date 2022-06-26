import React from "react";
import ListTodo from "./Todo";

const ToDoList = ({ todo }) => {
  return (
    <div className="toDoContainer">
      <ul className="toDoItem">
        {todo.map((todoItem) => (
          <ListTodo key={todoItem.id} text={todoItem.text} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
