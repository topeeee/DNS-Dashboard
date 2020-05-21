import {REFUND_MODAL_CREATE, PROMO_MODAL_CREATE} from "../actionTypes"

export function toggleRefundModalCreate() {
  return {
    type: REFUND_MODAL_CREATE
  };
}

export function togglePromoModalCreate() {
  return {
    type: PROMO_MODAL_CREATE
  };
}

