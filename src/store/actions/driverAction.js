import {DRIVER_MODAL_CREATE, DRIVER_MODAL_DELETE, DRIVER_MODAL_UPDATE, DRIVER_MODAL_STATUS} from "../actionTypes"

export function toggleDriverModalCreate() {
  return {
    type: DRIVER_MODAL_CREATE
  };
}

export function toggleDriverModalDelete() {
  return {
    type: DRIVER_MODAL_DELETE
  };
}

export function toggleDriverModalUpdate() {
  return {
    type: DRIVER_MODAL_UPDATE
  };
}

export function toggleDriverModalStatus() {
  return {
    type: DRIVER_MODAL_STATUS
  };
}
