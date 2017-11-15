import React, { Component } from 'react';
import { number, string, shape, arrayOf, func, object } from 'prop-types';
import LoginForm from '../components/Home/LoginForm';

class Home extends Component {
  static propTypes = {
    currentUser: shape({
      id: string,
      userName: string,
      following: arrayOf(
        shape({
          id: string
        })
      ),
      email: string,
      firstName: string,
      lastName: string,
      numberOfPosts: number
    }),
    error: object,
    getUser: func.isRequired
  };

  static defaultProps = {
    currentUser: null,
    error: null
  };

  state = {
    email: '',
    password: ''
  };

  handleChangeOnField = (value, name) => {
    this.setState({
      [name]: value
    });
  };

  render = () => {
    return (
      <LoginForm
        onChange={this.handleChangeOnField}
        email={this.state.email}
        password={this.state.password}
        getUser={this.props.getUser}
      />
    );
  };
}

export default Home;
