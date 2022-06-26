import React from "react";
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
      <li className={`listTodo  ${todoItem.checked ? 
      "checked" : ""}`}>
        {text}
      </li>
      <div className="btnHolder">
      <div onClick={checkBtnHandler} className="checkBtn">
        <CheckCircleIcon/>
      </div>
      <div onClick={deleteHandler} className="deleteBtn">
      <HighlightOffTwoToneIcon/>
      </div>
      </div>
      
    </div>
  );
};

export default ListTodo;
