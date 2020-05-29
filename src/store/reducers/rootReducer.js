import { combineReducers } from "redux";
import userReducer from "./userReducer";
import driverReducer from "./driverReducer";
import busAssistantReducer from "./busAssistantReducer";
import paymentReducer from "./paymentReducer";
import authenticationReducer from "./authenticationReducer";
import stateReducer from "./stateReducer";
import zoneReducer from "./zoneReducer";
import routeReducer from "./routeReducer";
import busStopReducer from "./busStopReducer";


export default combineReducers({
  users: userReducer,
  drivers: driverReducer,
  busAssistants: busAssistantReducer,
  payment:  paymentReducer,
  auth: authenticationReducer,
  state: stateReducer,
  zone: zoneReducer,
  route: routeReducer,
  busStop: busStopReducer
});
