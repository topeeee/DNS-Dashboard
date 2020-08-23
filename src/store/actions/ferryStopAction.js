import {
  FERRY_STOP,
  FERRY_STOP_MODAL_CREATE,
  FERRY_STOP_MODAL_UPDATE,
  CREATE_FERRY_STOP,
  UPDATE_FERRY_STOP,
  LOADING_FERRY_STOP
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const getFerryStops = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.busStop}/api/stations/`);
    dispatch({
      type: FERRY_STOP,
      payload: res.data
    });
  } catch (err) {}
};




export const createFerryStop = (stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service) => async dispatch => {
  const body = {stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service};

  try {
    const res = await axios.post(`${api.busStop}/api/me/stations/`, body);
    dispatch({
      type: CREATE_FERRY_STOP,
      payload: res.data
    });
    dispatch(getFerryStops());
    dispatch(toggleFerryStopModalCreate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};


export const updateFerryStop = (id, stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service) => async dispatch => {
  const body = {stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service};
  try {
    const res = await axios.put(`${api.busStop}/api/stations/${id}/`, body);
    dispatch({
      type: UPDATE_FERRY_STOP,
      payload: res.data
    });
    dispatch(getFerryStops());
    dispatch(toggleFerryStopModalUpdate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};


export const searchFerryStop = (id) => async dispatch => {
  try {
    const res = await axios.get(`${api.ferryStop}${id}/`);
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


export function toggleFerryStopModalCreate() {
  return {
    type: FERRY_STOP_MODAL_CREATE
  };
}

export function toggleFerryStopModalUpdate(id) {
  return {
    type: FERRY_STOP_MODAL_UPDATE,
    payload: id
  };
}



export function isLoading() {
  return {
    type: LOADING_FERRY_STOP,
  };
}
