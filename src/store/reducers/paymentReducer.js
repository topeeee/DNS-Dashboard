import {REFUND_MODAL_CREATE, PROMO_MODAL_CREATE} from "../actionTypes";

const initialState = {
  RefundModalCreate: false,
  PromoModalCreate: false,

};

function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case REFUND_MODAL_CREATE: {
        return {
          ...state,
          RefundModalCreate: !state.RefundModalCreate,
        };
    }
    case PROMO_MODAL_CREATE: {
      return {
        ...state,
        PromoModalCreate: !state.PromoModalCreate,
      };
    }
    default:
      return state
  }
}

export default paymentReducer;
