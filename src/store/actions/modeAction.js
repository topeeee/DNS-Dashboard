import {
  MODE_BY_USER,
  MODE_MODAL_CREATE,
  MODE_MODAL_DELETE,
  DELETE_MODE,
  CLOSE_MODAL_DELETE_MODE,
  LOADING_MODE,
  MODE_ERROR,
  SEARCH_MODE,
  CREATE_MODE,
  REMOVE_MODE_ERROR
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const getModes = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.mode}/api/modes/`);
    dispatch({
      type: MODE_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MODE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};


export const createMode = (modecode, mode, statecode) => async dispatch => {
  const body = {modecode, mode, statecode};


  try {
    const res = await axios.post(`${api.mode}/api/me/modes/`, body);
    dispatch({
      type: CREATE_MODE,
      payload: res.data
    });
    dispatch(getModes());
    dispatch(toggleModeModalCreate());
  } catch (err) {
    dispatch({
      type: MODE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleModeModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_MODE_ERROR
    }), 5000)

  }
};
export const deleteMode = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.mode}/admin/modes/${id}/`);
    dispatch({
      type: DELETE_MODE,
      payload: res.data
    });
    dispatch(getModes());
    dispatch(closeModeModalDelete());
  } catch (err) {
    dispatch({
      type: MODE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeModeModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_MODE_ERROR
    }), 5000)
  }
};

export const searchMode = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.mode}/api/modes/${id}/`);
    dispatch({
      type: SEARCH_MODE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MODE_ERROR,
      payload: "Mode not Available"
    });
  }
};


export function toggleModeModalCreate() {
  return {
    type: MODE_MODAL_CREATE
  };
}

export function toggleModeModalDelete(id) {
  return {
    type: MODE_MODAL_DELETE,
    payload: id
  };
}

export function closeModeModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_MODE,
  };
}

export function isLoading() {
  return {
    type: LOADING_MODE,
  };
}
