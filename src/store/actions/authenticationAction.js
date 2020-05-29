import {LOGIN_SUCCESS, AUTH_ERROR, REMOVE_AUTH_ERROR, USER_AUTHORIZED} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";


export const LogIn = (username, password) => async dispatch => {
  const body = {username, password};
  try {
    const res = await axios.post(api.login, body);
    const token  = res.data.Authorized;
    localStorage.setItem("token", token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
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
