import React from 'react';
import { Col } from 'reactstrap';  // Assuming you're using reactstrap for grid layout
import TourCard from '../../shared/TourCard';  // Assuming TourCard is the component for each individual tour/package
import tourData from '../../assets/data/tours';  // Individual tours
import tourPackages from '../../assets/data/tourpackages';  // Tour packages

const FeaturedTourList = () => {
  return (
    <div className="tour-list">
      {/* Merging both tourData and tourPackages */}
      {[...tourData, ...tourPackages].map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}> {/* Use `tour.id` as key */}
          <TourCard tour={tour} />
        </Col>
      ))}
    </div>
  );
};

export default FeaturedTourList;
