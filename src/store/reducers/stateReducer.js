import {
  STATES_BY_USER,
  STATE_MODAL_CREATE,
  STATE_MODAL_UPDATE,
  CLOSE_MODAL_DELETE_STATE,
  LOADING_STATE,
  STATE_ERROR,
  SEARCH_STATE,
  REMOVE_STATE_ERROR
} from "../actionTypes";

const initialState = {
  states: null,
  state: null,
  StateModalCreate: false,
  StateModalUpdate: false,
  updateId: null,
  DeleteRes: null,
  isLoading: false,
  error: null
};

function stateReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STATES_BY_USER: {
      return {
        ...state,
        state: null,
        error: null,
        states: payload,
        isLoading: false,
      };
    }
    case SEARCH_STATE: {
      return {
        ...state,
        states: null,
        error: null,
        state: payload,
        isLoading: false

      };
    }
    case  STATE_MODAL_CREATE: {
      return {
        ...state,
        StateModalCreate: !state.StateModalCreate
      };
    }
    case  STATE_MODAL_UPDATE: {
      return {
        ...state,
        StateModalUpdate: !state.StateModalUpdate,
        updateId: payload
      };
    }

    case   CLOSE_MODAL_DELETE_STATE: {
      return {
        ...state,
        StateModalDelete: false
      };
    }
    case LOADING_STATE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case STATE_ERROR: {
      return {
        ...state,
        states: null,
        state: null,
        error: payload,
        isLoading: false
      };
    }
    case REMOVE_STATE_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default stateReducer;
