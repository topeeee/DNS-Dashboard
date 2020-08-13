import {
  LOADING_SERVICE, REMOVE_SERVICE_ERROR,
  SEARCH_SERVICE,
  SERVICE, SERVICE_ERROR, SERVICE_MODAL_CREATE, SERVICE_MODAL_UPDATE,

} from "../actionTypes";

const initialState = {
  services: null,
  service: null,
  ServiceModalCreate: false,
  ServiceModalUpdate: false,
  updateId: null,
  DeleteRes: null,
  isLoading: false,
  error: null
};

function serviceReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SERVICE: {
      return {
        ...state,
        service: null,
        error: null,
        services: payload,
        isLoading: false,
      };
    }
    case SEARCH_SERVICE: {
      return {
        ...state,
        services: null,
        error: null,
        service: payload,
        isLoading: false

      };
    }
    case  SERVICE_MODAL_CREATE: {
      return {
        ...state,
        ServiceModalCreate: !state.ServiceModalCreate
      };
    }
    case  SERVICE_MODAL_UPDATE: {
      return {
        ...state,
        ServiceModalUpdate: !state.ServiceModalUpdate,
        updateId: payload
      };
    }


    case LOADING_SERVICE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SERVICE_ERROR: {
      return {
        ...state,
        services: null,
        service: null,
        error: payload,
        isLoading: false
      };
    }
    case REMOVE_SERVICE_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default serviceReducer;
