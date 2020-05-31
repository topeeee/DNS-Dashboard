import { TRIP_BY_USER, TRIP_MODAL_CREATE, TRIP_MODAL_DELETE, DELETE_TRIP, CLOSE_MODAL_DELETE_TRIP, LOADING_TRIP, CREATE_TRIP, TRIP_ERROR, SEARCH_TRIP} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";
import setAuthToken from "../../utils/setAuthToken";


export const getTrips = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(api.trip);
    dispatch({
      type: TRIP_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TRIP_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};

export const createTrip = (mode, tripid, name, phone, startbusstop, endbusstop, scheduledpickuptime, drivername, driverphone, vehicledetail, distance, cost) => async dispatch => {
  const body = {mode, tripid, name, phone, startbusstop, endbusstop, scheduledpickuptime, drivername, driverphone, vehicledetail, distance, cost};
  try {
    const res = await axios.post(api.trip, body);
    dispatch({
      type: CREATE_TRIP,
      payload: res.data
    });
    dispatch(getTrips());
    dispatch(toggleTripModalCreate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};
export const deleteTrip = (id) => async dispatch => {

  try {
    const res = await axios.delete(`http://165.22.116.11:7500/admin/trips/${id}/`);
    dispatch({
      type: DELETE_TRIP,
      payload: res.data
    });
    dispatch(getTrips());
    dispatch(closeTripModalDelete());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};

export const searchTrip = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`http://165.22.116.11:7500/api/trips/${id}/`);
    dispatch({
      type: SEARCH_TRIP,
      payload: res.data
    });
    // dispatch(isLoading());
    // dispatch(BusStopUser());
    // dispatch(closeBusStopModalDelete());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

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
