import {
  PARTNER_BY_USER,
  PARTNER_MODAL_CREATE,
  LOADING_PARTNER,
  PARTNER_ERROR,
  REMOVE_PARTNER_ERROR,
  REGISTER_PARTNER,
  PARTNER_MODAL_UPDATE
} from "../actionTypes";

const initialState = {
  partners: null,
  PartnerModalCreate: false,
  PartnerModalUpdate: false,
  partnerUpdateId: null,
  isLoading: false,
  error: null,
};

function partnerReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PARTNER_BY_USER: {
      return {
        ...state,
        error: null,
        partners: payload,
        isLoading: false,
      };
    }
    case REGISTER_PARTNER: {
      return {
        ...state,
        partnerId: payload,

      };


    }


    case  PARTNER_MODAL_CREATE: {
      return {
        ...state,
        PartnerModalCreate: !state.PartnerModalCreate
      };
    }
    case  PARTNER_MODAL_UPDATE: {
      return {
        ...state,
        PartnerModalUpdate: !state.PartnerModalUpdate,
        partnerUpdateId: payload
      };
    }


    case LOADING_PARTNER: {
      return {
        ...state,
        isLoading: true
      };
    }
    case PARTNER_ERROR: {
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    }
    case REMOVE_PARTNER_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default partnerReducer;
