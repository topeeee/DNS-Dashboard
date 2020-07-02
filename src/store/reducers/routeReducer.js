import {ROUTE_BY_USER, ROUTE_MODAL_CREATE, ROUTE_MODAL_UPDATE, CLOSE_MODAL_DELETE, LOADING} from "../actionTypes";

const initialState = {
  routes: null,
  RouteModalCreate: false,
  RouteModalUpdate: false,
  updateID: null,
  DeleteRes: null,
  isLoading: false
};

function routeReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ROUTE_BY_USER: {
      return {
        ...state,
       routes: payload,
        isLoading: false,
      };
    }
    case  ROUTE_MODAL_CREATE: {
      return {
        ...state,
        RouteModalCreate: !state.RouteModalCreate
      };
    }
    case  ROUTE_MODAL_UPDATE: {
      return {
        ...state,
        RouteModalUpdate: !state.RouteModalUpdate,
        updateID: payload
      };
    }

    case   CLOSE_MODAL_DELETE: {
      return {
        ...state,
        RouteModalDelete: false
      };
    }
    case LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    default:
      return state
  }
}

export default routeReducer;
