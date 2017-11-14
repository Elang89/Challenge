import React from 'react';
import { string, number } from 'prop-types';
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button,
  CardImg
} from 'reactstrap';

import '../../assets/user-card.css';

const UserCard = () => {
  return (
    <div>
      <Card>
        <CardImg
          top
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <span className="user-card-details-box">
          <CardTitle>Name</CardTitle>
          <CardSubtitle className="">User Name</CardSubtitle>
          <Button>Add Image</Button>
        </span>
      </Card>
    </div>
  );
};

export default UserCard;
