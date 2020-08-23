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
    const res = await axios.get(`${api.busStop}/api/stations/`);
    dispatch({
      type: TRAIN_STOP,
      payload: res.data
    });
  } catch (err) {}
};




export const createTrainStop = ( stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service) => async dispatch => {
  const body = {stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service};

  try {
    const res = await axios.post(`${api.busStop}/api/me/stations/`, body);
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


export const updateTrainStop = (id, stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service) => async dispatch => {
  const body = {stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service};
  try {
    const res = await axios.put(`${api.busStop}/api/stations/${id}/`, body);

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
