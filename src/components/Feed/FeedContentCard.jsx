import React from "react";
import { string, number } from "prop-types";
import { Card } from "reactstrap";
import "../../assets/feed-card.css";

const FeedContentCard = ({
  firstName,
  lastName,
  userName,
  postContent,
  likes,
  image
}) => {
  return (
    <Card className="feed-card" body>
      <span>
        <div>
          <img
            className="feed-card-rounded-img"
            src="https://ridewithlocal.com/assets/user-placeholder-36aee726bdaa251f2b9ed5ead30ca47f7355866e3db8569ba17f915b62ff9956.png"
          />
        </div>
        <div>
          <span>
            <strong className="feed-card-post-name">{`${firstName} ${
              lastName
            }`}</strong>
            <label>{`@${userName}`}</label>
          </span>
          <div>
            <p className="feed-card-post-content">{postContent}</p>
          </div>
        </div>
        <div>
          {image ? (
            <img className="feed-card-content-image" src={image} />
          ) : null}
        </div>
      </span>
    </Card>
  );
};

FeedContentCard.propTypes = {
  name: string.isRequired,
  userName: string.isRequired,
  postContent: string.isRequired,
  likes: number.isRequired,
  image: string
};

FeedContentCard.defaultProps = {
  image: null
};

export default FeedContentCard;
