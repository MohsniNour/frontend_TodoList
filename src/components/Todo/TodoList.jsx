import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import TodoComponent from "./TodoComponent";
import { setTodos } from "../../features/actions/todo.actions";
import TextField from "@mui/material/TextField";
import axios from "axios";
import ResponsiveAppBar from "../NavBar";
import "./todo.css";

const TodoList= () => {
  const tasks = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [searchedName, setSearchedName] = useState("");

  const handleChange = (e) => {
      e.preventDefault();
      setSearchedName(e.target.value);
  };

  const fetchTasks =async () => {
    const result = await axios.get("http://localhost:5000/todo/all").catch((err) => { console.log("Err", err);
  });
      console.log("🚀 ~ file: TodoList.jsx ~ line 27 ~ fetchTasks ~ result", result)
      dispatch(setTodos(result.data));
  };
  const searchHandel = () => {
      return tasks.filter((task) => task.toDoName.toLowerCase().includes(searchedName.toLowerCase()));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  console.log("Tasks:", tasks);
  console.log("searched Name", searchedName);

  return (
      <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div>
          <TextField id="standard-basic" label="Search" variant="standard" style={{ width: "900px" }} className="ml-5" name="searchedName" onChange={handleChange} />
          <div style={{ maxHeight: "500px", overflowY: "auto", overflowX: "hidden" }} className="global-scroll">
              <Grid container className="tasks-list-container" columns={{ xs: 8, md: 8, lg: 12 }}>
                  <TodoComponent  tasks={searchHandel()} className="ml-5"/>
              </Grid>
          </div>
      </div>
      </div>
  );
};

export default TodoList;
