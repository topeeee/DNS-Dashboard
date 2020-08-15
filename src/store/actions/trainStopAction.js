import {
  TRAIN_STOP,
  TRAIN_STOP_MODAL_CREATE,
  TRAIN_STOP_MODAL_UPDATE,
  CREATE_TRAIN_STOP,
  UPDATE_TRAIN_STOP,
  LOADING_TRAIN_STOP
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const getTrainStops = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.trainStop}/api/trainstops/`);
    dispatch({
      type: TRAIN_STOP,
      payload: res.data
    });
  } catch (err) {}
};




export const createTrainStop = (trainstopcode,trainstop,trainlinecode, trainline,service, speed, accuracy, altitudeaccuracy, altitude, longitude,latitude) => async dispatch => {
  const body = {trainstopcode,trainstop,trainlinecode, trainline,service, speed, accuracy, altitudeaccuracy, altitude, longitude,latitude};
  try {
    const res = await axios.post(`${api.trainStop}/api/me/trainstops/`, body);
    dispatch({
      type: CREATE_TRAIN_STOP,
      payload: res.data
    });
    dispatch(getTrainStops());
    dispatch(toggleTrainStopModalCreate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};


export const updateTrainStop = (id, trainstopcode,trainstop,trainlinecode, trainline,service, speed, accuracy, altitudeaccuracy, altitude, longitude,latitude) => async dispatch => {
  const body = {trainstopcode,trainstop,trainlinecode, trainline,service, speed, accuracy, altitudeaccuracy, altitude, longitude,latitude};
  try {
    const res = await axios.put(`${api.trainStop}/api/trainstops/${id}/`, body);
    dispatch({
      type: UPDATE_TRAIN_STOP,
      payload: res.data
    });
    dispatch(getTrainStops());
    dispatch(toggleTrainStopModalUpdate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};


export const searchTrainStop = (id) => async dispatch => {
  try {
    const res = await axios.get(`${api.trainStop}${id}/`);
    // dispatch({
    //   type: SEARCH_BUS_STOP,
    //   payload: res.data
    // });
    // dispatch(BusStopUser());
    // dispatch(closeBusStopModalDelete());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};


export function toggleTrainStopModalCreate() {
  return {
    type: TRAIN_STOP_MODAL_CREATE
  };
}

export function toggleTrainStopModalUpdate(id) {
  return {
    type: TRAIN_STOP_MODAL_UPDATE,
    payload: id
  };
}



export function isLoading() {
  return {
    type: LOADING_TRAIN_STOP,
  };
}
