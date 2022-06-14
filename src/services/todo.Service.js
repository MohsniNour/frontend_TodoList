import axios from "axios";

export const todoService = {
  addTodo,
  UpdateTodo,
  getTodo,
};

async function getTodo(id) {
  return await axios
    .get("http://localhost:5000/todo", id)
    .then((res) => {
      console.log("todo!");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function addTodo(todo) {
  let formData = new FormData();
  formData.append("toDoName", todo.toDoName);
  formData.append("toDoDescription", todo.toDoDescription);
  formData.append("startDate", todo.startDate);
  formData.append("EndDate", todo.EndDate);
  formData.append("user", todo.user);
  console.log(formData);
  return await axios
    .post("http://localhost:5000/todo/add", formData)
    .then((res) => {
      console.log("todo added!");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function UpdateTodo(todo) {
  let formData = new FormData();
  formData.append("toDoName", todo.toDoName);
  formData.append("toDoDescription", todo.toDoDescription);
  formData.append("startDate", todo.startDate);
  formData.append("EndDate", todo.EndDate);
  console.log(formData);
  return await axios
    .post("http://localhost:5000/todo/update", formData)
    .then((res) => {
      console.log("todo updated!");
    })
    .catch((err) => {
      console.log(err);
    });
}
