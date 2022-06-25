import React, { useState } from "react";
import "./App.css";
//components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {

const[inputText, setInputText] = useState("");
const [todos,setTodos] = useState([])

  return (
    <div className="App">
      <header className="header">To Do List</header>
      <Form setInputText={setInputText}/>
      <ToDoList  />
    </div>
  );
}

export default App;
