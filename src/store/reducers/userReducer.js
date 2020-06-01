import {
  USER_BY_USER,
  USER_MODAL_CREATE,
  USER_MODAL_DELETE,
  DELETE_USER,
  CLOSE_MODAL_DELETE_USER,
  LOADING_USER,
  USER_ERROR,
  SEARCH_USER
} from "../actionTypes";

const initialState = {
  users: null,
  user: null,
  UserModalCreate: false,
  UserModalDelete: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_BY_USER: {
      return {
        ...state,
        user: null,
        users: payload,
        isLoading: false,
      };
    }
    case SEARCH_USER: {
      return {
        ...state,
        users: null,
        user: payload,
        isLoading: false

      };
    }
    case  USER_MODAL_CREATE: {
      return {
        ...state,
        UserModalCreate: !state.UserModalCreate
      };
    }
    case  USER_MODAL_DELETE: {
      return {
        ...state,
        UserModalDelete: !state.UserModalDelete,
        DeleteID: payload
      };
    }
    case   DELETE_USER: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    case   CLOSE_MODAL_DELETE_USER: {
      return {
        ...state,
        UserModalDelete: false
      };
    }
    case LOADING_USER: {
      return {
        ...state,
        isLoading: true
      };
    }
    case USER_ERROR: {
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    }
    default:
      return state
  }
}

export default userReducer;
