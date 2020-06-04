import {
  DRIVERLOGGING_BY_USER,
  DRIVERLOGGING_MODAL_CREATE,
  DRIVERLOGGING_MODAL_DELETE,
  DELETE_DRIVERLOGGING,
  CLOSE_MODAL_DELETE_DRIVERLOGGING,
  LOADING_DRIVERLOGGING,
  DRIVERLOGGING_ERROR,
  SEARCH_DRIVERLOGGING,
  REMOVE_DRIVERLOGGING_ERROR
} from "../actionTypes";

const initialState = {
  driverLoggings: null,
  driverLogging: null,
  DriverLoggingModalCreate: false,
  DriverLoggingModalDelete: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null
};

function driverLoggingReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DRIVERLOGGING_BY_USER: {
      return {
        ...state,
        driverLogging: null,
        error: null,
        driverLoggings: payload,
        isLoading: false,
      };
    }
    case SEARCH_DRIVERLOGGING: {
      return {
        ...state,
        driverLoggings: null,
        error: null,
        driverLogging: payload,
        isLoading: false

      };
    }
    case  DRIVERLOGGING_MODAL_CREATE: {
      return {
        ...state,
        DriverLoggingModalCreate: !state.DriverLoggingModalCreate
      };
    }
    case  DRIVERLOGGING_MODAL_DELETE: {
      return {
        ...state,
        DriverLoggingModalDelete: !state.DriverLoggingModalDelete,
        DeleteID: payload
      };
    }
    case   DELETE_DRIVERLOGGING: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    case   CLOSE_MODAL_DELETE_DRIVERLOGGING: {
      return {
        ...state,
        DriverLoggingModalDelete: false
      };
    }
    case LOADING_DRIVERLOGGING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case DRIVERLOGGING_ERROR: {
      return {
        ...state,
        driverLoggings: null,
        driverLogging: null,
        error: payload,
        isLoading: false
      };
    }
    case REMOVE_DRIVERLOGGING_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default driverLoggingReducer;
