import {
  DRIVER_BY_USER,
  DRIVER_MODAL_CREATE,
  DRIVER_MODAL_DELETE,
  DELETE_DRIVER,
  CLOSE_MODAL_DELETE_DRIVER,
  LOADING_DRIVER,
  DRIVER_ERROR,
  SEARCH_DRIVER,
  CREATE_DRIVER,
  REMOVE_DRIVER_ERROR,
  APPROVE_DRIVER
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";


export const getDrivers = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driver}/api/drivers/`);
    dispatch({
      type: DRIVER_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};

export const createDriver = (residentialaddress, email, status,ratings,reviews, bankname, accountname, accountnumber, earnings, zone, area, route, geofencedarea, operatorname) => async dispatch => {
  const body = {residentialaddress, email, status,ratings,reviews, bankname, accountname, accountnumber, earnings, zone, area, route, geofencedarea, operatorname};
  try {
    const res = await axios.post(`${api.driver}/api/me/drivers/`, body);
    dispatch({
      type: CREATE_DRIVER,
      payload: res.data
    });
    dispatch(getDrivers());
    dispatch(toggleDriverModalCreate());
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleDriverModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ERROR
    }), 5000)

  }
};
export const deleteDriver = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.driver}/admin/drivers/${id}/`);
    dispatch({
      type: DELETE_DRIVER,
      payload: res.data
    });
    dispatch(getDrivers());
    dispatch(closeDriverModalDelete());
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeDriverModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ERROR
    }), 5000)
  }
};

export const searchDriver = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driver}/api/drivers/${id}/`);
    dispatch({
      type: SEARCH_DRIVER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Driver not Available"
    });
  }
};

export const approveDriver = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.put(`${api.driver}/api/approve/${id}/`);
    dispatch({
      type: APPROVE_DRIVER,
      payload: res.data
    });
    dispatch(getDrivers());
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
  }
};


export function toggleDriverModalCreate() {
  return {
    type: DRIVER_MODAL_CREATE
  };
}

export function toggleDriverModalDelete(id) {
  return {
    type: DRIVER_MODAL_DELETE,
    payload: id
  };
}

export function closeDriverModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_DRIVER,
  };
}

export function isLoading() {
  return {
    type: LOADING_DRIVER,
  };
}
