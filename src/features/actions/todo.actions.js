import {ActionsTypes} from "../constants/todo.action.types";

export const selectedTodo = (todo) => {
  return {
    type: ActionsTypes.SELECTED_TODO,
    payload: todo,
  };
};
export const setTodos = (tasks) => {
  return {
    type: ActionsTypes.SET_TODOS,
    payload: tasks,
  };
};
