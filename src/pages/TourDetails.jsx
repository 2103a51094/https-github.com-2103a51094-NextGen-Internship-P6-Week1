import React, { useRef, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Col, Container, Form, ListGroup, Row, Card, CardBody } from 'reactstrap';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Newsletter from '../shared/Newsletter';
import tourData from '../assets/data/tours';
import tourPackageData from '../assets/data/tourpackages'; // Assuming you have tour packages data.

const TourDetails = () => {
  const { id } = useParams();
  const location = useLocation();  // Get location state passed from the previous page
  const isTourPackage = location.state?.isTourPackage;  // Check if it's a tour package
  const navigate = useNavigate();  // For navigation to Thank You page

  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const [userReviews, setUserReviews] = useState([
    {
      userName: 'Alice',
      date: '2023-12-20T14:00:00Z',
      rating: 5,
      title: 'Amazing Experience!',
      comment: 'This tour was incredible! Highly recommend it to anyone looking for adventure.'
    },
    {
      userName: 'Bob',
      date: '2023-12-21T14:00:00Z',
      rating: 4,
      title: 'Great, but Could be Better',
      comment: 'The tour was great, but I think the schedule could have been a bit better organized.'
    }
  ]);

  // Declare state hooks
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [paymentOption, setPaymentOption] = useState('');
  const [totalCost, setTotalCost] = useState(0);  // Initially, set total cost to 0

  // Get tour or tour package data based on the type
  const tour = isTourPackage
    ? tourPackageData.find(tourPackage => tourPackage.id === id)
    : tourData.find(tour => tour.id === id);

  // Ensure tour exists before accessing its properties
  if (!tour) {
    return <div>{isTourPackage ? 'Tour package not found!' : 'Tour not found!'}</div>;
  }

  const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = e => {
    e.preventDefault();

    const reviewText = reviewMsgRef.current.value;

    if (tourRating && reviewText) {
      const newReview = {
        userName: 'New User',
        date: new Date().toISOString(),
        rating: tourRating,
        title: `Review by New User`,
        comment: reviewText
      };

      setUserReviews([...userReviews, newReview]);
    }

    // After the form is submitted, navigate to the Thank You page
    navigate('/thankyou');
  };

  const formatDate = (date) => {
    try {
      const formattedDate = new Date(date).toLocaleDateString("en-US", options);
      return formattedDate !== "Invalid Date" ? formattedDate : "N/A";
    } catch {
      return "N/A";
    }
  };

  const handleGuestsChange = (e) => {
    const guests = e.target.value;
    setNumberOfGuests(guests);
    setTotalCost(price * guests);  // Update total cost when the number of guests changes
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);  // Store the selected payment option
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                {/* Tour Image Section */}
                <div className="tour__image">
                  <img src={photo} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                </div>

                {/* Tour Information Box */}
                <Card className="tour__info-box mt-4">
                  <CardBody>
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill" style={{ color: 'var(--secondary-color)' }}></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                      </span>
                      <span>
                        <i className="ri-map-pin-user-fill"></i>
                        {address}
                      </span>
                    </div>

                    {/* Adjusted Extra Details */}
                    <div className="tour__extra-details mt-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                      <span><i className="ri-map-pin-2-line" style={{ marginRight: '8px' }}></i>{city}</span>
                      <span><i className="ri-money-dollar-circle-line" style={{ marginRight: '8px' }}></i>${price}/per person</span>
                      <span><i className="ri-map-pin-time-line" style={{ marginRight: '8px' }}></i>{distance} km</span>
                      <span><i className="ri-group-line" style={{ marginRight: '8px' }}></i>{maxGroupSize} people</span>
                    </div>

                    <h5 className="mt-4">Description</h5>
                    <p>{desc}</p>
                  </CardBody>
                </Card>

                {/* Reviews Section */}
                <Card className="review__box mt-4">
                  <CardBody>
                    <h4>Reviews ({userReviews?.length} reviews)</h4>

                    {/* Review Input Box */}
                    <div className="review__input-box" style={{ marginBottom: '1rem', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
                      <Form onSubmit={submitHandler}>
                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                          {[1, 2, 3, 4, 5].map(rating => (
                            <span
                              key={rating}
                              onClick={() => setTourRating(rating)}
                              style={{ color: rating <= tourRating ? 'gold' : 'gray', cursor: 'pointer' }}
                            >
                              {rating}<i className="ri-star-fill"></i>
                            </span>
                          ))}
                        </div>

                        {/* Share your thoughts input and submit button */}
                        <div className="d-flex flex-column gap-3">
                          <input
                            type="text"
                            ref={reviewMsgRef}
                            placeholder="Share your thoughts"
                            required
                            style={{
                              padding: '10px',
                              borderRadius: '8px',
                              border: '1px solid #ddd',
                              width: '100%',
                              marginBottom: '10px',
                            }}
                          />
                          <button className="btn primary__btn text-white" type="submit"
                            style={{
                              padding: '10px',
                              borderRadius: '8px',
                              backgroundColor: '#f39c12',
                              border: 'none',
                              cursor: 'pointer',
                              textAlign: 'center',
                            }}>
                            Submit
                          </button>
                        </div>
                      </Form>
                    </div>

                    {/* Reviews List */}
                    <ListGroup className="user__reviews mt-4">
                      {userReviews?.length > 0 ? (
                        userReviews.map((review, index) => (
                          <div key={index} className="review__item" style={{ marginBottom: '20px' }}>
                            {/* Avatar section with controlled size */}
                            <div className="avatar__wrapper" style={{ width: '40px', height: '40px' }}>
                              <img src={avatar} alt="User Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                            </div>
                            <div className="w-100" style={{ paddingLeft: '10px' }}>
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5>{review.userName}</h5>
                                  <p>{formatDate(review.date)}</p> {/* Using helper to format date */}
                                </div>
                                <span className="d-flex align-items-center">
                                  {review.rating}<i className="ri-star-fill" style={{ color: 'gold' }}></i>
                                </span>
                              </div>
                              <h6>{review.title}</h6>
                              <p>{review.comment}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No reviews yet</p>
                      )}
                    </ListGroup>
                  </CardBody>
                </Card>
              </div>
            </Col>

            {/* Booking Section (Payment Box) */}
            <Col lg="4">
              <Card className="payment__box">
                <CardBody>
                  {/* Booking Form */}
                  <h5>Booking Information</h5>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex flex-column gap-3">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                        style={{
                          padding: '10px',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          width: '100%',
                        }}
                      />
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        style={{
                          padding: '10px',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          width: '100%',
                        }}
                      />
                      <input
                        type="number"
                        value={numberOfGuests}
                        onChange={handleGuestsChange}
                        placeholder="Number of guests"
                        required
                        style={{
                          padding: '10px',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          width: '100%',
                        }}
                      />
                    </div>

                    {/* Payment Methods Below the Booking Info */}
                    <div className="payment-methods mt-4">
                      <div className="d-flex align-items-center">
                        <label>
                          <input
                            type="radio"
                            name="payment"
                            value="UPI"
                            onChange={handlePaymentOptionChange}
                          /> UPI
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="payment"
                            value="Debit"
                            onChange={handlePaymentOptionChange}
                          /> Debit Card
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="payment"
                            value="Credit"
                            onChange={handlePaymentOptionChange}
                          /> Credit Card
                        </label>
                      </div>
                    </div>

                    {/* Conditional Payment Fields */}
                    {paymentOption === "UPI" && (
                      <div className="mt-3">
                        <input
                          type="text"
                          placeholder="Enter your UPI ID"
                          required
                          style={{
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            width: '100%',
                          }}
                        />
                      </div>
                    )}
                    {paymentOption === "Debit" && (
                      <div className="mt-3">
                        <input
                          type="text"
                          placeholder="Enter Debit Card Number"
                          required
                          style={{
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            width: '100%',
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Enter Expiry Date (MM/YY)"
                          required
                          style={{
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            width: '100%',
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Enter CVV"
                          required
                          style={{
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            width: '100%',
                          }}
                        />
                      </div>
                    )}
                    {paymentOption === "Credit" && (
                      <div className="mt-3">
                        <input
                          type="text"
                          placeholder="Enter Credit Card Number"
                          required
                          style={{
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            width: '100%',
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Enter Expiry Date (MM/YY)"
                          required
                          style={{
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            width: '100%',
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Enter CVV"
                          required
                          style={{
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            width: '100%',
                          }}
                        />
                      </div>
                    )}

                    <div className="mt-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        style={{
                          padding: '10px',
                          borderRadius: '8px',
                        }}
                      >
                        Book Now for ${totalCost}
                      </button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default TourDetails;
