import {
  DRIVER_ROUTE_BY_USER,
  DRIVER_ROUTE_MODAL_CREATE,
  DRIVER_ROUTE_MODAL_DELETE,
  DELETE_DRIVER_ROUTE,
  CLOSE_MODAL_DELETE_DRIVER_ROUTE,
  LOADING_DRIVER_ROUTE,
  DRIVER_ROUTE_ERROR,
  SEARCH_DRIVER_ROUTE,
  CREATE_DRIVER_ROUTE,
  REMOVE_DRIVER_ROUTE_ERROR
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const getDriverRoutes = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driverRoute}/api/driverroutes/`);
    dispatch({
      type: DRIVER_ROUTE_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ROUTE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};

export const createDriverRoute = (routecode, driverUsername, driverLicense) => async dispatch => {
  const body = {routecode, driverUsername, driverLicense};
  try {
    const res = await axios.post(`${api.driverRoute}/api/me/driverroutes/`, body);
    dispatch({
      type: CREATE_DRIVER_ROUTE,
      payload: res.data
    });
    dispatch(getDriverRoutes());
    dispatch(toggleDriverRouteModalCreate());
  } catch (err) {
    dispatch({
      type: DRIVER_ROUTE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleDriverRouteModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ROUTE_ERROR
    }), 5000)

  }
};
export const deleteDriverRoute = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.driverRoute}/admin/driverroutes/${id}/`);
    dispatch({
      type: DELETE_DRIVER_ROUTE,
      payload: res.data
    });
    dispatch(getDriverRoutes());
    dispatch(closeDriverRouteModalDelete());
  } catch (err) {
    dispatch({
      type: DRIVER_ROUTE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeDriverRouteModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ROUTE_ERROR
    }), 5000)
  }
};

export const searchDriverRoute = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driverRoute}/api/driverroutes/${id}/`);
    dispatch({
      type: SEARCH_DRIVER_ROUTE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ROUTE_ERROR,
      payload: "Driver Route not Available"
    });
  }
};


export function toggleDriverRouteModalCreate() {
  return {
    type: DRIVER_ROUTE_MODAL_CREATE
  };
}

export function toggleDriverRouteModalDelete(id) {
  return {
    type: DRIVER_ROUTE_MODAL_DELETE,
    payload: id
  };
}

export function closeDriverRouteModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_DRIVER_ROUTE,
  };
}

export function isLoading() {
  return {
    type: LOADING_DRIVER_ROUTE,
  };
}
