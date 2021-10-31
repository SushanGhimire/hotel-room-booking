import { DARK_MODE, TOGGLE_LANG } from "../actions/actionsTypes";

const initialState = {
  darkmode: false,
  lang: "EN",
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
    default:
      return state;
  }
};

export default darkModeReducer;
