import {DRIVER_MODAL_CREATE} from "../actionTypes";

const initialState = {
  DriverModalCreate: false
};

function driverReducer(state = initialState, action) {
  if (action.type === DRIVER_MODAL_CREATE) {
    return {
      ...state,
      DriverModalCreate: !state.DriverModalCreate,
    };
  } else {
    return state;
  }
}

export default driverReducer;
