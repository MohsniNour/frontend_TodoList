import React, { useState } from "react";
import { Input, Textarea, SubmitButton } from "./common/common";
import { Marginer } from "./common/marginer";
import { todoService } from "../services/todo.Service";
// import { Navigate } from "react-router-dom";
import ResponsiveAppBar from "./NavBar";

function TodoAdd(props) {
  // let history = Navigate();
  const [state, setState] = useState({
    toDoName: "",
    toDoDescription: "",
    startDate: "",
    EndDate: "",
    user: localStorage.getItem("currentUserId"),
  });
  const showResponse = (response) => {
    console.log(response);
    //call to a backend to verify against recaptcha with private key
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "toDoName") {
      setState((prevState) => {
        return { ...prevState, toDoName: value };
      });
    } else if (name === "toDoDescription") {
      setState((prevState) => {
        return { ...prevState, toDoDescription: value };
      });
    } else if (name === "startDate") {
      setState((prevState) => {
        return { ...prevState, startDate: value };
      });
    } else if (name === "EndDate") {
      setState((prevState) => {
        return { ...prevState, EndDate: value };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (
      state.toDoName &&
      state.toDoDescription &&
      state.startDate &&
      state.EndDate
    ) {
      todoService.addTodo(state);
      // history("/home");
    }
  };

  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div>
        <div className="form-style-5 col-6">
          <h3>Create New Task</h3>
          <form style={{ alignItems: "center" }}>
            <div className="form-group">
              <label>Name: </label>
              <Input
                id="toDoName"
                name="toDoName"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                className="ml-1"
              />
            </div>
            <div className="form-group">
              <label>Description: </label>
              <Textarea
                id="toDoDescription"
                name="toDoDescription"
                placeholder="Description"
                onChange={handleChange}
                className="ml-1"
              />
            </div>
            <div className="form-group">
              <label>Start date: </label>
              <Input
                id="startDate"
                name="startDate"
                type="Date"
                placeholder="Start date"
                onChange={handleChange}
                className="ml-1"
              />
              <label>End date: </label>
              <Input
                id="EndDate"
                name="EndDate"
                type="Date"
                placeholder="End date"
                onChange={handleChange}
                className="mr-1"
              />
            </div>
            <div className="form-group">
              <Marginer direction="vertical" margin={10} />
              <SubmitButton type="submit" onClick={handleSubmit}>
                Add new task
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TodoAdd;
