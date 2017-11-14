import React, { Component } from 'react';
import { number, string, shape, arrayOf, func } from 'prop-types';

class Home extends Component {
  static propTypes = {
    currentUser: shape({
      id: string,
      userName: string,
      email: string,
      firstName: string,
      lastName: string,
      numberOfPosts: number
    })
  };

  render = () => {
    return <div />;
  };
}

export default Home;
