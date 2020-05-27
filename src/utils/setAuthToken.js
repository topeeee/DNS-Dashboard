const token = localStorage.getItem("token");
const setAuthToken = {
  headers: {
    authorization: token
  }
};

export default setAuthToken;
