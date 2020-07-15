import {
  TRIP_BY_USER,
  TRIP_MODAL_CREATE,
  TRIP_MODAL_DELETE,
  DELETE_TRIP,
  CLOSE_MODAL_DELETE_TRIP,
  LOADING_TRIP,
  CREATE_TRIP,
  TRIP_ERROR,
  SEARCH_TRIP,
  REMOVE_TRIP_ERROR
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";
import {isAdmin, isOperator, isPartner, OperatorId, PartnerId} from "../../environments/constants";


export const getTrips = () => async dispatch => {
  let tripApi;
  if(isAdmin) {
    tripApi = `${api.trip}/api/trips/`
  } else if(isOperator) {
    tripApi = `${api.trip}/api/operator/?operatorId=${OperatorId}`
  } else if(isPartner) {
    tripApi = `${api.trip}/api/partner/?partnerId=${PartnerId}`

  }
  try {
    dispatch(isLoading());
    const res = await axios.get(tripApi);
    dispatch({
      type: TRIP_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TRIP_ERROR,
      payload: "No trips available"
    });

  }
};

export const createTrip = (mode, tripid, name, phone, startbusstop, endbusstop, scheduledpickuptime, drivername, driverphone, vehicledetail, distance, cost) => async dispatch => {
  const body = {mode, tripid, name, phone, startbusstop, endbusstop, scheduledpickuptime, drivername, driverphone, vehicledetail, distance, cost};
  try {
    const res = await axios.post(`${api.trip}/api/me/trips/`, body);
    dispatch({
      type: CREATE_TRIP,
      payload: res.data
    });
    dispatch(getTrips());
    dispatch(toggleTripModalCreate());
  } catch (err) {
    dispatch({
      type: TRIP_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleTripModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_TRIP_ERROR
    }), 5000)

  }
};
export const deleteTrip = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.trip}/admin/trips/${id}/`);
    dispatch({
      type: DELETE_TRIP,
      payload: res.data
    });
    dispatch(getTrips());
    dispatch(closeTripModalDelete());
  } catch (err) {
    dispatch({
      type: TRIP_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeTripModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_TRIP_ERROR
    }), 5000)

  }
};

export const searchTrip = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.trip}/api/trips/${id}/`);
    dispatch({
      type: SEARCH_TRIP,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: TRIP_ERROR,
      payload: "Trip Not Available"
    });
  }
};


export function toggleTripModalCreate() {
  return {
    type: TRIP_MODAL_CREATE
  };
}

export function toggleTripModalDelete(id) {
  return {
    type: TRIP_MODAL_DELETE,
    payload: id
  };
}

export function closeTripModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_TRIP,
  };
}

export function isLoading() {
  return {
    type: LOADING_TRIP,
  };
}
