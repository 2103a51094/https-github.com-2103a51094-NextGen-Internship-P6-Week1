import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const TravelCategories = () => {
  return (
    <section className="travel-categories">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs="auto" className="category-item">
            <h5>Flights</h5>
          </Col>
          <Col xs="auto" className="category-item">
            <h5>Hotels</h5>
          </Col>
          <Col xs="auto" className="category-item">
            <h5>Homestays & Villas</h5>
          </Col>
          <Col xs="auto" className="category-item">
            <h5>Holiday Packages</h5>
          </Col>
          <Col xs="auto" className="category-item">
            <h5>Trains</h5>
          </Col>
          <Col xs="auto" className="category-item">
            <h5>Buses</h5>
          </Col>
          <Col xs="auto" className="category-item">
            <h5>Cabs</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TravelCategories;
