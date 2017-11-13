import { connect } from 'react-redux';
import Home from '../classes/Home';
import { getMyPosts } from '../redux/reducers/postsReducer/postsActionCreators';

const mapStateToProps = ({ posts }) => {
  return {
    myPosts: posts.myPosts
  };
};

const mapDispatchToProps = dispatch => ({
  getMyPosts: id => {
    dispatch(getMyPosts(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
