import { combineReducers } from 'redux';
import posts from './postsReducer/posts';

const app = combineReducers({
  posts
});

export default app;
