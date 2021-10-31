import { DARK_MODE, TOGGLE_LANG } from "./actionsTypes";

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
