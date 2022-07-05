import axios from "axios";

export const userService = {
  addUser,
  UpdateUser,
  getUser,
  getAll,
  deleteUser,
};

async function deleteUser(id) {
  return await axios.delete("http://localhost:5000/users/"+id)
    .then((res) => {
      console.log("user deleted !");
    })
    .catch((err) => {
      console.log(err);
    });
  }

async function getUser(id) {
  return await axios
    .get("http://localhost:5000/users", id)
    .then((res) => {
      console.log("user!");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function getAll() {
  return await axios
    .get("http://localhost:5000/users/all")
    .then((res) => {
      console.log("user!");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function addUser(user) {
  return await axios
    .post("http://localhost:5000/users/add", user)
    .then((res) => {
      console.log("user added!");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function UpdateUser(user) {
  return await axios
    .put("http://localhost:5000/users/update/"+user.id,user,{})
    .then((res) => {
      console.log("user updated!");
    })
    .catch((err) => {
      console.log(err);
    });
}
