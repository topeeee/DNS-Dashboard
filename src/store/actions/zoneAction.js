import {ZONE_BY_USER, ZONE_MODAL_CREATE, ZONE_MODAL_UPDATE, DELETE_ZONE, CREATE_ZONE, UPDATE_ZONE} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";
import setAuthToken from "../../utils/setAuthToken";


export const ZoneUser = () => async dispatch => {
  try {
    const res = await axios.get(`${api.zone}/api/zones/`);
    dispatch({
      type: ZONE_BY_USER,
      payload: res.data
    });
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};

export const createZone = (zonecode, zone, statecode) => async dispatch => {
  const body = {zonecode, zone, statecode};
  try {
    const res = await axios.post(`${api.zone}/api/me/zones/`, body);
    dispatch({
      type: CREATE_ZONE,
      payload: res.data
    });
    dispatch(ZoneUser());
    dispatch(toggleZoneModalCreate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};


export const updateZone = (id, zonecode, zone, statecode) => async dispatch => {
  const body = {zonecode, zone, statecode};
  try {
    const res = await axios.put(`${api.zone}/api/zones/${id}/`, body);
    dispatch({
      type: UPDATE_ZONE,
      payload: res.data
    });
    dispatch(ZoneUser());
    dispatch(toggleZoneModalUpdate());
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    //   payload: err.response
    // });

  }
};


export function toggleZoneModalCreate() {
  return {
    type: ZONE_MODAL_CREATE
  };
}

export function toggleZoneModalUpdate(id) {
  return {
    type: ZONE_MODAL_UPDATE,
    payload: id
  };
}
