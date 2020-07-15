import {
  LOGIN_SUCCESS,
  AUTH_ERROR,
  REMOVE_AUTH_ERROR,
  USER_AUTHORIZED,
  PARTNER,
  ADMIN,
  OPERATOR
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";
import React from "react";
// import {admin} from "../../environments/constants";


export const LogIn = (username, password) => async dispatch => {
  const body = {username, password};
  // sessionStorage.setItem('isAdmin', username);
  try {
    const res = await axios.post(`${api.login}/api/login/`, body);
    const token  = res.data.Authorized;
    sessionStorage.setItem("token", token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: token
    });
    if(res.data) {
      dispatch(getAdmin(username));
      dispatch(getOperator(username));
      dispatch(getPartner(username));
    }
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

export const getAdmin = (username) => async dispatch => {
  try {
    const res = await axios.get(`${api.admin}/api/admins/?search=${username}`);
    if(res.data.length > 0) {
      dispatch({
        type:  ADMIN,
        payload: res.data
      });

    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: "Unauthorized"
      });
      setTimeout(() => dispatch({
        type: REMOVE_AUTH_ERROR
      }), 5000)
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Unauthorized"
    });

  }
};

export const getOperator = (username) => async dispatch => {
  try {
    const res = await axios.get(`${api.operator}/api/operators/`);
    res.data.map(operator => {
      if(operator.email === username) {
        dispatch({
          type:  OPERATOR,
          payload: res.data
        });
        sessionStorage.setItem('OperatorName', operator.name);
        sessionStorage.setItem('OperatorId', operator.id);
      } else {
        dispatch({
          type: AUTH_ERROR,
          payload: "Unauthorized"
        });
        setTimeout(() => dispatch({
          type: REMOVE_AUTH_ERROR
        }), 5000)
      }
    })

  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Unauthorized"
    });

  }
};

export const getPartner = (username) => async dispatch => {
  try {
    const res = await axios.get(`${api.partner}/api/email/?email=${username}`);
    if(res.data.length > 0) {
      dispatch({
        type:  PARTNER,
        payload: res.data
      });
      sessionStorage.setItem('PartnerName', res.data[0].name);
      sessionStorage.setItem('PartnerId', res.data[0].id);

    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: "Unauthorized"
      });
      setTimeout(() => dispatch({
        type: REMOVE_AUTH_ERROR
      }), 5000)
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Unauthorized"
    });

  }
};
