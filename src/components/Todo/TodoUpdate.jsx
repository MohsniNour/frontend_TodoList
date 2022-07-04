import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectedTodo} from "../../features/actions/todo.actions";
import {useParams} from "react-router-dom";
// import {useHistory} from "react-router-dom";
import axios from "axios";
import {Input, Textarea, SubmitButton} from "../common/common";
import {Marginer} from "../common/marginer";
import {todoService} from "../../services/todo.Service";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../NavBar";
import URL from "../../features/constants/services.constants";


const TodoUpdate = () => {
  const {_id} = useParams();
  const dispatch = useDispatch();
  let history = useNavigate();

  const todo = useSelector((state) => state.todo);
  console.log("🚀 ~ file: TodoUpdate.jsx ~ line 23 ~ TodoUpdate ~ todo", todo)
  
  const fetchTodoDetails = async () => {
    const result = await axios
      .get("http://localhost:5000/todo" + `/${_id}`)
      .catch((err) => {
        console.log("Err", err);
      });
    console.log("todo details", result);
    dispatch(selectedTodo(result.data));
  };
  console.log("todo :", todo);
  const [todoById, setTodoById] = useState({});
  console.log("todo ",todoById);
 
  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    if (name === "toDoName") {
      setTodoById((prevState) => {
        return {...prevState, toDoName: value};
      });
    } else if (name === "toDoDescription") {
      setTodoById((prevState) => {
        return {...prevState, toDoDescription: value};
      });
    } else if (name === "startDate") {
      setTodoById((prevState) => {
        return {...prevState, startDate: value};
      });
    }
    else if (name === "EndDate") {
      setTodoById((prevState) => {
          return {...prevState, endDate: value};
        });
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(_id);
    console.log(todoById);
    if (
      todoById.toDoName &&
      todoById.toDoDescription &&
      todoById.startDate &&
      todoById.endDate
    ) {
      todoService.UpdateTodo(todoById);
      history.push("/todoList");
    }
  };
  const handleReturn =() => {
    history("/todoList");
};

  useEffect(() => {
    if (_id && _id !== "") {
      console.log("id", _id);
      fetchTodoDetails();
      console.log("🚀 ~ file: TodoUpdate.jsx ~ line 81 ~ useEffect ~ fetchTodoDetails", fetchTodoDetails)
    }
  }, [_id]);

  useEffect(() => {
    console.log("hello");
    if (todo && Object.keys(todo).length > 0) {
      setTodoById({
        id: _id,
        toDoName: todo.toDoName,
        toDoDescription: todo.toDoDescription,
        startDate: todo.startDate,
        endDate: todo.endDate,
      });
    }
      console.log("🚀 ~ file: TodoUpdate.jsx ~ line 98 ~ useEffect ~ todoById", todoById)
  }, [todo, _id]);

  return (
    <div>
    <ResponsiveAppBar></ResponsiveAppBar>
    <div>
      <div className="form-style-5 col-6">
        <h3>Update Task</h3>
        {todoById && Object.keys(todoById).length > 0 && (
        <form style={{ alignItems: "center" }}>
          <div className="form-group">
            <label>Name: </label>
            <Input
              id="toDoName"
              name="toDoName"
              value={todoById.toDoName}
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
              value={todoById.toDoDescription}
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
              value={todoById.startDate}
              type="Date"
              placeholder="Start date"
              onChange={handleChange}
              className="ml-1"
            />
            </div>
            <div className="form-group">
            <label>End date: </label>
            <Input
              id="EndDate"
              name="EndDate"
              value={todoById.endDate}
              type="Date"
              placeholder="End date"
              onChange={handleChange}
              className="mr-1"
            />
          </div>
          <div className="form-group">
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit" onClick={handleSubmit}>
              Update task
            </SubmitButton>
            <SubmitButton type="submit" onClick={handleReturn}>
                Return
              </SubmitButton>
          </div>
        </form>
)};
</div>
</div>
</div>
  );}

export default TodoUpdate;
