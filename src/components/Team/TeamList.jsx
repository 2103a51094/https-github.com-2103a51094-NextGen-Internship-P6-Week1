import React from 'react'
import Slider from 'react-slick'
import SahasraIyer from '../../assets/images/Sahasra-Iyer.jpg'
import AbhiIyer from '../../assets/images/Abhi-Iyer.jpg'
import KarthikNaidu from '../../assets/images/Karthik-Naidu.jpg'
import ChandrikaRao from '../../assets/images/Chandrika-Rao.jpg'
import AineshSingh from '../../assets/images/Ainesh-Singh.jpg'

const TeamList = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {/* Team Member 1 */}
            <div className="team-member py-4 px-3">
                <img src={SahasraIyer} className="w-50 h-50 rounded-circle" alt="Sahasra Iyer" />
                <h5 className="mt-3">Sahasra Iyer</h5>
                <p className="role">CEO</p>
                <p className="favorite-destination">Favorite Destination: Bali</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="team-member py-4 px-3">
                <img src={AbhiIyer} className="w-50 h-50 rounded-circle" alt="Abhi Iyer" />
                <h5 className="mt-3">Abhi Iyer</h5>
                <p className="role">COO</p>
                <p className="favorite-destination">Favorite Destination: Paris</p>
            </div>

            {/* Team Member 3 */}
            <div className="team-member py-4 px-3">
                <img src={KarthikNaidu} className="w-50 h-50 rounded-circle" alt="Karthik Naidu" />
                <h5 className="mt-3">Karthik Naidu</h5>
                <p className="role">Marketing Head</p>
                <p className="favorite-destination">Favorite Destination: Tokyo</p>
            </div>

            {/* Team Member 4 */}
            <div className="team-member py-4 px-3">
                <img src={ChandrikaRao} className="w-50 h-50 rounded-circle" alt="Chandrika Rao" />
                <h5 className="mt-3">Chandrika Rao</h5>
                <p className="role">Travel Consultant</p>
                <p className="favorite-destination">Favorite Destination: New York</p>
            </div>

            {/* Team Member 5 */}
            <div className="team-member py-4 px-3">
                <img src={AineshSingh} className="w-50 h-50 rounded-circle" alt="Ainesh Singh" />
                <h5 className="mt-3">Ainesh Singh</h5>
                <p className="role">Customer Service</p>
                <p className="favorite-destination">Favorite Destination: Sydney</p>
            </div>
        </Slider>
    );
}

export default TeamList;
