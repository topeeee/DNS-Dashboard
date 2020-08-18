import {
  CLOSE_MODAL_DELETE_OPERATOR,
  CREATE_OPERATOR,
  DELETE_OPERATOR,
  LOADING_OPERATOR,
  OPERATOR_BY_USER,
  OPERATOR_ERROR,
  OPERATOR_MODAL_CREATE,
  OPERATOR_MODAL_DELETE,
  OPERATOR_MODAL_UPDATE,
  OPERATOR_STATUS,
  REGISTER_OPERATOR,
  REMOVE_OPERATOR_ERROR,
  SEARCH_OPERATOR,
  UPDATE_OPERATOR,
  OPERATOR_MODAL_SUSPEND, OPERATOR_MODAL_REACTIVATE
} from "../actionTypes"
import axios from 'axios'
import api from "../../environments/environment";
import {createUser} from "./userAction";


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

export const registerOperator = (username, password, name, email, phoneNo, officeAddress, status, numberOfVehicle, contactName, contactPhoneNo, contactEmail) => async dispatch => {
  const body = {username, password};
  try {
    const res = await axios.post(`${api.register}/admin/users/`, body);
    dispatch({
      type:  REGISTER_OPERATOR,
      payload: res.data
    });
    if(res) {
      dispatch(createOperator(res.data.id, name, name, email, phoneNo, officeAddress, status, numberOfVehicle, contactName, contactPhoneNo, contactEmail))
      dispatch(createUser(name, name, email, email, 'not available', '+234' + phoneNo.substr(1), res.data.id))
    }
  } catch (err) {
    dispatch({
      type: OPERATOR_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};



export const createOperator = (pin, name,usernameMain, email, phoneNo, officeAddress, status, numberOfVehicle, contactName, contactPhoneNo, contactEmail) => async dispatch => {
  const body = {pin, name, usernameMain, email, phoneNo, officeAddress, status, numberOfVehicle, contactName, contactPhoneNo, contactEmail};
  try {
    const res = await axios.post(`${api.operator}/api/me/operators/`, body);
    dispatch({
      type: CREATE_OPERATOR,
      payload: res.data
    });
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

export const updateOperator = (id, name, email, phoneNo, officeAddress, numberOfVehicle, contactName, contactPhoneNo, contactEmail) => async dispatch => {
  const body = {name, email, phoneNo, officeAddress, numberOfVehicle, contactName, contactPhoneNo, contactEmail};
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
    dispatch(closeOperatorModalDelete())
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

export function toggleOperatorModalSuspend(id) {
  return {
    type: OPERATOR_MODAL_SUSPEND,
    payload: id
  };
}

export function toggleOperatorModalReactivate(id) {
  return {
    type: OPERATOR_MODAL_REACTIVATE,
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
