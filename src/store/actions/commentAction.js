import {
  COMMENT
} from "../actionTypes"
import axios from 'axios'
import api from "../../environments/environment";



export const setComment = (commentType, comment, userId, role) => async dispatch => {
  const body = {commentType, comment, userId, role}
  try {
    await axios.post(`${api.comment}/api/me/comments/`, body);
    dispatch({
      type:  COMMENT,
    });
  } catch (err) {}
};

export const deleteComment = (id) => async dispatch => {
  try {
    await axios.delete(`${api.comment}/admin/comments/${id}/`);
  } catch (err) {}
}

