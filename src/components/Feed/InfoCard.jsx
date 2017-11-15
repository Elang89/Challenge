import React from 'react';
import { string, number } from 'prop-types';
import { Card } from 'reactstrap';
import '../../assets/info-card.css';

const InfoCard = () => {
  return (
    <Card className="info-card">
      <ul className="info-card-list">
        <li>&copy; Tooter 2017</li>
        <a href="#">
          <li className="info-card-list-element">About</li>
        </a>
        <a href="#">
          <li className="info-card-list-element">Help Center</li>
        </a>
        <a href="#">
          <li className="info-card-list-element">Apps</li>
        </a>
        <a href="#">
          <li className="info-card-list-element">Jobs</li>
        </a>
        <a href="#">
          <li className="info-card-list-element">Cookies</li>
        </a>
        <a href="#">
          <li className="info-card-list-element">Developers</li>
        </a>
        <a href="#">
          <li className="info-card-list-element">Legal</li>
        </a>
      </ul>
    </Card>
  );
};

export default InfoCard;
