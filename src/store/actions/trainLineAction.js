import {
  TRAINLINE,
  CREATE_TRAINLINE,
  TRAINLINE_MODAL_CREATE,
  TRAINLINE_MODAL_UPDATE,
  UPDATE_TRAINLINE,
  TRAINLINE_ERROR,
  REMOVE_TRAINLINE_ERROR,
  LOADING_TRAINLINE,
  SEARCH_TRAINLINE,
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";




export const getTrainLines = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.trainLine}/api/trainlines/`);
    dispatch({
      type: TRAINLINE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TRAINLINE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};

export const createTrainLine = (trainlinecode, trainline, service, servicecode) => async dispatch => {
  const body = {trainlinecode, trainline, service, servicecode};
  try {
    const res = await axios.post(`${api.trainLine}/api/me/trainlines/`, body);
    dispatch({
      type: CREATE_TRAINLINE,
      payload: res.data
    });
    dispatch(getTrainLines());
    dispatch(toggleTrainLineModalCreate());
  } catch (err) {
    dispatch({
      type: TRAINLINE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleTrainLineModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_TRAINLINE_ERROR
    }), 5000)

  }
};

export const updateTrainLine = (id, trainlinecode, trainline, service, servicecode) => async dispatch => {
  const body = {trainlinecode, trainline, service, servicecode};
  try {
    const res = await axios.put(`${api.trainLine}/api/trainlines/${id}/`, body);
    dispatch({
      type: UPDATE_TRAINLINE,
      payload: res.data
    });
    dispatch(getTrainLines());
    dispatch(toggleTrainLineModalUpdate());
  } catch (err) {
    dispatch({
      type: TRAINLINE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleTrainLineModalUpdate());
    setTimeout(() => dispatch({
      type: REMOVE_TRAINLINE_ERROR
    }), 5000)

  }
};


export const searchTrainLine = (id) => async dispatch => {

  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.trainLine}/api/trainlines/${id}/`);
    dispatch({
      type: SEARCH_TRAINLINE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TRAINLINE_ERROR,
      payload: "State Not Available!!"
    });
  }
};


export function toggleTrainLineModalCreate() {
  return {
    type: TRAINLINE_MODAL_CREATE
  };
}

export function toggleTrainLineModalUpdate(id) {
  return {
    type: TRAINLINE_MODAL_UPDATE,
    payload: id
  };
}


export function isLoading() {
  return {
    type: LOADING_TRAINLINE,
  };
}


