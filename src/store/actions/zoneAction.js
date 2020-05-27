import {ZONE_BY_USER, ZONE_MODAL_CREATE, ZONE_MODAL_DELETE, DELETE_ZONE, CREATE_ZONE} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";
import setAuthToken from "../../utils/setAuthToken";


export const ZoneUser = () => async dispatch => {
  try {
    const res = await axios.get(api.zone, setAuthToken);
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
    const res = await axios.post(api.zone, body, setAuthToken);
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
export const deleteZone = (id) => async dispatch => {

  try {
    const res = await axios.delete(`http://165.22.116.11:7005/admin/zones/${id}/`, setAuthToken);
    dispatch({
      type: DELETE_ZONE,
      payload: res.data
    });
    dispatch(ZoneUser());
    dispatch(toggleZoneModalDelete());
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

export function toggleZoneModalDelete(id) {
  return {
    type: ZONE_MODAL_DELETE,
    payload: id
  };
}
