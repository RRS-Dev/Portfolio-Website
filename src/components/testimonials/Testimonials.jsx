import React from 'react'
import './Testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVT1,
    name:'John Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, minima. Provident eius modi iure, quam nulla esse assumenda omnis quas, dicta error asperiores cum consequatur! Officia aperiam dicta numquam eligendi magnam, unde eos ratione eum omnis temporibus asperiores, exercitationem repellat.'
  },
  {
    avatar:AVT2,
    name:'Hand of the KING',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, minima. Provident eius modi iure, quam nulla esse assumenda omnis quas, dicta error asperiores cum consequatur! Officia aperiam dicta numquam eligendi magnam, unde eos ratione eum omnis temporibus asperiores, exercitationem repellat.'
  },
  {
    avatar:AVT3,
    name:'RipHunter',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, minima. Provident eius modi iure, quam nulla esse assumenda omnis quas, dicta error asperiores cum consequatur! Officia aperiam dicta numquam eligendi magnam, unde eos ratione eum omnis temporibus asperiores, exercitationem repellat.'
  },
  {
    avatar:AVT4,
    name:'Madra Uchiha',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, minima. Provident eius modi iure, quam nulla esse assumenda omnis quas, dicta error asperiores cum consequatur! Officia aperiam dicta numquam eligendi magnam, unde eos ratione eum omnis temporibus asperiores, exercitationem repellat.'
  }
]

const Testimonials = () => {

  SwiperCore.use([Autoplay]);
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

    <Swiper className="container testimonials__container" 
    autoplay={{ delay: 3000 }}
     // install Swiper modules
     modules={[Pagination, A11y]}
     spaceBetween={50}
     slidesPerView={1} 
     pagination={{ clickable: true }}
    >
      {
        data.map(({avatar, name, review,}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
        <div className="client__avatar">
          <img src={avatar} alt="Avatar 1" />
        </div>  
          <h5 className='client__name'>{name}</h5>
          <small className="client__review">
            {review}
          </small>
      </SwiperSlide>
          )
        })
      }
    </Swiper>
    </section>
  )
}

export default Testimonials