import React from "react";
import { string, number, shape, arrayOf } from "prop-types";
import { Card, Button, CardTitle, CardText, Input } from "reactstrap";
import FeedContentCard from "./FeedContentCard";

import "../../assets/feed-card.css";

const FeedCard = ({ posts }) => {
  console.log(posts);

  return (
    <div>
      <Card className="feed-card-top">
        <span>
          <img
            className="feed-card-rounded-img"
            src="https://ridewithlocal.com/assets/user-placeholder-36aee726bdaa251f2b9ed5ead30ca47f7355866e3db8569ba17f915b62ff9956.png"
          />
          <Input
            className="feed-card-input"
            type="text"
            placeholder="What's happening?"
          />
        </span>
      </Card>
      {posts
        ? posts.map(post => (
            <FeedContentCard
              firstName="Name"
              lastName="Last Name"
              userName="username"
              postContent={post.content}
              image={post.img}
            />
          ))
        : null}
    </div>
  );
};

FeedCard.propTypes = {
  posts: arrayOf(
    shape({
      id: string,
      userId: string,
      content: string,
      img: string,
      dateAdded: string,
      dateModified: string,
      likes: number
    }).isRequired
  )
};

export default FeedCard;
