import React from 'react';
import './About.css'; 
import image from '../../asserts/e3.jpeg';

const About = () => (
  <div className="about" id="about">
    <h1 className="about_h"> About <span>us</span></h1>

    <div className="row">
      <div className="img">
      <img src={image} alt="About Us" />
      </div>
      <div className="content">
        <h1>Why you should choose us <span>...???</span></h1>
        <p>
          We are committed to making your event extraordinary. With our expertise in venue selection, personalized invitations, and top-notch entertainment, we ensure every detail is perfect. Our culinary team offers diverse food and drink options tailored to your tastes. We capture your event's essence through professional photos and videos, creating lasting memories. Our custom food services and unique event attractions are designed to impress and delight your guests. Choose us to experience seamless planning, innovative ideas, and a dedicated team that brings your vision to life, making your event unforgettable.</p>
      </div>
    </div>
  </div>
);

export default About;
