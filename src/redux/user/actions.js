import { SET_CURRENT_USER } from "./types.js";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
