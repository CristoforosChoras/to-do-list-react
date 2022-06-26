import React from "react";

const Form = ({ setInputText, todo, setTodo, inputText }) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };
  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodo([
      ...todo,
      { text: inputText, checked: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

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
        <select name="" className="filterToDo">
          <option value="all">All</option>
          <option value="checked">Checked</option>
          <option value="more">More To Do</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
