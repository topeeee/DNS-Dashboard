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
import vehicleReducer from "./vehicleReducer";
import modeReducer from "./modeReducer";
import driverLoggingReducer from "./driverLoggingReducer";
import areaReducer from "./areaReducer";
import driverRouteReducer from "./driverRouteReducer";
import operatorReducer from "./operatorReducer";
import partnerReducer from "./partnerReducer";
import serviceReducer from "./serviceReducer";
import trainLineReducer from "./trainLineReducer";


export default combineReducers({
  user: userReducer,
  driver: driverReducer,
  busAssistants: busAssistantReducer,
  payment:  paymentReducer,
  auth: authenticationReducer,
  state: stateReducer,
  zone: zoneReducer,
  route: routeReducer,
  busStop: busStopReducer,
  trip:  tripReducer,
  booking:  bookingReducer,
  vehicle: vehicleReducer,
  mode:  modeReducer,
  driverLogging: driverLoggingReducer,
  area: areaReducer,
  driverRoute: driverRouteReducer,
  operator: operatorReducer,
  partners: partnerReducer,
  service: serviceReducer,
  trainLine: trainLineReducer,
});
