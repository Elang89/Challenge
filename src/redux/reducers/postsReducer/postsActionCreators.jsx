import axios from 'axios';
import { DEFAULT_URL } from '../../../constants/urls';
import {
  GET_MY_POSTS_REQUEST,
  GET_MY_POSTS_SUCCESS,
  GET_MY_POSTS_FAILURE,
  GET_FOLLOWED_POSTS_REQUEST,
  GET_FOLLOWED_POSTS_SUCCESS,
  GET_FOLLOWED_POSTS_FAILURE,
  CREATE_POST_REQUEST,
  UPDATE_POST_REQUEST,
  DELETE_POST_REQUEST
} from './postsActions';

export const getFollowedPostsSuccess = response => {
  return { type: GET_FOLLOWED_POSTS_SUCCESS, payload: response };
};

export const getFollowedPostsFailure = error => {
  return { type: GET_FOLLOWED_POSTS_FAILURE, payload: error };
};

export const getFollowedPosts = ids => {
  const URL = DEFAULT_URL + '/posts?userId=';
  let URLList = ids.map(item => `${URL}${item.id}`);

  return dispatch => {
    type: GET_FOLLOWED_POSTS_REQUEST,
      axios.all(URLList.map(request => axios.get(request))).then(
        axios.spread((...response) => {
          let data = [].concat(
            response.map(item => item.data.map(result => result))
          );
          let emptyList = [];
          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
              emptyList = emptyList.concat(data[i][j]);
            }
          }
          dispatch(getFollowedPostsSuccess(emptyList));
        })
      );
  };
};

export const getMyPostsSuccess = response => {
  return { type: GET_MY_POSTS_SUCCESS, payload: response };
};

export const getMyPostsFailure = error => {
  return { type: GET_MY_POSTS_FAILURE, payload: error };
};

export const getMyPosts = id => {
  const URL = DEFAULT_URL + `/posts?userId=${id}`;

  return dispatch => {
    type: GET_MY_POSTS_REQUEST,
      axios.get(URL).then(response => {
        dispatch(getMyPostsSuccess(response.data));
      });
  };
};
