import {
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE
} from './userActions';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return Object.assign({}, state, {
        currentUser: action.payload,
        error: null
      });
    case GET_USER_FAILURE:
      return Object.assign({}, state, {
        currentUser: null,
        error: action.payload
      });
    default:
      return state;
  }
  return state;
};

export default users;
