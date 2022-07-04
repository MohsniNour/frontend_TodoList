import axios from "axios";

export const todoService = {
  addTodo,
  UpdateTodo,
  getTodo,
  getAll,
  deleteTodo,
};

async function deleteTodo(id) {
  return await axios.delete("http://localhost:5000/todo/"+id)
    .then((res) => {
      console.log("todo deleted !");
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
  return await axios
    .put("http://localhost:5000/todo/update/"+todo.id,todo,{})
    .then((res) => {
      console.log("todo updated!");
    })
    .catch((err) => {
      console.log(err);
    });
}
