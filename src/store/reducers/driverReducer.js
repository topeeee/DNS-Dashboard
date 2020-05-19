import {DRIVER_MODAL_CREATE, DRIVER_MODAL_DELETE, DRIVER_MODAL_STATUS, DRIVER_MODAL_UPDATE} from "../actionTypes";

const initialState = {
  DriverModalCreate: false,
  DriverModalDelete: false,
  DriverModalUpdate: false,
  DriverModalStatus: false,
};

function driverReducer(state = initialState, action) {
  switch (action.type) {
    case DRIVER_MODAL_CREATE: {
        return {
          ...state,
          DriverModalCreate: !state.DriverModalCreate,
        };
    }
    case DRIVER_MODAL_DELETE: {
      return {
        ...state,
        DriverModalDelete: !state.DriverModalDelete,
      };
    }
    case DRIVER_MODAL_UPDATE: {
      return {
        ...state,
        DriverModalUpdate: !state.DriverModalUpdate,
      };
    }

    case DRIVER_MODAL_STATUS: {
      return {
        ...state,
        DriverModalStatus: !state. DriverModalStatus,
      };
    }
    default:
      return state
  }
}

export default driverReducer;
