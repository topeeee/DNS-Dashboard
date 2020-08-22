import axios from "axios";
import api from "../../environments/environment";

export const createMessage = (subject, message) => async dispatch => {
  const body = {subject, message};
  try {
    await axios.post(`${api.message}/api/lamata/`, body);
  } catch (err) {}
};
