import {
  MODE_BY_USER,
  MODE_MODAL_CREATE,
  MODE_MODAL_DELETE,
  DELETE_MODE,
  CLOSE_MODAL_DELETE_MODE,
  LOADING_MODE,
  MODE_ERROR,
  SEARCH_MODE,
  REMOVE_MODE_ERROR
} from "../actionTypes";

const initialState = {
  modes: null,
  mode: null,
  ModeModalCreate: false,
  ModeModalDelete: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null
};

function modeReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case MODE_BY_USER: {
      return {
        ...state,
        mode: null,
        error: null,
        modes: payload,
        isLoading: false,
      };
    }
    case SEARCH_MODE: {
      return {
        ...state,
        modes: null,
        error: null,
        mode: payload,
        isLoading: false

      };
    }
    case  MODE_MODAL_CREATE: {
      return {
        ...state,
        ModeModalCreate: !state.ModeModalCreate
      };
    }
    case  MODE_MODAL_DELETE: {
      return {
        ...state,
        ModeModalDelete: !state.ModeModalDelete,
        DeleteID: payload
      };
    }
    case   DELETE_MODE: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    case   CLOSE_MODAL_DELETE_MODE: {
      return {
        ...state,
        ModeModalDelete: false
      };
    }
    case LOADING_MODE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case MODE_ERROR: {
      return {
        ...state,
        modes: null,
        mode: null,
        error: payload,
        isLoading: false
      };
    }
    case REMOVE_MODE_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default modeReducer;
