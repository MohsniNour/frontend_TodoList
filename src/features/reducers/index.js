import {combineReducers} from "redux";
import {todoReducer, selectedTodoReducer} from "./todo.reducers";

const reducers = combineReducers({
  todos: todoReducer,
  todo: selectedTodoReducer,
});

export default reducers;
