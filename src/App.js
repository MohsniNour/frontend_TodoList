import React from "react";
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import SignInSide from "./components/SignIn";
import TodoAdd from "./components/TodoAdd";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <SignInSide /> },
    { path: "/home", element: <Home /> },
    { path: "/todoList", element: <TodoList /> },
    { path: "/todo/add", element: <TodoAdd /> },
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
