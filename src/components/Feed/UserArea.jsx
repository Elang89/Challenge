import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import UserCard from './UserCard';
import FeedCard from './FeedCard';
import SuggestionsCard from './SuggestionsCard';

import '../../assets/user-area.css';

const UserArea = () => {
  return (
    <Container className="user-area">
      <Row>
        <Col lg={3}>
          <UserCard />
        </Col>

        <Col lg={6}>
          <FeedCard />
        </Col>

        <Col lg={3}>
          <SuggestionsCard />
        </Col>
      </Row>
    </Container>
  );
};

export default UserArea;
