import {
  VEHICLE_BY_USER,
  VEHICLE_MODAL_CREATE,
  VEHICLE_MODAL_DELETE,
  DELETE_VEHICLE,
  CLOSE_MODAL_DELETE_VEHICLE,
  LOADING_VEHICLE,
  VEHICLE_ERROR,
  SEARCH_VEHICLE,
  CREATE_VEHICLE,
  REMOVE_VEHICLE_ERROR
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const getVehicles = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.vehicle}/api/vehicles/`);
    dispatch({
      type: VEHICLE_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: VEHICLE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};

export const createVehicle = (approved, vehicle_make, vehicle_model, vehicle_type, status) => async dispatch => {
  const body = {
  approved, vehicle_make, vehicle_model, vehicle_type, status
   };


  try {
    const res = await axios.post(`${api.vehicle}/api/me/vehicles/`, body);
    dispatch({
      type: CREATE_VEHICLE,
      payload: res.data
    });
    dispatch(getVehicles());
    dispatch(toggleVehicleModalCreate());
  } catch (err) {
    dispatch({
      type: VEHICLE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleVehicleModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_VEHICLE_ERROR
    }), 5000)

  }
};
export const deleteVehicle = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.vehicle}/admin/vehicles/${id}/`);
    dispatch({
      type: DELETE_VEHICLE,
      payload: res.data
    });
    dispatch(getVehicles());
    dispatch(closeVehicleModalDelete());
  } catch (err) {
    dispatch({
      type: VEHICLE_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeVehicleModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_VEHICLE_ERROR
    }), 5000)
  }
};

export const searchVehicle = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.vehicle}/api/vehicles/${id}/`);
    dispatch({
      type: SEARCH_VEHICLE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: VEHICLE_ERROR,
      payload: "Vehicle not Available"
    });
  }
};


export function toggleVehicleModalCreate() {
  return {
    type: VEHICLE_MODAL_CREATE
  };
}

export function toggleVehicleModalDelete(id) {
  return {
    type: VEHICLE_MODAL_DELETE,
    payload: id
  };
}

export function closeVehicleModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_VEHICLE,
  };
}

export function isLoading() {
  return {
    type: LOADING_VEHICLE,
  };
}
