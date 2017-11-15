import React from "react";
import { arrayOf, shape, string, number } from "prop-types";
import { Container, Row, Col } from "reactstrap";
import UserCard from "./UserCard";
import FeedCard from "./FeedCard";
import SuggestionsCard from "./SuggestionsCard";
import TrendsCard from "./TrendsCard";
import InfoCard from "./InfoCard";

import "../../assets/user-area.css";

const UserArea = ({ posts }) => {
  return (
    <Container className="user-area">
      <Row>
        <Col lg={3}>
          <UserCard />
          <TrendsCard />
        </Col>

        <Col lg={6}>
          <FeedCard posts={posts} />
        </Col>

        <Col lg={3}>
          <SuggestionsCard />
          <InfoCard />
        </Col>
      </Row>
    </Container>
  );
};

UserArea.propTypes = {
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

export default UserArea;
