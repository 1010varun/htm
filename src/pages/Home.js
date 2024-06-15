import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountdownTimer from '../components/countdown';
import Schedule from '../components/schedule';
import RegistrationForm from '../components/Registration';
import '../App.css';

const Home = () => {
  const eventDate = new Date('2024-07-01T10:00:00');

  return (
    <Container>
      <Row className="text-center my-5">
        <Col>
          <h1>Hack The Mountain</h1>
          <CountdownTimer date={eventDate} />
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h2>Schedule</h2>
          <Schedule />
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h2>Register</h2>
          <RegistrationForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
