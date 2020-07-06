import {
  LOGIN_SUCCESS,
  AUTH_ERROR,
  REMOVE_AUTH_ERROR,
  USER_AUTHORIZED,
  OPERATOR_BY_USER,
  OPERATOR_ERROR
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";
import {admin} from "../../environments/constants";


export const LogIn = (username, password) => async dispatch => {
  const body = {username, password};
  sessionStorage.setItem('isAdmin', username);
  try {
    if(username !== admin) {
      dispatch(getOperator(username));
    }
    const res = await axios.post(`${api.login}/api/login/`, body);
    const token  = res.data.Authorized;
    sessionStorage.setItem("token", token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: username
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response
    });

      setTimeout(() => dispatch({
        type: REMOVE_AUTH_ERROR
      }), 5000)
  }
};

export function Authorized() {
  return {
    type: USER_AUTHORIZED,

  };
}

export const getOperator = (username) => async dispatch => {
  try {
    // dispatch(isLoading());
    const res = await axios.get(`${api.operator}/api/operators/`);
    dispatch({
      type:  OPERATOR_BY_USER,
      payload: res.data
    });
    res.data.map(operator => {
      if(operator.email === username) {
        sessionStorage.setItem('OperatorName', operator.name);
        sessionStorage.setItem('OperatorId', operator.id);
      }
    })

  } catch (err) {
    dispatch({
      type: OPERATOR_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });

  }
};
