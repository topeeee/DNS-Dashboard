import { combineReducers } from "redux";
import userReducer from "./userReducer";
import driverReducer from "./driverReducer";


export default combineReducers({
  users: userReducer,
  drivers: driverReducer
});
