const token = sessionStorage.getItem("token");
const setAuthToken = {
  headers: {
    authorization: token
  }
};

export default setAuthToken;
