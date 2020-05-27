import {LOGIN_SUCCESS, AUTH_ERROR, REMOVE_AUTH_ERROR} from "../actionTypes";

const initialState = {
  isAuthenticated: true,
  loading: false,
  errors: null
};

function authenticationReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    }
    case  AUTH_ERROR: {
      return {
        ...state,
       errors: payload
      };
    }

    case  REMOVE_AUTH_ERROR: {
      return {
        ...state,
        errors: null
      };
    }
    default:
      return state
  }
}

export default authenticationReducer;
