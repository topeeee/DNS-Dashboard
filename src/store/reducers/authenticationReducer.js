import {LOGIN_SUCCESS, AUTH_ERROR, REMOVE_AUTH_ERROR, USER_AUTHORIZED} from "../actionTypes";

const initialState = {
  mmmm: null,
  isAuthenticated: null,
  loading: false,
  errors: null,

};

function authenticationReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...payload,
        mmmm: true,
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
    case  USER_AUTHORIZED: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    default:
      return state
  }
}

export default authenticationReducer;
