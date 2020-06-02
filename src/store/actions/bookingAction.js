import {
  BOOKING_BY_USER,
  BOOKING_MODAL_CREATE,
  BOOKING_MODAL_DELETE,
  DELETE_BOOKING,
  CLOSE_MODAL_DELETE_BOOKING,
  LOADING_BOOKING,
  BOOKING_ERROR,
  SEARCH_BOOKING,
  CREATE_BOOKING,
  REMOVE_BOOKING_ERROR
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const getBookings = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.booking}/api/bookings/`);
    dispatch({
      type: BOOKING_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BOOKING_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};


export const createBooking = (trip, amount, route, driver, beginbusstop, destinationbustop, pickedstatus, pickedtimestamp, dropstatus, droptimestamp) => async dispatch => {
  const body = {
    trip, amount, route, driver, beginbusstop, destinationbustop, pickedstatus, pickedtimestamp, dropstatus, droptimestamp
   };


  try {
    const res = await axios.post(`${api.booking}/api/me/bookings/`, body);
    dispatch({
      type: CREATE_BOOKING,
      payload: res.data
    });
    dispatch(getBookings());
    dispatch(toggleBookingModalCreate());
  } catch (err) {
    dispatch({
      type: BOOKING_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleBookingModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_BOOKING_ERROR
    }), 5000)

  }
};
export const deleteBooking = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.booking}/admin/bookings/${id}/`);
    dispatch({
      type: DELETE_BOOKING,
      payload: res.data
    });
    dispatch(getBookings());
    dispatch(closeBookingModalDelete());
  } catch (err) {
    dispatch({
      type: BOOKING_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeBookingModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_BOOKING_ERROR
    }), 5000)
  }
};

export const searchBooking = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.booking}/api/bookings/${id}/`);
    dispatch({
      type: SEARCH_BOOKING,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BOOKING_ERROR,
      payload: "User not Available"
    });
  }
};


export function toggleBookingModalCreate() {
  return {
    type: BOOKING_MODAL_CREATE
  };
}

export function toggleBookingModalDelete(id) {
  return {
    type: BOOKING_MODAL_DELETE,
    payload: id
  };
}

export function closeBookingModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_BOOKING,
  };
}

export function isLoading() {
  return {
    type: LOADING_BOOKING,
  };
}
