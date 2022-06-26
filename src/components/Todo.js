import React from "react";

const ListTodo = ({ text, todoItem, todo, setTodo }) => {
  const deletehandler = () => {
    setTodo(todo.filter(element =>
        element.id !== todoItem.id
        ))
  };

  return (
    <div className="holdItems">
      <li className="listTodo">{text}</li>
      <button className="checkBtn">Check</button>
      <button onClick={deletehandler} className="deleteBtn">Delete</button>
    </div>
  );
};

export default ListTodo;
