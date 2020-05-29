import {BUS_STOP_BY_USER, BUS_STOP_MODAL_CREATE, BUS_STOP_MODAL_DELETE, DELETE_BUS_STOP, CREATE_BUS_STOP, CLOSE_MODAL_DELETE_BUS_STOP, LOADING_BUS_STOP} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";
import setAuthToken from "../../utils/setAuthToken";


export const BusStopUser = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(api.busStop);
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




export const createBusStop = (busstopcode,busstop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude) => async dispatch => {
  const body = {busstopcode,busstop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude};
  try {
    const res = await axios.post(api.busStop, body);
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
export const deleteBusStop = (id) => async dispatch => {

  try {
    const res = await axios.delete(`http://165.22.116.11:7108/admin/busstops/${id}/`);
    dispatch({
      type: DELETE_BUS_STOP,
      payload: res.data
    });
    dispatch(BusStopUser());
    dispatch(closeBusStopModalDelete());
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

export function toggleBusStopModalDelete(id) {
  return {
    type: BUS_STOP_MODAL_DELETE,
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
