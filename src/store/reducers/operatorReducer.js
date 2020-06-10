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
  REGISTER_OPERATOR, OPERATOR_MODAL_UPDATE, CREATE_OPERATOR
} from "../actionTypes";

const initialState = {
  operators: null,
  operator: null,
  OperatorModalCreate: false,
  OperatorModalUpdate: false,
  OperatorModalDelete: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null,
  operatorId: null,
  operatorUpdateId: null,
  operatorCreated: null
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
    case  OPERATOR_MODAL_DELETE: {
      return {
        ...state,
        OperatorModalDelete: !state.OperatorModalDelete,
        DeleteID: payload
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
        OperatorModalDelete: false
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
