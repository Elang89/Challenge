import React from 'react';
import { Card, CardTitle, Button } from 'reactstrap';

import '../../assets/suggestions-card.css';
import '../../assets/button.css';

const SuggestionsCard = () => {
  return (
    <div>
      <Card className="suggestion-card">
        <CardTitle>Who to follow?</CardTitle>
        <span className="suggestion-card-box">
          <img
            className="suggestion-card-rounded-img"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <div>
            <label>Name</label>
            <label>User Name</label>
            <Button outline className="button-follow">
              Follow
            </Button>
          </div>
        </span>
        <span className="suggestion-card-box">
          <img
            className="suggestion-card-rounded-img"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <div>
            <label>Name</label>
            <label>User Name</label>
            <Button outline className="button-follow">
              Follow
            </Button>
          </div>
        </span>
      </Card>
    </div>
  );
};

export default SuggestionsCard;
