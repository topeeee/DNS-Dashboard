import {
  DRIVER_BY_USER,
  DRIVER_MODAL_CREATE,
  DRIVER_MODAL_DELETE,
  DELETE_DRIVER,
  CLOSE_MODAL_DELETE_DRIVER,
  LOADING_DRIVER,
  DRIVER_ERROR,
  SEARCH_DRIVER,
  CREATE_DRIVER,
  REMOVE_DRIVER_ERROR,
  APPROVE_DRIVER,
  DRIVER_STATUS,
  DRIVER_MODAL_UPDATE,
  UPDATE_DRIVER,
  DRIVER_VEHICLE_ID,
  DRIVER_VEHICLE_ID2,
  CLEAR_DRIVER_VEHICLE_ID
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const getDrivers = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driver}/api/drivers/`);
    dispatch({
      type: DRIVER_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};
export const changeDriverStatus = (id, status) => async dispatch => {
  try {
    const res = await axios.put(`${api.driver}/api/status/${id}/`, {status});
    dispatch({
      payload: id,
      type: DRIVER_STATUS,
    });
    dispatch(getDrivers());
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


export const createDriver = (vehicleId, operatorInput, firstname, lastname, residentialaddress, email, phoneno, status, pin, bankname, accountname, accountnumber, zone, area, route, geofencedarea, appstatus) => async dispatch => {
  const body = {firstname, lastname, residentialaddress, email, phoneno, status, pin, bankname, accountname, accountnumber, zone, area, route, geofencedarea, appstatus};
  try {
    const res = await axios.post(`${api.driver}/api/me/drivers/`, body);
    dispatch({
      type: CREATE_DRIVER,
      payload: res.data
    });
    if(res.data) {
     await axios.post("http://165.22.116.11:7054/api/me/drivervehicles/", {vehicleId: vehicleId, driverId: res.data.id, operatorId: operatorInput})
    }
    dispatch(getDrivers());
    dispatch(toggleDriverModalCreate());
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleDriverModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ERROR
    }), 5000)

  }
};

export const updateDriver = (id, firstname, lastname, residentialaddress, email, phoneno, status, pin, bankname, accountname, accountnumber, zone, area, route, geofencedarea, appstatus) => async dispatch => {
  const body = {firstname, lastname, residentialaddress, email, phoneno, status, pin, bankname, accountname, accountnumber, zone, area, route, geofencedarea, appstatus};
  try {
    const res = await axios.put(`${api.driver}/api/drivers/${id}/`, body);
    dispatch({
      type: UPDATE_DRIVER,
      payload: res.data
    });
    dispatch(getDrivers());
    dispatch(toggleDriverModalUpdate());
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleDriverModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ERROR
    }), 5000)

  }
};
export const deleteDriver = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.driver}/admin/drivers/${id}/`);
    dispatch({
      type: DELETE_DRIVER,
      payload: res.data
    });
    dispatch(getDrivers());
    dispatch(closeDriverModalDelete());
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeDriverModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ERROR
    }), 5000)
  }
};

export const searchDriver = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driver}/api/drivers/${id}/`);
    dispatch({
      type: SEARCH_DRIVER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Driver not Available"
    });
  }
};

export const approveDriver = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.put(`${api.driver}/api/approve/${id}/`);
    dispatch({
      type: APPROVE_DRIVER,
      payload: res.data
    });
    dispatch(getDrivers());
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
  }
};


export function toggleDriverModalCreate() {
  return {
    type: DRIVER_MODAL_CREATE
  };
}

export function toggleDriverModalUpdate(id) {
  return {
    type: DRIVER_MODAL_UPDATE,
    payload: id
  };
}

export function getDriverVehicleId(id) {
  return {
    type: DRIVER_VEHICLE_ID,
    payload: id
  };
}

export function getDriverVehicleId2(id) {
  return {
    type: DRIVER_VEHICLE_ID2,
    payload: id
  };
}

export function clearDriverVehicleId() {
  return {
    type: CLEAR_DRIVER_VEHICLE_ID,

  };
}

export function toggleDriverModalDelete(id) {
  return {
    type: DRIVER_MODAL_DELETE,
    payload: id
  };
}

export function closeDriverModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_DRIVER,
  };
}

export function isLoading() {
  return {
    type: LOADING_DRIVER,
  };
}
