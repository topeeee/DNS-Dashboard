import {STATES_BY_USER, STATE_MODAL_CREATE, STATE_MODAL_DELETE,  DELETE_STATE} from "../actionTypes";

const initialState = {
 states: null,
  StateModalCreate: false,
  StateModalDelete: false,
  DeleteID: null,
  DeleteRes: null
};

function stateReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STATES_BY_USER: {
      return {
        ...state,
       states: payload
      };
    }
    case  STATE_MODAL_CREATE: {
      return {
        ...state,
        StateModalCreate: !state.StateModalCreate
      };
    }
    case  STATE_MODAL_DELETE: {
      return {
        ...state,
        StateModalDelete: !state.StateModalDelete,
        DeleteID: payload
      };
    }
    case   DELETE_STATE: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    default:
      return state
  }
}

export default stateReducer;
