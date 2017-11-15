import axios from 'axios';
import { push } from 'react-router-redux';
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE
} from './userActions';
import { DEFAULT_URL } from '../../../constants/urls';

export const getUserSuccess = response => {
  return { type: GET_USER_SUCCESS, payload: response };
};

export const getUserFailure = error => {
  return { type: GET_USER_FAILURE, payload: error };
};

export const getUser = (email, password) => {
  const URL = `${DEFAULT_URL}/users?email=${email}&_limit=1`;

  return dispatch => {
    type: GET_USER_REQUEST,
      axios
        .get(URL)
        .then(response => {
          if (response.data.length !== 0) {
            dispatch(getUserSuccess(response.data[0]));
            dispatch(push('/profile'));
          } else {
            dispatch(getUserSuccess(response.data));
          }
        })
        .catch(error => {
          dispatch(getUserFailure(error));
        });
  };
};
