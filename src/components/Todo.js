import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from "@mui/icons-material/Check";
import Fab from "@mui/material/Fab";
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
      <div className="btnHolder">
        <button className="btnGreen">
          <Fab
            onClick={checkBtnHandler}
            size="small"
            color=""
            aria-label="add"
          >
            <CheckIcon />
          </Fab>
        </button>
        <button className="btnRed">
          <Fab onClick={deleteHandler} c size="small" color="">
            <DeleteOutlineIcon />
          </Fab>
        </button>
      </div>
    </div>
  );
};

export default ListTodo;
