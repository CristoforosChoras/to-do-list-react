import React, { useState, useEffect } from "react";
import "./App.css";
//components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterStatus, setFilterStatus] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveTodo();
  }, [todo, status]);
  const filterHandler = () => {
    switch (status) {
      case "checked":
        setFilterStatus(todo.filter((item) => item.checked === true));
        break;
      case "more":
        setFilterStatus(todo.filter((item) => item.checked === false));
        break;
      default:
        setFilterStatus(todo);
        break;
    }
  };

  const saveTodo = () => {
   if (todo.length>0) {
    localStorage.setItem("todo", JSON.stringify(todo));
   }
      
    
  };
  const getLocal = () => {
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todo"))
      setTodo(local)
      console.log(local);
    }
  };

  return (
    <div className="App">
      <header className="header">To Do List</header>

      <Form
        inputText={inputText}
        todo={todo}
        setTodo={setTodo}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList filterStatus={filterStatus} setTodo={setTodo} todo={todo} />
    </div>
  );
}

export default App;
