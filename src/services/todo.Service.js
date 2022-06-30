import axios from "axios";

export const todoService = {
  addTodo,
  UpdateTodo,
  getTodo,
  getAll,
  deleteTodo,
};

async function deleteTodo(id) {
  return await axios.delete("http://localhost:5000/todo", id)
    .then((res) => {
      console.log("todo!");
    })
    .catch((err) => {
      console.log(err);
    });
  }

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

async function getAll() {
  return await axios
    .get("http://localhost:5000/todo/all")
    .then((res) => {
      console.log("todo!");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function addTodo(todo) {
  return await axios
    .post("http://localhost:5000/todo/createTodo", todo,{})
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
  formData.append("EndDate", todo.endDate);
  console.log(formData);
  return await axios
    .post("http://localhost:5000/todo/todo/update", formData.id,formData)
    .then((res) => {
      console.log("todo updated!");
    })
    .catch((err) => {
      console.log(err);
    });
}
