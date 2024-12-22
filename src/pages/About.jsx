import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Assuming you're using Bootstrap's grid system
import Subtitle from '../shared/Subtitle'; // Importing Subtitle from shared folder (if it's the same component)
import Testimonials from '../components/Testimonial/Testimonials'; // Using Testimonials component
import TeamList from '../components/Team/TeamList'; // Assuming you have a component that shows team members
import Newsletter from '../shared/Newsletter'; // Reusing the Newsletter component
// Optionally import images or other assets you may need for the About Us page

const AboutUs = () => {
  return (
    <>
      {/* Introduction Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h1>About Us</h1>
              <p className="lead">
              We are a passionate team dedicated to providing the best travel experiences. Our mission is to inspire and empower travelers by offering personalized, seamless journeys that create unforgettable memories. With years of experience in the industry, we combine local expertise with exceptional service to ensure every aspect of your trip is perfect.From booking your flights to curating the best sightseeing tours, we handle all the details, allowing you to focus on the excitement of your adventure. Our team is committed to offering tailored solutions that cater to your unique preferences, ensuring that each travel experience is meaningful and stress-free.We believe that travel is not just about the destination but about the journey and the memories you make along the way. Whether you're seeking relaxation, adventure, or cultural exploration, we're here to make your travel dreams a reality..
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <h2>Our Mission</h2>
              <p>
                Our mission is to provide unforgettable travel experiences while ensuring sustainability and community development.
              </p>
            </Col>
            <Col lg="6">
              <h2>Our Vision</h2>
              <p>
                Our vision is to become the leading travel company known for providing personalized services and exceptional travel experiences.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Meet the Team Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <Subtitle subtitle="Meet Our Team" />
              <h2>Our Dedicated Team</h2>
            </Col>
            <Col lg="12">
              <TeamList /> {/* Assuming you have a component to show team members */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Customer Testimonials Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle="Customer Testimonials" />
              <h2>What Our Customers Say</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section id="contact">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Join Our Journey</h2>
              <p>
                Ready to make unforgettable memories? Get in touch with us to plan your next adventure.
              </p>
              <a href="#contact" className="btn btn-primary">Contact Us</a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};

export default AboutUs;
