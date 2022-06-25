import React from "react";

const Form = () => {
  return (
    <form>
      <input type="text" className="toDoInput"></input>
      <button></button>
      <div className="select">
        <select name="" className="filterToDo">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
    </form>
  );
};

export default Form;