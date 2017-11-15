import {
  GET_MY_POSTS_SUCCESS,
  GET_MY_POSTS_FAILURE,
  GET_FOLLOWED_POSTS_SUCCESS,
  GET_FOLLOWED_POSTS_FAILURE
} from './postsActions';

const INITIAL_STATE = {
  follwedPosts: null,
  error: null
}

const posts = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case GET_FOLLOWED_POSTS_SUCCESS: 
      return Object.assign({}, state, { followedPosts: action.payload, error: null });
    case GET_FOLLOWED_POSTS_FAILURE: 
      return Object.assign({}, state, { followedPosts: null, error: action.payload });
  }
  return state;
};

export default posts;
