import {BUS_ASSISTANT_MODAL_CREATE, BUS_ASSISTANT_MODAL_DELETE, BUS_ASSISTANT_MODAL_STATUS, BUS_ASSISTANT_MODAL_UPDATE} from "../actionTypes";

const initialState = {
  BusAssistantModalCreate: false,
  BusAssistantModalDelete: false,
  BusAssistantModalUpdate: false,
  BusAssistantModalStatus: false,
};

function busAssistantReducer(state = initialState, action) {
  switch (action.type) {
    case BUS_ASSISTANT_MODAL_CREATE: {
        return {
          ...state,
          BusAssistantModalCreate: !state.BusAssistantModalCreate,
        };
    }
    case BUS_ASSISTANT_MODAL_DELETE: {
      return {
        ...state,
        BusAssistantModalDelete: !state.BusAssistantModalDelete,
      };
    }
    case  BUS_ASSISTANT_MODAL_UPDATE: {
      return {
        ...state,
        BusAssistantModalUpdate: !state.BusAssistantModalUpdate,
      };
    }

    case  BUS_ASSISTANT_MODAL_STATUS: {
      return {
        ...state,
        BusAssistantModalStatus: !state.BusAssistantModalStatus,
      };
    }
    default:
      return state
  }
}

export default busAssistantReducer;
