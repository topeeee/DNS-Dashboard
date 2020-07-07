import {LOGIN_SUCCESS, AUTH_ERROR, REMOVE_AUTH_ERROR, USER_AUTHORIZED, ADMIN, OPERATOR} from "../actionTypes";

const initialState = {
  token: null,
  isAuthenticated: null,
  admin: null,
  operator: null,
  loading: false,
  errors: null,

};

function authenticationReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        loading: false
      };
    }
    case ADMIN: {
      return {
        ...state,
        ...payload,
        admin: true,
        loading: false
      };
    }

    case OPERATOR: {
      return {
        ...state,
        ...payload,
        operator: true,
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
