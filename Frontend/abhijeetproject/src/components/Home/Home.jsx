import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import About from '../About/About';
import Ourservice from '../Ourservice/Ourservice';
import Gallary from '../Gallary/Gallary';
import Review from '../Review/Review';
import Contact from '../Contact/Contact';

import './Home.css';

const Home = () => {
  return (
    <>
      <div className="cont1">
        <p>
          <u><span>Event</span>Hub</u>
        </p>
        <div className="cont_in" id="home">
          <p>
            to make moments <span>beautiful...</span>
          </p>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide><img src={require('../../asserts/shadi.jpg')} alt="Event 1" /></SwiperSlide>
            <SwiperSlide><img src={require('../../asserts/janeu.jpg')} alt="Event 2" /></SwiperSlide>
            <SwiperSlide><img src={require('../../asserts/e2.jpeg')} alt="Event 3" /></SwiperSlide>
            <SwiperSlide><img src={require('../../asserts/e3.jpeg')} alt="Event 4" /></SwiperSlide>
            <SwiperSlide><img src={require('../../asserts/e4.jpeg')} alt="Event 5" /></SwiperSlide>
            <SwiperSlide><img src={require('../../asserts/e5.jpeg')} alt="Event 6" /></SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Additional sections */}
      <About />
      <Ourservice />
      <Gallary />
      <Review />
      <Contact />
    </>
  );
};

export default Home;
