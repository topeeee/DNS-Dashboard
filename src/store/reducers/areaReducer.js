import {
  AREA_BY_USER,
  AREA_MODAL_CREATE,
  AREA_MODAL_DELETE,
  DELETE_AREA,
  CLOSE_MODAL_DELETE_AREA,
  LOADING_AREA,
  AREA_ERROR,
  SEARCH_AREA,
  REMOVE_AREA_ERROR
} from "../actionTypes";

const initialState = {
  areas: null,
  area: null,
  AreaModalCreate: false,
  AreaModalDelete: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null
};

function areaReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AREA_BY_USER: {
      return {
        ...state,
        area: null,
        error: null,
        areas: payload,
        isLoading: false,
      };
    }
    case SEARCH_AREA: {
      return {
        ...state,
        areas: null,
        error: null,
        area: payload,
        isLoading: false

      };
    }
    case  AREA_MODAL_CREATE: {
      return {
        ...state,
        AreaModalCreate: !state.AreaModalCreate
      };
    }
    case  AREA_MODAL_DELETE: {
      return {
        ...state,
        AreaModalDelete: !state.AreaModalDelete,
        DeleteID: payload
      };
    }
    case   DELETE_AREA: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    case   CLOSE_MODAL_DELETE_AREA: {
      return {
        ...state,
        AreaModalDelete: false
      };
    }
    case LOADING_AREA: {
      return {
        ...state,
        isLoading: true
      };
    }
    case AREA_ERROR: {
      return {
        ...state,
        areas: null,
        area: null,
        error: payload,
        isLoading: false
      };
    }
    case REMOVE_AREA_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default areaReducer;
