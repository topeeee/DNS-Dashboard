import {
  BUS_STOP_BY_USER,
  BUS_STOP_MODAL_CREATE,
  BUS_STOP_MODAL_UPDATE,
  CREATE_BUS_STOP,
  CLOSE_MODAL_DELETE_BUS_STOP,
  UPDATE_BUS_STOP,
  LOADING_BUS_STOP} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const BusStopUser = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.busStop}/api/stations/`);
    dispatch({
      type: BUS_STOP_BY_USER,
      payload: res.data
    });
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};




export const createBusStop = (stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service) => async dispatch => {
  const body = {stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service};
  try {
    const res = await axios.post(`${api.busStop}/api/me/stations/`, body);
    dispatch({
      type: CREATE_BUS_STOP,
      payload: res.data
    });
    dispatch(BusStopUser());
    dispatch(toggleBusStopModalCreate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};


export const updateBusStop = (id,stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service) => async dispatch => {
  const body = {stationcode,station,routecode, direction, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service};
  try {
    const res = await axios.put(`${api.busStop}/api/stations/${id}/`, body);
    dispatch({
      type: UPDATE_BUS_STOP,
      payload: res.data
    });
    dispatch(BusStopUser());
    dispatch(toggleBusStopModalUpdate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};


export const searchBusStop = (id) => async dispatch => {
  try {
    const res = await axios.get(`${api.busStop}${id}/`);
    console.log(res.data)
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


export function toggleBusStopModalCreate() {
  return {
    type: BUS_STOP_MODAL_CREATE
  };
}

export function toggleBusStopModalUpdate(id) {
  return {
    type: BUS_STOP_MODAL_UPDATE,
    payload: id
  };
}

export function closeBusStopModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_BUS_STOP,
  };
}

export function isLoading() {
  return {
    type: LOADING_BUS_STOP,
  };
}
