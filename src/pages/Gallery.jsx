import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'; // Gallery component
import '../styles/Gallery.css'; // Your custom Gallery CSS

const Gallery = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Gallery;
