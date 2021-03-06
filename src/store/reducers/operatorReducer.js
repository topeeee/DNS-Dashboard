import {
  OPERATOR_BY_USER,
  OPERATOR_MODAL_CREATE,
  OPERATOR_MODAL_DELETE,
  DELETE_OPERATOR,
  CLOSE_MODAL_DELETE_OPERATOR,
  LOADING_OPERATOR,
  OPERATOR_ERROR,
  SEARCH_OPERATOR,
  REMOVE_OPERATOR_ERROR,
  REGISTER_OPERATOR,
  OPERATOR_MODAL_UPDATE,
  CREATE_OPERATOR,
  OPERATOR_MODAL_SUSPEND,
  OPERATOR_MODAL_REACTIVATE, OPERATOR_MODE, OPERATOR_SERVICE, OPERATOR_STATION, OPERATOR_MODAL_APPROVE
} from "../actionTypes";

const initialState = {
  operators: null,
  operator: null,
  operatorServices: null,
  operatorModes: null,
  operatorStations: null,
  OperatorModalCreate: false,
  OperatorModalSuspend: false,
  OperatorModalReactivate: false,
  OperatorModalUpdate: false,
  OperatorModalApprove: false,
  OperatorModalDelete: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null,
  operatorId: null,
  operatorUpdateId: null,
  operatorSuspendId: "",
  operatorReactivateId: "",
  operatorCreated: null,
  operatorApproveId: null,
};

function operatorReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case OPERATOR_BY_USER: {
      return {
        ...state,
        operator: null,
        error: null,
        operators: payload,
        isLoading: false,
        OperatorModalCreate: false,
        OperatorModalApprove: false,

      };
    }

    case OPERATOR_MODE: {
      return {
        ...state,
        operatorModes: payload,

      };
    }
    case OPERATOR_SERVICE: {
      return {
        ...state,
        operatorServices: payload,

      };
    }
    case OPERATOR_STATION: {
      return {
        ...state,
        operatorStations: payload,

      };
    }


    case REGISTER_OPERATOR: {
      return {
        ...state,
        operatorId: payload,

      };


    }
    case  CREATE_OPERATOR: {
      return {
        ...state,
        operatorCreated: payload,

      };
    }
    case SEARCH_OPERATOR: {
      return {
        ...state,
        operators: null,
        error: null,
        operator: payload,
        isLoading: false

      };
    }
    case  OPERATOR_MODAL_CREATE: {
      return {
        ...state,
        OperatorModalCreate: !state.OperatorModalCreate
      };
    }
    case  OPERATOR_MODAL_UPDATE: {
      return {
        ...state,
        OperatorModalUpdate: !state.OperatorModalUpdate,
        operatorUpdateId: payload
      };
    }
    case  OPERATOR_MODAL_SUSPEND: {
      return {
        ...state,
        OperatorModalSuspend: !state.OperatorModalSuspend,
        operatorSuspendId: payload
      };
    }

    case  OPERATOR_MODAL_REACTIVATE: {
      return {
        ...state,
        OperatorModalReactivate: !state.OperatorModalReactivate,
        operatorReactivateId: payload
      };
    }


    case  OPERATOR_MODAL_APPROVE: {
      return {
        ...state,
        OperatorModalApprove: !state.OperatorModalApprove,
        operatorApproveId: payload
      };
    }
    case   DELETE_OPERATOR: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    case   CLOSE_MODAL_DELETE_OPERATOR: {
      return {
        ...state,
        OperatorModalSuspend: false,
        OperatorModalReactivate: false,
        operatorSuspendId: "",
        operatorReactivateId: "",
      };
    }
    case LOADING_OPERATOR: {
      return {
        ...state,
        isLoading: true
      };
    }
    case OPERATOR_ERROR: {
      return {
        ...state,
        areas: null,
        area: null,
        error: payload,
        isLoading: false
      };
    }
    case REMOVE_OPERATOR_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default operatorReducer;
