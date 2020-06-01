import { USER_BY_USER,
  USER_MODAL_CREATE,
  USER_MODAL_DELETE,
  DELETE_USER,
  CLOSE_MODAL_DELETE_USER,
  LOADING_USER,
  USER_ERROR,
  SEARCH_USER,
  CREATE_USER} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const getUsers = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(api.user);
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
    const res = await axios.post(api.user, body);
    dispatch({
      type: CREATE_USER,
      payload: res.data
    });
    dispatch(getUsers());
    dispatch(toggleUserModalCreate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};
export const deleteUser = (id) => async dispatch => {

  try {
    const res = await axios.delete(`http://165.22.116.11:7200/admin/userdetails/${id}/`);
    dispatch({
      type: DELETE_USER,
      payload: res.data
    });
    dispatch(getUsers());
    dispatch(closeUserModalDelete());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};

export const searchUser = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`http://165.22.116.11:7200/api/me/userdetails/${id}/`);
    dispatch({
      type: SEARCH_USER,
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
