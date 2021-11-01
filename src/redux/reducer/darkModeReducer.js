import { DARK_MODE, TOGGLE_LANG, SET_ROLE } from "../actions/actionsTypes";

const initialState = {
  darkmode: false,
  lang: "EN",
  role: "H",
};

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    case TOGGLE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case SET_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
