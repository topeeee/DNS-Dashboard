import {
  AREA_BY_USER,
  CREATE_AREA,
  AREA_MODAL_CREATE,
  AREA_MODAL_DELETE,
  DELETE_AREA,
  AREA_ERROR,
  REMOVE_AREA_ERROR,
  LOADING_AREA,
  SEARCH_AREA,
  CLOSE_MODAL_DELETE_AREA
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";




export const getAreas = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.area}/api/xareas/`);
    dispatch({
      type: AREA_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AREA_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};

export const createArea = (xareacode, xarea, zonecode) => async dispatch => {
  const body = {xareacode, xarea, zonecode};
  try {
    const res = await axios.post(`${api.area}/api/me/xareas/`, body);
    dispatch({
      type: CREATE_AREA,
      payload: res.data
    });
    dispatch(getAreas());
    dispatch(toggleAreaModalCreate());
  } catch (err) {
    dispatch({
      type: AREA_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleAreaModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_AREA_ERROR
    }), 5000)

  }
};
export const deleteArea = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.area}/admin/xareas/${id}/`);
    dispatch({
      type: DELETE_AREA,
      payload: res.data
    });
    dispatch(getAreas());
    dispatch( closeAreaModalDelete());
  } catch (err) {
    dispatch({
      type: AREA_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch( closeAreaModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_AREA_ERROR
    }), 5000)

  }
};

export const searchArea = (id) => async dispatch => {

  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.area}/api/xareas/${id}/`);
    dispatch({
      type: SEARCH_AREA,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AREA_ERROR,
      payload: "Area Not Available!!"
    });
  }
};


export function toggleAreaModalCreate() {
  return {
    type: AREA_MODAL_CREATE
  };
}

export function toggleAreaModalDelete(id) {
  return {
    type: AREA_MODAL_DELETE,
    payload: id
  };
}

export function closeAreaModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_AREA,
  };
}

export function isLoading() {
  return {
    type: LOADING_AREA,
  };
}


