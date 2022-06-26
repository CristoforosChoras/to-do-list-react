import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";

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
      <Input
        placeholder="Add a note"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="toDoInput"
      />
      <button onClick={submitTodoHandler} className="btnSubmit">
        <Fab size="small" aria-label="add">
          <AddIcon />
        </Fab>
      </button>
      <div className="select">
        <FormControl>
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
