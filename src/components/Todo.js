import React from "react";


const ListTodo = ({text}) => {
  return (
    <div className="holdItems">
      <li className="listTodo">{text}</li>
      <button className="checkBtn">Check</button>
      <button className="deleteBtn">Delete</button>
    </div>
  );
};

export default ListTodo;
