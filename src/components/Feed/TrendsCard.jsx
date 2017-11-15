import React from "react";
import { Card, CardTitle } from "reactstrap";
import "../../assets/trends-card.css";

const TrendsCard = () => {
  return (
    <div>
      <Card className="trends-card">
        <CardTitle>Trends for you</CardTitle>
        <div>
          <ul className="trends-card-list">
            <a href="#">
              <li>
                <b>Trend 1</b>
              </li>
            </a>
            <a href="#">
              <li>
                <b>Trend 2</b>
              </li>
            </a>
            <a href="#">
              <li>
                <b>Trend 3</b>
              </li>
            </a>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default TrendsCard;
