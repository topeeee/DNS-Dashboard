import {STATES_BY_USER, CREATE_STATE, STATE_MODAL_CREATE, STATE_MODAL_DELETE, DELETE_STATE} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";



export const StateUser = () => async dispatch => {
  try {
    const res = await axios.get(api.stateMe);
    dispatch({
      type: STATES_BY_USER,
      payload: res.data
    });
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};

export const createState = (xstatecode, xstate, countrycode) => async dispatch => {
  const body = {xstatecode, xstate, countrycode};
  try {
    const res = await axios.post(api.stateMe, body);
    dispatch({
      type: CREATE_STATE,
      payload: res.data
    });
    dispatch(StateUser());
    dispatch(toggleStateModalCreate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};
export const deleteState = (id) => async dispatch => {

  try {
    const res = await axios.delete(`http://165.22.116.11:7008/admin/xstates/${id}/`);
    dispatch({
      type: DELETE_STATE,
      payload: res.data
    });
    dispatch(StateUser());
    dispatch(toggleStateModalDelete());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};
export function toggleStateModalCreate() {
  return {
    type: STATE_MODAL_CREATE
  };
}

export function toggleStateModalDelete(id) {
  return {
    type: STATE_MODAL_DELETE,
    payload: id
  };
}
