import React from "react";

const ListTodo = ({ text, todoItem, todo, setTodo }) => {
  const deleteHandler = () => {
    setTodo(todo.filter((element) => element.id !== todoItem.id));
  };
  const checkBtnHandler = () => {
    setTodo(
      todo.map((element) => {
        if (element.id === todoItem.id) {
          return {
            ...element,
            checked: !element.checked,
          };
        }
        return element;
      })
    );
  };

  return (
    <div className="holdItems">
      <li className={`listTodo  ${todoItem.checked ? "checked" : ""}`}>
        {text}
      </li>
      <button onClick={checkBtnHandler} className="checkBtn">
        Check
      </button>
      <button onClick={deleteHandler} className="deleteBtn">
        Delete
      </button>
    </div>
  );
};

export default ListTodo;
