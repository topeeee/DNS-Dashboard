import {
  TRIP_BY_USER,
  TRIP_MODAL_CREATE,
  TRIP_MODAL_DELETE,
  DELETE_TRIP,
  CLOSE_MODAL_DELETE_TRIP,
  LOADING_TRIP,
  TRIP_ERROR,
  SEARCH_TRIP
} from "../actionTypes";

const initialState = {
  trips: null,
  trip: null,
  TripModalCreate: false,
  TripModalDelete: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null
};

function tripReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TRIP_BY_USER: {
      return {
        ...state,
        trip: null,
        trips: payload,
        isLoading: false,
      };
    }
    case SEARCH_TRIP: {
      return {
        ...state,
        trips: null,
        trip: payload,
        isLoading: false

      };
    }
    case  TRIP_MODAL_CREATE: {
      return {
        ...state,
        TripModalCreate: !state.TripModalCreate
      };
    }
    case  TRIP_MODAL_DELETE: {
      return {
        ...state,
        TripModalDelete: !state.TripModalDelete,
        DeleteID: payload
      };
    }
    case   DELETE_TRIP: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    case   CLOSE_MODAL_DELETE_TRIP: {
      return {
        ...state,
        TripModalDelete: false
      };
    }
    case LOADING_TRIP: {
      return {
        ...state,
        isLoading: true
      };
    }
    case TRIP_ERROR: {
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    }
    default:
      return state
  }
}

export default tripReducer;
