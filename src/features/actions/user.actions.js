import {ActionsTypes} from "../constants/user.action.types";

export const selectedUser = (user) => {
  return {
    type: ActionsTypes.SELECTED_USER,
    payload: user,
  };
};
export const setUsers = (users) => {
  return {
    type: ActionsTypes.SET_USERS,
    payload: users,
  };
};