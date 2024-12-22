import React from 'react';
import '../styles/tourpackage.css';
import { Card, CardBody } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';

const TourPackageCard = ({ tourPackage }) => {
    const { id, title, category, destinations, price, featured, photo, reviews } = tourPackage;
    const { totalRating, avgRating } = calculateAvgRating(reviews);
    const navigate = useNavigate();

    const handleBookingClick = () => {
        navigate(`/tour-packages/${id}`, { state: { isTourPackage: true } });
    };

    return (
        <div className="tour-package__card">
            <Card>
                <div className="tour-package__img">
                    <img src={photo} alt="tour-package-img" />
                    {featured && <span className="tour-package__featured">Featured</span>}
                </div>
                <CardBody>
                    <div className="tour-package__header">
                        <span className="tour-package__category">
                            <i className="ri-map-pin-line"></i> {category}
                        </span>
                        <span className="tour-package__rating">
                            <i className="ri-star-fill"></i>
                            {avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? 'Not rated' : <span>({reviews.length})</span>}
                        </span>
                    </div>
                    <h5 className="tour-package__title">
                        <Link to={`/tour-packages/${id}`}>{title}</Link>
                    </h5>
                    <div className="tour-package__destinations">
                        <h6>Destinations:</h6>
                        <ul>
                            {destinations.map((dest, index) => (
                                <li key={index}>{dest}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="card__bottom">
                        <h5>${price} <span>/per person</span></h5>
                        <button className="btn booking__btn" onClick={handleBookingClick}>
                            Book Now
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default TourPackageCard;
