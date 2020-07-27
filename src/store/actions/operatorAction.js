import {
  OPERATOR_BY_USER,
  OPERATOR_MODAL_CREATE,
  OPERATOR_MODAL_DELETE,
  DELETE_OPERATOR,
  CLOSE_MODAL_DELETE_OPERATOR,
  LOADING_OPERATOR,
  OPERATOR_ERROR,
  SEARCH_OPERATOR,
  CREATE_OPERATOR,
  REMOVE_OPERATOR_ERROR,
  REGISTER_OPERATOR,
  OPERATOR_STATUS,
  UPDATE_OPERATOR,
  OPERATOR_MODAL_UPDATE
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";

// async function getVariables() {
//   try {
//     const devices = await getDevices();
//     console.log(devices);
//
//     const promises = [];
//     devices.forEach((device) => {
//       promises.push(getForOneDevice(device.id));
//     })
//
//     const allResults = Promise.all(promises);
//   } catch (e) {
//     console.error(e)
//   }
// }


export const getOperators = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.operator}/api/operators/`);
    dispatch({
      type:  OPERATOR_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: OPERATOR_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};

export const registerOperator = (username, password, name, email, phoneNo, officeAddress, status, numberOfVehicle) => async dispatch => {
  const body = {username, password};
  try {
    const res = await axios.post(`${api.register}/admin/users/`, body);
    dispatch({
      type:  REGISTER_OPERATOR,
      payload: res.data
    });
    if(res) {
      dispatch(createOperator(res.data.id, name, email, phoneNo, officeAddress, status, numberOfVehicle))
    }
  } catch (err) {
    dispatch({
      type: OPERATOR_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};



export const createOperator = (pin, name, email, phoneNo, officeAddress, status, numberOfVehicle) => async dispatch => {
  const body = {pin, name, email, phoneNo, officeAddress, status, numberOfVehicle};
  try {
    const res = await axios.post(`${api.operator}/api/me/operators/`, body);
    dispatch({
      type: CREATE_OPERATOR,
      payload: res.data
    });
    // dispatch(getOperators());
    // dispatch(toggleOperatorModalCreate());
  } catch (err) {
    dispatch({
      type:  OPERATOR_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleOperatorModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_OPERATOR_ERROR
    }), 5000)

  }
};

export const updateOperator = (id, name, email, phoneNo, officeAddress, numberOfVehicle) => async dispatch => {
  const body = {name, email, phoneNo, officeAddress, numberOfVehicle};
  try {
    const res = await axios.put(`${api.operator}/api/operators/${id}/`, body);
    dispatch({
      type: UPDATE_OPERATOR,
      payload: res.data
    });
    dispatch(getOperators());
    dispatch(toggleOperatorModalUpdate());
  } catch (err) {
    dispatch({
      type:  OPERATOR_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    setTimeout(() => dispatch({
      type: REMOVE_OPERATOR_ERROR
    }), 5000)

  }
};


export const changeOperatorStatus = (id, status) => async dispatch => {
  try {
    const res = await axios.put(`${api.operator}/api/status/${id}/`, {status});
    dispatch({
      payload: res.data,
      type: OPERATOR_STATUS,
    });
    dispatch(getOperators());
  } catch (err) {
    dispatch({
      type: OPERATOR_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeOperatorModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_OPERATOR_ERROR
    }), 5000)
  }
};
export const deleteOperator = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.operator}/admin/operators/${id}/`);
    dispatch({
      type: DELETE_OPERATOR,
      payload: res.data
    });
    dispatch(getOperators());
    dispatch(closeOperatorModalDelete());
  } catch (err) {
    dispatch({
      type: OPERATOR_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeOperatorModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_OPERATOR_ERROR
    }), 5000)
  }
};

export const searchOperator = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.operator}/api/operators/${id}/`);
    dispatch({
      type: SEARCH_OPERATOR,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: OPERATOR_ERROR,
      payload: "Driver Route not Available"
    });
  }
};


export function toggleOperatorModalCreate() {
  return {
    type: OPERATOR_MODAL_CREATE
  };
}
export function toggleOperatorModalUpdate(id) {
  return {
    type: OPERATOR_MODAL_UPDATE,
    payload: id
  };
}

export function toggleOperatorModalDelete(id) {
  return {
    type: OPERATOR_MODAL_DELETE,
    payload: id
  };
}

export function closeOperatorModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_OPERATOR,
  };
}

export function isLoading() {
  return {
    type: LOADING_OPERATOR,
  };
}
