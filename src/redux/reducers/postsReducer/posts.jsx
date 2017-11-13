import { GET_MY_POSTS_SUCCESS, GET_MY_POSTS_FAILURE } from './postsActions';

const posts = (state = {}, action) => {
  if (action.type === GET_MY_POSTS_SUCCESS) {
    return Object.assign({}, state, {
      myPosts: action.payload,
      error: null
    });
  } else if (action.type === GET_MY_POSTS_FAILURE) {
    return Object.assign({}, state, {
      myPosts: null,
      error: action.payload
    });
  }

  return state;
};

export default posts;
