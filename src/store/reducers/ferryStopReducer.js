import {FERRY_STOP, FERRY_STOP_MODAL_CREATE, FERRY_STOP_MODAL_UPDATE, LOADING_FERRY_STOP} from "../actionTypes";


const initialState = {
  ferryStops: null,
  FerryStopModalCreate: false,
  FerryStopModalUpdate: false,
  updateId: null,
  DeleteRes: null,
  isLoading: false
};

function ferryStopReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FERRY_STOP: {
      return {
        ...state,
        ferryStops: payload,
        isLoading: false,
      };
    }
    case  FERRY_STOP_MODAL_CREATE: {
      return {
        ...state,
        FerryStopModalCreate: !state.FerryStopModalCreate
      };
    }
    case  FERRY_STOP_MODAL_UPDATE: {
      return {
        ...state,
        FerryStopModalUpdate: !state.FerryStopModalUpdate,
        updateId: payload
      };
    }

    case LOADING_FERRY_STOP: {
      return {
        ...state,
        isLoading: true
      };
    }
    default:
      return state
  }
}

export default ferryStopReducer;
