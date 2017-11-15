import React, { Component } from "react";
import { number, string, shape, arrayOf, func } from "prop-types";

import NavbarHeader from "../components/Common/NavbarHeader";
import UserArea from "../components/Feed/UserArea";

class Feed extends Component {
  static propTypes = {
    getFollowedPosts: func.isRequired,
    followedPosts: arrayOf(
      shape({
        id: string,
        userId: string,
        content: string,
        dateAdded: string,
        dateModified: string,
        likes: number
      }).isRequired
    )
  };

  componentWillMount = () => {
    this.props.getFollowedPosts([
      { id: "4fab1b02-183f-4c68-ae8c-e9f3a10a01b7" },
      { id: "32354096-0433-4505-93ea-9fdddd99ecba" },
      { id: "5229309d-350f-4c85-a47f-659aa7e3613e" }
    ]);
  };

  render = () => {
    return (
      <div>
        <NavbarHeader />
        <UserArea posts={this.props.followedPosts} />
      </div>
    );
  };
}

export default Feed;
