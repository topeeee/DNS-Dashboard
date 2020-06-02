import {
  USER_BY_USER,
  USER_MODAL_CREATE,
  USER_MODAL_DELETE,
  DELETE_USER,
  CLOSE_MODAL_DELETE_USER,
  LOADING_USER,
  USER_ERROR,
  SEARCH_USER,
  CREATE_USER,
  REMOVE_USER_ERROR
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const getUsers = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.user}/api/userdetails/`);
    dispatch({
      type: USER_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};

export const createUser = (first_name, last_name, email, date_of_birth, pax_code, home_location, home_pickup_time, status, payment_method) => async dispatch => {
  const body = {first_name, last_name, email, date_of_birth, pax_code, home_location, home_pickup_time, status, payment_method};
  try {
    const res = await axios.post(`${api.user}/api/me/userdetails/`, body);
    dispatch({
      type: CREATE_USER,
      payload: res.data
    });
    dispatch(getUsers());
    dispatch(toggleUserModalCreate());
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleUserModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_USER_ERROR
    }), 5000)

  }
};
export const deleteUser = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.user}/admin/userdetails/${id}/`);
    dispatch({
      type: DELETE_USER,
      payload: res.data
    });
    dispatch(getUsers());
    dispatch(closeUserModalDelete());
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeUserModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_USER_ERROR
    }), 5000)
  }
};

export const searchUser = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.user}/api/userdetails/${id}/`);
    dispatch({
      type: SEARCH_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: "User not Available"
    });
  }
};


export function toggleUserModalCreate() {
  return {
    type: USER_MODAL_CREATE
  };
}

export function toggleUserModalDelete(id) {
  return {
    type: USER_MODAL_DELETE,
    payload: id
  };
}

export function closeUserModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_USER,
  };
}

export function isLoading() {
  return {
    type: LOADING_USER,
  };
}
