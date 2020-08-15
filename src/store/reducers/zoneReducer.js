import {
  ZONE_BY_USER,
  ZONE_MODAL_CREATE,
  ZONE_MODAL_UPDATE,
  DELETE_ZONE,
  LOADING_ZONE
} from "../actionTypes";

const initialState = {
 zones: null,
  ZoneModalCreate: false,
  ZoneModalUpdate: false,
  updateID: null,
  DeleteRes: null,
  isLoading: false,
};

function zoneReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ZONE_BY_USER: {
      return {
        ...state,
       zones: payload,
        isLoading: false,
      };
    }
    case  ZONE_MODAL_CREATE: {
      return {
        ...state,
        ZoneModalCreate: !state.ZoneModalCreate
      };
    }
    case  ZONE_MODAL_UPDATE: {
      return {
        ...state,
        ZoneModalUpdate: !state.ZoneModalUpdate,
        updateID: payload
      };
    }
    case LOADING_ZONE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case   DELETE_ZONE: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    default:
      return state
  }
}

export default zoneReducer;
