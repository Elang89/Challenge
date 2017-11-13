import React, { Component } from 'react';
import { number, string, shape, arrayOf, func } from 'prop-types';

class Home extends Component {
  static propTypes = {
    getMyPosts: func.isRequired,
    myPosts: arrayOf(
      shape({
        id: string,
        userId: string,
        content: string,
        dateAdded: string,
        dateModified: string,
        likes: number
      })
    ).isRequired,
    currentUser: shape({
      id: string,
      userName: string,
      email: string,
      firstName: string,
      lastName: string,
      numberOfPosts: number
    })
  };

  componentWillMount = () => {
    this.props.getMyPosts('f903b5fc-1e78-40bb-acb4-74042f53caa3');
  };

  render = () => {
    return (
      <div>
        <pre>
          <code>{JSON.stringify(this.props.myPosts)}</code>
        </pre>
      </div>
    );
  };
}

export default Home;
