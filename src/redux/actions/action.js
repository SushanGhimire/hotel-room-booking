import { DARK_MODE, TOGGLE_LANG, SET_ROLE } from "./actionsTypes";

export const darkToggle = () => {
  return {
    type: DARK_MODE,
  };
};
export const toggleLang = (data) => {
  return {
    type: TOGGLE_LANG,
    payload: data,
  };
};

export const setRole = (data) => {
  return {
    type: SET_ROLE,
    payload: data,
  };
};
