import { connect } from 'react-redux';
import Home from '../classes/Home';
import { getUser } from '../redux/reducers/usersReducer/usersActionCreators';

const mapStateToProps = ({ users }) => {
  return {
    currentUser: users.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  getUser: (email, password) => {
    dispatch(getUser(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
