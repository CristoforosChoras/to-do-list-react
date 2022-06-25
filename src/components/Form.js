import React from "react";

const Form = ({setInputText}) => {

const inputTextHandler = (event)=>{
  setInputText(event.target.value)
}


  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="toDoInput" ></input>
      <button className="btn"></button>
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
