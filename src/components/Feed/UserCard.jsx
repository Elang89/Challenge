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
import PictureIcon from '../../assets/images/camera.svg'

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
          <div className='user-card-image-button'><img src={PictureIcon}/></div>
          <CardTitle>Name</CardTitle>
          <CardSubtitle className="">User Name</CardSubtitle>
        </span>
      </Card>
    </div>
  );
};

export default UserCard;
