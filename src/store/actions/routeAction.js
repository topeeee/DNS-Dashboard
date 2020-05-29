import {ROUTE_BY_USER, ROUTE_MODAL_CREATE, ROUTE_MODAL_DELETE, DELETE_ROUTE, CREATE_ROUTE, CLOSE_MODAL_DELETE, LOADING} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";
import setAuthToken from "../../utils/setAuthToken";


export const RouteUser = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(api.route);
    dispatch({
      type: ROUTE_BY_USER,
      payload: res.data
    });
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};


export const createRoute = (routecode, route, areacode) => async dispatch => {
  const body = {routecode, route, areacode};
  try {
    const res = await axios.post(api.route, body);
    dispatch({
      type: CREATE_ROUTE,
      payload: res.data
    });
    dispatch(RouteUser());
    dispatch(toggleRouteModalCreate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};
export const deleteRoute = (id) => async dispatch => {

  try {
    const res = await axios.delete(`http://165.22.116.11:7009/admin/routes/${id}/`);
    dispatch({
      type: DELETE_ROUTE,
      payload: res.data
    });
    dispatch(RouteUser());
    dispatch(closeRouteModalDelete());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};
export function toggleRouteModalCreate() {
  return {
    type: ROUTE_MODAL_CREATE
  };
}

export function toggleRouteModalDelete(id) {
  return {
    type: ROUTE_MODAL_DELETE,
    payload: id
  };
}

export function closeRouteModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE,
  };
}

export function isLoading() {
  return {
    type: LOADING,
  };
}
