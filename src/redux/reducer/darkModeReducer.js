import { DARK_MODE } from "../actions/actionsTypes";

const initialState = {
  darkmode: false,
};

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
