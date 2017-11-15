import { connect } from 'react-redux';
import Feed from '../classes/Feed';
import { getFollowedPosts } from '../redux/reducers/postsReducer/postsActionCreators';
import { getUser } from '../redux/reducers/usersReducer/usersActionCreators';

const mapStateToProps = ({ posts, users }) => {
  return {
    followedPosts: posts.followedPosts
  };
};

const mapDispatchToProps = dispatch => ({
  getFollowedPosts: ids => {
    dispatch(getFollowedPosts(ids));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
