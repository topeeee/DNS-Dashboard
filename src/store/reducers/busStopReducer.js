import {BUS_STOP_BY_USER, BUS_STOP_MODAL_CREATE, BUS_STOP_MODAL_UPDATE, DELETE_BUS_STOP,CLOSE_MODAL_DELETE_BUS_STOP, LOADING_BUS_STOP} from "../actionTypes";

const initialState = {
  busStops: null,
  BusStopModalCreate: false,
  BusStopModalUpdate: false,
  updateId: null,
  DeleteRes: null,
  isLoading: false
};

function busStopReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case BUS_STOP_BY_USER: {
      return {
        ...state,
        busStops: payload,
        isLoading: false,
      };
    }
    case  BUS_STOP_MODAL_CREATE: {
      return {
        ...state,
        BusStopModalCreate: !state.BusStopModalCreate
      };
    }
    case  BUS_STOP_MODAL_UPDATE: {
      return {
        ...state,
        BusStopModalUpdate: !state.BusStopModalUpdate,
        updateId: payload
      };
    }
    case   DELETE_BUS_STOP: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    case   CLOSE_MODAL_DELETE_BUS_STOP: {
      return {
        ...state,
        BusStopModalDelete: false
      };
    }
    case LOADING_BUS_STOP: {
      return {
        ...state,
        isLoading: true
      };
    }
    default:
      return state
  }
}

export default busStopReducer;
