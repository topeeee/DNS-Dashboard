import {
  BOOKING_BY_USER,
  BOOKING_MODAL_CREATE,
  BOOKING_MODAL_DELETE,
  DELETE_BOOKING,
  CLOSE_MODAL_DELETE_BOOKING,
  LOADING_BOOKING,
  BOOKING_ERROR,
  SEARCH_BOOKING,
  REMOVE_BOOKING_ERROR
} from "../actionTypes";

const initialState = {
  bookings: null,
  booking: null,
  BookingModalCreate: false,
  BookingModalDelete: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null
};

function bookingReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case BOOKING_BY_USER: {
      return {
        ...state,
        booking: null,
        error: null,
        bookings: payload,
        isLoading: false,
      };
    }
    case SEARCH_BOOKING: {
      return {
        ...state,
        bookings: null,
        error: null,
        booking: payload,
        isLoading: false

      };
    }
    case  BOOKING_MODAL_CREATE: {
      return {
        ...state,
        BookingModalCreate: !state.BookingModalCreate
      };
    }
    case  BOOKING_MODAL_DELETE: {
      return {
        ...state,
        BookingModalDelete: !state.BookingModalDelete,
        DeleteID: payload
      };
    }
    case   DELETE_BOOKING: {
      return {
        ...state,
        DeleteRes: payload
      };
    }
    case   CLOSE_MODAL_DELETE_BOOKING: {
      return {
        ...state,
        BookingModalDelete: false
      };
    }
    case LOADING_BOOKING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case BOOKING_ERROR: {
      return {
        ...state,
        bookings: null,
        booking: null,
        error: payload,
        isLoading: false
      };
    }
    case REMOVE_BOOKING_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    default:
      return state
  }
}

export default bookingReducer;
