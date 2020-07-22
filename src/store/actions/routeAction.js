import {ROUTE_BY_USER, ROUTE_MODAL_CREATE, ROUTE_MODAL_UPDATE, UPDATE_ROUTE, CREATE_ROUTE, CLOSE_MODAL_DELETE, LOADING} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";
import setAuthToken from "../../utils/setAuthToken";


export const RouteUser = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.route}/api/routes/`);
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


export const createRoute = (routecode, route, areacode, price) => async dispatch => {
  const body = {routecode, route, areacode, price};
  try {
    const res = await axios.post(`${api.route}/api/me/routes/`, body);
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

export const updateRoute = (id, routecode, route, areacode, price) => async dispatch => {
  const body = {routecode, route, areacode, price};
  try {
    const res = await axios.put(`${api.route}/api/routes/${id}/`, body);
    dispatch({
      type: UPDATE_ROUTE,
      payload: res.data
    });
    dispatch(RouteUser());
    dispatch(toggleRouteModalUpdate());
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

export function toggleRouteModalUpdate(id) {
  return {
    type: ROUTE_MODAL_UPDATE,
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
