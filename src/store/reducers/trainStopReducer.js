import {LOADING_TRAIN_STOP, TRAIN_STOP, TRAIN_STOP_MODAL_CREATE, TRAIN_STOP_MODAL_UPDATE} from "../actionTypes";

const initialState = {
  trainStops: null,
  TrainStopModalCreate: false,
  TrainStopModalUpdate: false,
  updateId: null,
  DeleteRes: null,
  isLoading: false
};

function trainStopReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TRAIN_STOP: {
      return {
        ...state,
        trainStops: payload,
        isLoading: false,
      };
    }
    case  TRAIN_STOP_MODAL_CREATE: {
      return {
        ...state,
        TrainStopModalCreate: !state.TrainStopModalCreate
      };
    }
    case  TRAIN_STOP_MODAL_UPDATE: {
      return {
        ...state,
        TrainStopModalUpdate: !state.TrainStopModalUpdate,
        updateId: payload
      };
    }

    case LOADING_TRAIN_STOP: {
      return {
        ...state,
        isLoading: true
      };
    }
    default:
      return state
  }
}

export default trainStopReducer;
