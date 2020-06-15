import {
  BUS_ASSISTANT_BY_USER,
  BUS_ASSISTANT_ERROR,
  BUS_ASSISTANT_MODAL_CREATE,
  BUS_ASSISTANT_MODAL_DELETE,
  BUS_ASSISTANT_MODAL_UPDATE, BUS_ASSISTANT_STATUS,
  BUS_ASSISTANT_VEHICLE_ID, BUS_ASSISTANT_VEHICLE_ID2, CLEAR_BUS_ASSISTANT_VEHICLE_ID,
  CLOSE_MODAL_DELETE_BUS_ASSISTANT,
  DELETE_BUS_ASSISTANT,
  LOADING_BUS_ASSISTANT, REMOVE_BUS_ASSISTANT_ERROR,
  SEARCH_BUS_ASSISTANT
} from "../actionTypes";


const initialState = {
  busAssistants: null,
  busAssistant: null,
  BusAssistantModalCreate: false,
  BusAssistantModalDelete: false,
  BusAssistantModalUpdate: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null,
  UpdateBusAssistantId: null,
  approveId: null,
  getBusAssistantVehicleId: null,
  getBusAssistantVehicleId2: null
};

function busAssistantReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case BUS_ASSISTANT_BY_USER: {
      return {
        ...state,
        busAssistant: null,
        error: null,
        busAssistants: payload,
        isLoading: false,
      };
    }
    case SEARCH_BUS_ASSISTANT: {
      return {
        ...state,
        busAssistants: null,
        error: null,
        busAssistant: payload,
        isLoading: false

      };
    }
    case  BUS_ASSISTANT_MODAL_CREATE: {
      return {
        ...state,
        BusAssistantModalCreate: !state.BusAssistantModalCreate
      };
    }

    case  BUS_ASSISTANT_MODAL_UPDATE: {
      return {
        ...state,
        BusAssistantModalUpdate: !state.BusAssistantModalUpdate,
        UpdateBusAssistantId: payload
      };
    }
    case  BUS_ASSISTANT_MODAL_DELETE: {
      return {
        ...state,
        BusAssistantModalDelete: !state.BusAssistantModalDelete,
        DeleteID: payload
      };
    }
    case   DELETE_BUS_ASSISTANT: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    case   CLOSE_MODAL_DELETE_BUS_ASSISTANT: {
      return {
        ...state,
        BusAssistantModalDelete: false
      };
    }
    case LOADING_BUS_ASSISTANT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case BUS_ASSISTANT_ERROR: {
      return {
        ...state,
        busAssistants: null,
        busAssistant: null,
        error: payload,
        isLoading: false
      };
    }


    case BUS_ASSISTANT_VEHICLE_ID: {
      return {
        ...state,
        getBusAssistantVehicleId: payload,

      };
    }

    case CLEAR_BUS_ASSISTANT_VEHICLE_ID: {
      return {
        ...state,
        getBusAssistantVehicleId2: null,
        getBusAssistantVehicleId: null

      };
    }

    case BUS_ASSISTANT_VEHICLE_ID2: {
      return {
        ...state,
        getBusAssistantVehicleId2: payload,

      };
    }
    case BUS_ASSISTANT_STATUS: {
      return {
        ...state,
        approveId: payload,

      };
    }
    case REMOVE_BUS_ASSISTANT_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default busAssistantReducer;
