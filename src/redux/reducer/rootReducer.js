import { combineReducers } from "redux";
import darkModeReducer from "./darkModeReducer";
const rootReducer = combineReducers({
  darkmode: darkModeReducer,
});

export default rootReducer;
