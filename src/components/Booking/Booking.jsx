import React, { useState } from 'react'
import './booking.css'
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap'
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour; // Destructure price and reviews from the tour prop
    const navigate = useNavigate();

    // Initial state for credentials
    const [credentials, setCredentials] = useState({
        userID: '01', // Static for now, will be dynamic later
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    // Handle form input changes
    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    // Calculate total cost including service fee
    const serviceFee = 10;
    const totalCost = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

    // Handle the booking submission
    const handleClick = e => {
        e.preventDefault();
        navigate('/thank-you'); // Redirect to the thank-you page after booking
    };

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price}<span>/per person</span></h3>
                <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-fill" style={{ color: 'var(--secondary-color)' }}></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input type="date" id="bookAt" required onChange={handleChange} />
                        <input type="number" placeholder="Guests" id="guestSize" required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">
                            ${price}<i className="ri-close-line"></i> 1 person
                        </h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Service charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <span>${totalCost}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
                    Book Now
                </Button>
            </div>
        </div>
    );
};

export default Booking;
