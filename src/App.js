import React from "react";
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./components/Home";
import TodoList from "./components/TodoList";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/todoList", element: <TodoList /> },
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
