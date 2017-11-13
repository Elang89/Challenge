import {
  GET_MY_POSTS_REQUEST,
  GET_MY_POSTS_SUCCESS,
  GET_MY_POSTS_FAILURE,
  CREATE_POST_REQUEST,
  UPDATE_POST_REQUEST,
  DELETE_POST_REQUEST
} from './postsActions';

const defaultURL = 'http://localhost:3000';

export const getMyPostsSuccess = response => {
  return { type: GET_MY_POSTS_SUCCESS, payload: response };
};

export const getMyPostsFailure = error => {
  return { type: GET_MY_POSTS_FAILURE, payload: error };
};

export const getMyPosts = id => {
  const URL = defaultURL + `/posts/${id}`;

  /* eslint-disable no-console*/

  console.log(URL);

  return dispatch => {
    type: GET_MY_POSTS_REQUEST,
      fetch(URL, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(response => {
          dispatch(getMyPostsSuccess(response.json()));
        })
        .catch(error => {
          dispatch(getMyPostsFailure(error));
        });
  };
};
