import React from "react";
import ListTodo from "./Todo";

const ToDoList = ({ todo, setTodo }) => {
  return (
    <div className="toDoContainer">
      <ul className="toDoItem">
        {todo.map((todoItem) => (
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
