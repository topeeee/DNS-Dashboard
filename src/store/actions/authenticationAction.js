import {LOGIN_SUCCESS, AUTH_ERROR, REMOVE_AUTH_ERROR, USER_AUTHORIZED} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";


export const LogIn = (username, password) => async dispatch => {
  const body = {username, password};
  const isAdmin = sessionStorage.setItem('isAdmin', username);
  try {
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
