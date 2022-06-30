import {ActionsTypes} from "../constants/todo.action.types";
const initialState = {
  todos: [],
};
export const todoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionsTypes.SET_TODOS:
      return {...state, todos: payload};
    default:
      return state;
  }
};

export const selectedTodoReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case ActionsTypes.SELECTED_TODO:
      return {...state, ...payload};
    default:
      return state;
  }
};
