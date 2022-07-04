import {ActionsTypes} from "../constants/user.action.types";
const initialState = {
  users: [],
};
export const todoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionsTypes.SET_USERS:
      return {...state, users: payload};
    default:
      return state;
  }
};

export const selectedUserReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case ActionsTypes.SELECTED_USER:
      return {...state, ...payload};
    default:
      return state;
  }
};
