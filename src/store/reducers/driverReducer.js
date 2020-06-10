import {
  DRIVER_BY_USER,
  DRIVER_MODAL_CREATE,
  DRIVER_MODAL_DELETE,
  DELETE_DRIVER,
  CLOSE_MODAL_DELETE_DRIVER,
  LOADING_DRIVER,
  DRIVER_ERROR,
  SEARCH_DRIVER,
  REMOVE_DRIVER_ERROR,
  DRIVER_MODAL_UPDATE,
  APPROVE_DRIVER,
  DRIVER_STATUS,
  DRIVER_VEHICLE_ID,
  DRIVER_VEHICLE_ID2,
  CLEAR_DRIVER_VEHICLE_ID
} from "../actionTypes";

const initialState = {
  drivers: null,
  driver: null,
  DriverModalCreate: false,
  DriverModalDelete: false,
  DriverModalUpdate: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null,
  UpdateDriverId: null,
  approveId: null,
  getDriverVehicleId: null,
  getDriverVehicleId2: null
};

function driverReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DRIVER_BY_USER: {
      return {
        ...state,
        driver: null,
        error: null,
        drivers: payload,
        isLoading: false,
      };
    }
    case SEARCH_DRIVER: {
      return {
        ...state,
        drivers: null,
        error: null,
        driver: payload,
        isLoading: false

      };
    }
    case  DRIVER_MODAL_CREATE: {
      return {
        ...state,
        DriverModalCreate: !state.DriverModalCreate
      };
    }

    case  DRIVER_MODAL_UPDATE: {
      return {
        ...state,
        DriverModalUpdate: !state.DriverModalUpdate,
        UpdateDriverId: payload
      };
    }
    case  DRIVER_MODAL_DELETE: {
      return {
        ...state,
        DriverModalDelete: !state.DriverModalDelete,
        DeleteID: payload
      };
    }
    case   DELETE_DRIVER: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    case   CLOSE_MODAL_DELETE_DRIVER: {
      return {
        ...state,
        DriverModalDelete: false
      };
    }
    case LOADING_DRIVER: {
      return {
        ...state,
        isLoading: true
      };
    }
    case DRIVER_ERROR: {
      return {
        ...state,
        drivers: null,
        driver: null,
        error: payload,
        isLoading: false
      };
    }


    case DRIVER_VEHICLE_ID: {
      return {
        ...state,
        getDriverVehicleId: payload,

      };
    }

    case CLEAR_DRIVER_VEHICLE_ID: {
      return {
        ...state,
        getDriverVehicleId2: null,
        getDriverVehicleId: null

      };
    }

    case DRIVER_VEHICLE_ID2: {
      return {
        ...state,
        getDriverVehicleId2: payload,

      };
    }
    case DRIVER_STATUS: {
      return {
        ...state,
        approveId: payload,

      };
    }
    case REMOVE_DRIVER_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default driverReducer;
