import {USER_MODAL_CREATE} from "../actionTypes";

const initialState = {
  UserModalCreate: false
};

function userReducer(state = initialState, action) {
  if (action.type === USER_MODAL_CREATE) {
    return {
      ...state,
      UserModalCreate: !state.UserModalCreate,
    };
  } else {
    return state;
  }
}

export default userReducer;
