import React from "react";

const Form = ({ setInputText, todo, setTodo, inputText,setStatus }) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };
  const submitTodoHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length !== 0) {
      setTodo([
        ...todo,
        { text: inputText, checked: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }else{
      alert("noooooo")
    }
    
  };

  const statusHandler =(event)=>{
setStatus(event.target.value)
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="toDoInput"
      ></input>
      <button onClick={submitTodoHandler} className="btn"></button>
      <div className="select">
        <select onChange={statusHandler} name="" className="filterToDo">
          <option value="all">All</option>
          <option value="checked">Checked</option>
          <option value="more">More To Do</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
