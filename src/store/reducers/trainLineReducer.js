import {
  LOADING_TRAINLINE, REMOVE_TRAINLINE_ERROR,
  SEARCH_TRAINLINE,
  TRAINLINE, TRAINLINE_ERROR,
  TRAINLINE_MODAL_CREATE,
  TRAINLINE_MODAL_UPDATE
} from "../actionTypes";

const initialState = {
  trainLines: null,
  trainLine: null,
  TrainLineModalCreate: false,
  TrainLineModalUpdate: false,
  updateId: null,
  DeleteRes: null,
  isLoading: false,
  error: null
};

function trainLineReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TRAINLINE: {
      return {
        ...state,
        trainLine: null,
        error: null,
        trainLines: payload,
        isLoading: false,
      };
    }
    case SEARCH_TRAINLINE: {
      return {
        ...state,
        trainLines: null,
        error: null,
        trainLine: payload,
        isLoading: false

      };
    }
    case  TRAINLINE_MODAL_CREATE: {
      return {
        ...state,
        TrainLineModalCreate: !state.TrainLineModalCreate
      };
    }
    case  TRAINLINE_MODAL_UPDATE: {
      return {
        ...state,
        TrainLineModalUpdate: !state.TrainLineModalUpdate,
        updateId: payload
      };
    }


    case LOADING_TRAINLINE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case TRAINLINE_ERROR: {
      return {
        ...state,
        trainLines: null,
        trainLine: null,
        error: payload,
        isLoading: false
      };
    }
    case REMOVE_TRAINLINE_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default trainLineReducer;
