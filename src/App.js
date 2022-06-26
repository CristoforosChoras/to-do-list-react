import React, { useState } from "react";
import "./App.css";
//components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus]= useState("all")

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
      <ToDoList setTodo={setTodo} todo={todo} />
    </div>
  );
}

export default App;
