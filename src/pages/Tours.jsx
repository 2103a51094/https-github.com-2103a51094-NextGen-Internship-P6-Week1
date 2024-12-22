import React, { useState } from 'react';
import CommonSection from '../shared/CommonSection';
import "../styles/tour.css";

import tourData from '../assets/data/tours';  // Import tour data
import tourPackagesData from '../assets/data/tourpackages';  // Import tour packages data
import { Col, Container, Row } from 'reactstrap';
import SearchBar from '../shared/SearchBar';
import TourCard from '../shared/TourCard';  // Tour card for individual tours
import TourPackageCard from '../shared/TourPackageCard';  // Tour package card for individual tour packages
import Booking from '../components/Booking/Booking';  // Add Booking component
import Newsletter from '../shared/Newsletter';

const Tours = () => {
  const [activePage, setActivePage] = useState(1); // Track which page is active (1 for Tours, 2 for Tour Packages)
  const [selectedTour, setSelectedTour] = useState(null);  // Store selected tour for booking

  const handleTourClick = (tour) => {
    setSelectedTour(tour);  // Update the selected tour when a user clicks on a tour card
  };

  const handlePackageClick = (tourPackage) => {
    setSelectedTour(tourPackage);  // Update the selected tour package when a user clicks on a package card
  };

  return (
    <>
      <CommonSection title="All Tours" />

      {/* Search Bar Section */}
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="pt-0">
        <Container>
          <Row>
            {activePage === 1 && (
              <>
                <h2 className="featured__tour-title">Featured Tours</h2>
                {tourData.map((tour) => (
                  <Col lg="3" className="mb-4" key={tour.id}>
                    <div onClick={() => handleTourClick(tour)}>
                      <TourCard tour={tour} />
                    </div>
                  </Col>
                ))}
              </>
            )}

            {activePage === 2 && (
              <>
                <h2 className="featured__tour-package-title">Featured Tour Packages</h2>
                {tourPackagesData.map((tourPackage) => (
                  <Col lg="3" className="mb-4" key={tourPackage.id}>
                    <div onClick={() => handlePackageClick(tourPackage)}>
                      <TourPackageCard tourPackage={tourPackage} />
                    </div>
                  </Col>
                ))}
              </>
            )}
          </Row>

          {/* Show the Booking Component when a tour or tour package is selected */}
          {selectedTour &&  (
            <Row>
              <Col lg="4">
                <Booking tour={selectedTour} avgRating={selectedTour.avgRating || 0} />
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Bottom Pagination - Moved this above the Newsletter Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                <span
                  onClick={() => setActivePage(1)} // Switch to Tours page
                  className={activePage === 1 ? 'active__page' : ''}
                >
                  1
                </span>
                <span
                  onClick={() => setActivePage(2)} // Switch to Tour Packages page
                  className={activePage === 2 ? 'active__page' : ''}
                >
                  2
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};

export default Tours;
