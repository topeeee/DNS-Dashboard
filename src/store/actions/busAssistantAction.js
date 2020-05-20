import {BUS_ASSISTANT_MODAL_CREATE, BUS_ASSISTANT_MODAL_DELETE, BUS_ASSISTANT_MODAL_STATUS, BUS_ASSISTANT_MODAL_UPDATE} from "../actionTypes"

export function toggleBusAssistantModalCreate() {
  return {
    type: BUS_ASSISTANT_MODAL_CREATE
  };
}

export function toggleBusAssistantModalDelete() {
  return {
    type: BUS_ASSISTANT_MODAL_DELETE
  };
}

export function toggleBusAssistantModalUpdate() {
  return {
    type: BUS_ASSISTANT_MODAL_UPDATE
  };
}

export function toggleBusAssistantModalStatus() {
  return {
    type: BUS_ASSISTANT_MODAL_STATUS
  };
}
