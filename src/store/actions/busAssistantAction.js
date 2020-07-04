import {
  BUS_ASSISTANT_BY_USER,
  BUS_ASSISTANT_MODAL_CREATE,
  BUS_ASSISTANT_MODAL_DELETE,
  DELETE_BUS_ASSISTANT,
  CLOSE_MODAL_DELETE_BUS_ASSISTANT,
  LOADING_BUS_ASSISTANT,
  BUS_ASSISTANT_ERROR,
  SEARCH_BUS_ASSISTANT,
  CREATE_BUS_ASSISTANT,
  REMOVE_BUS_ASSISTANT_ERROR,
  APPROVE_BUS_ASSISTANT,
  BUS_ASSISTANT_STATUS,
  BUS_ASSISTANT_MODAL_UPDATE,
  UPDATE_BUS_ASSISTANT,
  BUS_ASSISTANT_VEHICLE_ID,
  BUS_ASSISTANT_VEHICLE_ID2,
  CLEAR_BUS_ASSISTANT_VEHICLE_ID
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";
import {admin} from "../../environments/constants";

const isAdmin = sessionStorage.getItem('isAdmin');


export const getBusAssistants = () => async dispatch => {
  let BusApi;
  if(isAdmin === admin) {
    BusApi = `${api.busAssistant}/api/busassistants/`
  }else {
    BusApi = `${api.busAssistant}/api/me/busassistants/`
  }
  try {
    dispatch(isLoading());
    const res = await axios.get(BusApi);
    dispatch({
      type: BUS_ASSISTANT_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BUS_ASSISTANT_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};
export const changeBusAssistants = (id, status) => async dispatch => {
  try {
    await axios.put(`${api.busAssistant}/api/status/${id}/`, {status});
    dispatch({
      payload: id,
      type: BUS_ASSISTANT_STATUS,
    });
    dispatch(getBusAssistants());
  } catch (err) {
    // dispatch({
    //   type: OPERATOR_ERROR,
    //   payload: "Opps! Something Went Wrong Try Again"
    // });
    // setTimeout(() => dispatch({
    //   type: REMOVE_OPERATOR_ERROR
    // }), 5000)
  }
};


export const createBusAssistants = (vehicleId, operatorInput, firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zone, area, route, geoFencedArea
) => async dispatch => {
  const body = { firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zone, area, route, geoFencedArea
  };
  try {
    const res = await axios.post(`${api.busAssistant}/api/me/busassistants/`, body);
    dispatch({
      type: CREATE_BUS_ASSISTANT,
      payload: res.data
    });
    if(res.data) {
      await axios.post("http://165.22.116.11:7056/api/me/busassitantvehicles/", {vehicleId: vehicleId, busassitantId: res.data.id, operatorId: operatorInput})
    }
    dispatch(getBusAssistants());
    dispatch(toggleBusAssistantsModalCreate());
  } catch (err) {
    dispatch({
      type: BUS_ASSISTANT_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleBusAssistantsModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_BUS_ASSISTANT_ERROR
    }), 5000)

  }
};

export const updateBusAssistants = (id,  firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zone, area, route, geoFencedArea) => async dispatch => {
  const body = { firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zone, area, route, geoFencedArea};
  try {
    const res = await axios.put(`${api.busAssistant}/api/busassistants/${id}/`, body);
    dispatch({
      type: UPDATE_BUS_ASSISTANT,
      payload: res.data
    });
    dispatch(getBusAssistants());
    dispatch(toggleBusAssistantsModalUpdate());
  } catch (err) {
    dispatch({
      type: BUS_ASSISTANT_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleBusAssistantsModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_BUS_ASSISTANT_ERROR
    }), 5000)

  }
};
export const deleteBusAssistants = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.busAssistant}/admin/busassistants/${id}/`);
    dispatch({
      type: DELETE_BUS_ASSISTANT,
      payload: res.data
    });
    dispatch(getBusAssistants());
    dispatch(closeBusAssistantsModalDelete());
  } catch (err) {
    dispatch({
      type: BUS_ASSISTANT_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeBusAssistantsModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_BUS_ASSISTANT_ERROR
    }), 5000)
  }
};

export const searchBusAssistants = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.busAssistant}/api/busassistants/${id}/`);
    dispatch({
      type: SEARCH_BUS_ASSISTANT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BUS_ASSISTANT_ERROR,
      payload: "Driver not Available"
    });
  }
};

export const approveBusAssistants = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.put(`${api.busAssistant}/api/approve/${id}/`);
    dispatch({
      type: APPROVE_BUS_ASSISTANT,
      payload: res.data
    });
    dispatch(getBusAssistants());
  } catch (err) {
    dispatch({
      type: BUS_ASSISTANT_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
  }
};


export function toggleBusAssistantsModalCreate() {
  return {
    type: BUS_ASSISTANT_MODAL_CREATE
  };
}

export function toggleBusAssistantsModalUpdate(id) {
  return {
    type: BUS_ASSISTANT_MODAL_UPDATE,
    payload: id
  };
}

export function getBusAssistantsVehicleId(id) {
  return {
    type: BUS_ASSISTANT_VEHICLE_ID,
    payload: id
  };
}

export function getBusAssistantsVehicleId2(id) {
  return {
    type: BUS_ASSISTANT_VEHICLE_ID2,
    payload: id
  };
}

export function clearBusAssistantsVehicleId() {
  return {
    type: CLEAR_BUS_ASSISTANT_VEHICLE_ID,

  };
}

export function toggleBusAssistantsModalDelete(id) {
  return {
    type: BUS_ASSISTANT_MODAL_DELETE,
    payload: id
  };
}

export function closeBusAssistantsModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_BUS_ASSISTANT,
  };
}

export function isLoading() {
  return {
    type: LOADING_BUS_ASSISTANT,
  };
}
