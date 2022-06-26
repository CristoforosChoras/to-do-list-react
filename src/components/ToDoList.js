import React from "react";
import ListTodo from "./Todo";

const ToDoList = ({ todo, setTodo ,filterStatus}) => {
  return (
    <div className="toDoContainer">
      <ul className="toDoItem">
        {filterStatus.map((todoItem) => (
          <ListTodo
            setTodo={setTodo}
            todo={todo}
            todoItem={todoItem  }
            key={todoItem.id}
            text={todoItem.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
