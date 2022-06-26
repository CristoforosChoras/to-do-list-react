import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Form = ({ setInputText, todo, setTodo, inputText, setStatus }) => {
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
    }
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  
   

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="toDoInput"
      ></input>
      <Fab onClick={submitTodoHandler} className="btn" size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <div className="select">
        <FormControl  >
          <Select
            onChange={statusHandler}
            autoWidth
            name=""
            className="filterToDo"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="checked">Checked</MenuItem>
            <MenuItem value="more">More To Do</MenuItem>
          </Select>
        </FormControl>
      </div>
    </form>
  );
};

export default Form;
