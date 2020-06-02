import { combineReducers } from "redux";
import driverReducer from "./driverReducer";
import busAssistantReducer from "./busAssistantReducer";
import paymentReducer from "./paymentReducer";
import authenticationReducer from "./authenticationReducer";
import stateReducer from "./stateReducer";
import zoneReducer from "./zoneReducer";
import routeReducer from "./routeReducer";
import busStopReducer from "./busStopReducer";
import tripReducer from "./tripReducer";
import userReducer from "./userReducer";
import bookingReducer from "./bookingReducer";


export default combineReducers({
  user: userReducer,
  drivers: driverReducer,
  busAssistants: busAssistantReducer,
  payment:  paymentReducer,
  auth: authenticationReducer,
  state: stateReducer,
  zone: zoneReducer,
  route: routeReducer,
  busStop: busStopReducer,
  trip:  tripReducer,
  booking:  bookingReducer
});
