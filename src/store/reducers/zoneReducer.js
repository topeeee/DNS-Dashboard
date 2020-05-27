import {ZONE_BY_USER, ZONE_MODAL_CREATE, ZONE_MODAL_DELETE, DELETE_ZONE} from "../actionTypes";

const initialState = {
 zones: null,
  ZoneModalCreate: false,
  ZoneModalDelete: false,
  DeleteID: null,
  DeleteRes: null
};

function zoneReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ZONE_BY_USER: {
      return {
        ...state,
       zones: payload
      };
    }
    case  ZONE_MODAL_CREATE: {
      return {
        ...state,
        ZoneModalCreate: !state.ZoneModalCreate
      };
    }
    case  ZONE_MODAL_DELETE: {
      return {
        ...state,
        ZoneModalDelete: !state.ZoneModalDelete,
        DeleteID: payload
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
