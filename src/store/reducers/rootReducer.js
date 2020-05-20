import { combineReducers } from "redux";
import userReducer from "./userReducer";
import driverReducer from "./driverReducer";
import busAssistantReducer from "./busAssistantReducer";


export default combineReducers({
  users: userReducer,
  drivers: driverReducer,
  busAssistants: busAssistantReducer
});
