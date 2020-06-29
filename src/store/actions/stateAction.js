import {
  STATES_BY_USER,
  CREATE_STATE,
  STATE_MODAL_CREATE,
  STATE_MODAL_UPDATE,
  UPDATE_STATE,
  STATE_ERROR,
  REMOVE_STATE_ERROR,
  LOADING_STATE,
  SEARCH_STATE,
  CLOSE_MODAL_DELETE_STATE
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";




export const getStates = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.state}/api/xstates/`);
    dispatch({
      type: STATES_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: STATE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};

export const createState = (xstatecode, xstate, countrycode) => async dispatch => {
  const body = {xstatecode, xstate, countrycode};
  try {
    const res = await axios.post(`${api.state}/api/me/xstates/`, body);
    dispatch({
      type: CREATE_STATE,
      payload: res.data
    });
    dispatch(getStates());
    dispatch(toggleStateModalCreate());
  } catch (err) {
    dispatch({
      type: STATE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleStateModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_STATE_ERROR
    }), 5000)

  }
};

export const updateState = (id, xstatecode, xstate, countrycode) => async dispatch => {
  const body = {xstatecode, xstate, countrycode};
  try {
    const res = await axios.post(`${api.state}/api/me/xstates/`, body);
    dispatch({
      type: UPDATE_STATE,
      payload: res.data
    });
    dispatch(getStates());
    dispatch(toggleStateModalUpdate());
  } catch (err) {
    dispatch({
      type: STATE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleStateModalUpdate());
    setTimeout(() => dispatch({
      type: REMOVE_STATE_ERROR
    }), 5000)

  }
};


export const searchState = (id) => async dispatch => {

  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.state}/api/xstates/${id}/`);
    dispatch({
      type: SEARCH_STATE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: STATE_ERROR,
      payload: "State Not Available!!"
    });
  }
};


export function toggleStateModalCreate() {
  return {
    type: STATE_MODAL_CREATE
  };
}

export function toggleStateModalUpdate(id) {
  return {
    type: STATE_MODAL_UPDATE,
    payload: id
  };
}

export function closeStateModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_STATE,
  };
}

export function isLoading() {
  return {
    type: LOADING_STATE,
  };
}


