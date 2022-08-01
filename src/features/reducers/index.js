import {combineReducers} from "redux";
import {todoReducer, selectedTodoReducer} from "./todo.reducers";
import {userReducer,selectedUserReducer} from "./user.reducers"

const reducers = combineReducers({
  todos: todoReducer,
  todo: selectedTodoReducer,
  users:userReducer,
  user:selectedUserReducer,
});

export default reducers;
