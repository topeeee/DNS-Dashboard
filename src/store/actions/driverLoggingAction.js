import {
  DRIVERLOGGING_BY_USER,
  DRIVERLOGGING_MODAL_CREATE,
  DRIVERLOGGING_MODAL_DELETE,
  DELETE_DRIVERLOGGING,
  CLOSE_MODAL_DELETE_DRIVERLOGGING,
  LOADING_DRIVERLOGGING,
  DRIVERLOGGING_ERROR,
  SEARCH_DRIVERLOGGING,
  CREATE_DRIVERLOGGING,
  REMOVE_DRIVERLOGGING_ERROR
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const getDriverLoggings = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driverLogging}/api/driverloggings/`);
    dispatch({
      type: DRIVERLOGGING_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVERLOGGING_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};


export const createDriverLogging = (longtitude, latitude, direction, rider_username, currentbusstop) => async dispatch => {
  const body = {longtitude, latitude, direction, rider_username, currentbusstop};


  try {
    const res = await axios.post(`${api.driverLogging}/api/me/driverloggings/`, body);
    dispatch({
      type: CREATE_DRIVERLOGGING,
      payload: res.data
    });
    dispatch(getDriverLoggings());
    dispatch(toggleDriverLoggingModalCreate());
  } catch (err) {
    dispatch({
      type: DRIVERLOGGING_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleDriverLoggingModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVERLOGGING_ERROR
    }), 5000)

  }
};
export const deleteDriverLogging = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.driverLogging}/admin/driverloggings/${id}/`);
    dispatch({
      type: DELETE_DRIVERLOGGING,
      payload: res.data
    });
    dispatch(getDriverLoggings());
    dispatch(closeDriverLoggingModalDelete());
  } catch (err) {
    dispatch({
      type: DRIVERLOGGING_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeDriverLoggingModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVERLOGGING_ERROR
    }), 5000)
  }
};

export const searchDriverLogging = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driverLogging}/api/driverloggings/${id}/`);
    dispatch({
      type: SEARCH_DRIVERLOGGING,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVERLOGGING_ERROR,
      payload: "DriverLogging not Available"
    });
  }
};


export function toggleDriverLoggingModalCreate() {
  return {
    type: DRIVERLOGGING_MODAL_CREATE
  };
}

export function toggleDriverLoggingModalDelete(id) {
  return {
    type: DRIVERLOGGING_MODAL_DELETE,
    payload: id
  };
}

export function closeDriverLoggingModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_DRIVERLOGGING,
  };
}

export function isLoading() {
  return {
    type: LOADING_DRIVERLOGGING,
  };
}
