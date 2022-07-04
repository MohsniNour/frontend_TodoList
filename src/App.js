import React from "react";
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./components/Home";
import TodoList from "./components/Todo/TodoList";
import SignInSide from "./components/SignIn";
import TodoAdd from "./components/Todo/TodoAdd";
import TodoUpdate from "./components/Todo/TodoUpdate";
import SignUpSide from "./components/SignUp";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <SignInSide /> },
    { path: "/signup", element: <SignUpSide /> },
    { path: "/home", element: <Home /> },
    { path: "/todoList", element: <TodoList /> },
    { path: "/todo/add", element: <TodoAdd /> },
    { path: "/todo/update/:_id", element: <TodoUpdate/> }
    // ...
  ]);
  return routes;
};
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
