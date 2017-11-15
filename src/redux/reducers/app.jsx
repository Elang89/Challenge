import { combineReducers } from 'redux';
import posts from './postsReducer/posts';
import users from './usersReducer/users';
import { routerReducer as routing } from 'react-router-redux';

const app = combineReducers({
  routing,
  users,
  posts
});

export default app;
