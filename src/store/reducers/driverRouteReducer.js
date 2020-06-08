import {
  DRIVER_ROUTE_BY_USER,
  DRIVER_ROUTE_MODAL_CREATE,
  DRIVER_ROUTE_MODAL_DELETE,
  DELETE_DRIVER_ROUTE,
  CLOSE_MODAL_DELETE_DRIVER_ROUTE,
  LOADING_DRIVER_ROUTE,
  DRIVER_ROUTE_ERROR,
  SEARCH_DRIVER_ROUTE,
  REMOVE_DRIVER_ROUTE_ERROR
} from "../actionTypes";

const initialState = {
  driverRoutes: null,
  driverRoute: null,
  DriverRouteModalCreate: false,
  DriverRouteModalDelete: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null
};

function driverRouteReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DRIVER_ROUTE_BY_USER: {
      return {
        ...state,
        driverRoute: null,
        error: null,
        driverRoutes: payload,
        isLoading: false,
      };
    }
    case SEARCH_DRIVER_ROUTE: {
      return {
        ...state,
        driverRoutes: null,
        error: null,
        driverRoute: payload,
        isLoading: false

      };
    }
    case  DRIVER_ROUTE_MODAL_CREATE: {
      return {
        ...state,
        DriverRouteModalCreate: !state.DriverRouteModalCreate
      };
    }
    case  DRIVER_ROUTE_MODAL_DELETE: {
      return {
        ...state,
        driverRouteModalDelete: !state.DriverRouteModalDelete,
        DeleteID: payload
      };
    }
    case   DELETE_DRIVER_ROUTE: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    case   CLOSE_MODAL_DELETE_DRIVER_ROUTE: {
      return {
        ...state,
        DriverRouteModalDelete: false
      };
    }
    case LOADING_DRIVER_ROUTE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case DRIVER_ROUTE_ERROR: {
      return {
        ...state,
        driverRoutes: null,
        driverRoute: null,
        error: payload,
        isLoading: false
      };
    }
    case REMOVE_DRIVER_ROUTE_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default driverRouteReducer;
