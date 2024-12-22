import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-01.jpg'
import ava02 from '../../assets/images/ava-02.jpg'
import ava03 from '../../assets/images/ava-03.jpg'
import ava04 from '../../assets/images/ava-04.jpg'
import ava05 from '../../assets/images/ava-05.jpg'
const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }  ,
        },
    ],
    };
  return (
 <Slider {...settings}>
<div className="testimonial py-4 px-3">
<p>"This was hands down the best travel experience I’ve had! The guides were not only friendly but also very knowledgeable, making each destination feel special. I felt completely taken care of from start to finish. I’ll definitely be booking with them again!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava01} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>John Doe</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"I traveled with my family, and I can honestly say it was the most enjoyable trip we’ve had in years. From the booking process to the last day of the tour, everything was perfect. The tour guides were friendly and informative. Definitely worth it!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
    <p>Frequent Traveller</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"I had an amazing experience with this travel agency. Their tour guides are extremely knowledgeable, and the customized trip was perfect for me. I will definitely use their services again for my future trips!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Dharini</h6>
    <p> Happy Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"The best part about this agency is their attention to detail and the way they make sure you get the most out of your vacation. I especially loved the personalized itinerary that catered to my interests. Highly recommend!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava04} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Advithi</h6>
    <p>Adventure Seeker</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"As someone who loves exploring new places, I've booked many tours in the past, but this was by far the most seamless and enjoyable experience. The team was professional, and everything was well-organized. A truly memorable trip!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava05} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Surya</h6>
    <p>Satisfied Client</p>
</div>
</div>
</div>
 </Slider>
  )
}

export default Testimonials
