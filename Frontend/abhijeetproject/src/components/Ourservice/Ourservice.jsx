import React from 'react';
import './Ourservice.css'; // Ensure this path is correct

const Ourservice = () => {
  return (
    <div className="services" id="services">
      <h1> <span> Our Services</span></h1>
      <div className="cont2">
        <div className="box">
          <i className="fas fa-map-marker-alt fa-3x"></i>
          <h4>Venue Selection</h4>
          <p>We help you choose the perfect venue for your event, tailored to your needs and preferences.</p>
        </div>

        <div className="box">
          <i className="fas fa-envelope fa-3x"></i>
          <h4>Invitation Card</h4>
          <p>Design and send beautiful invitation cards to your guests, ensuring they receive all the event details.</p>
        </div>

        <div className="box">
          <i className="fas fa-music fa-3x"></i>
          <h4>Entertainment</h4>
          <p>Offer a range of entertainment options to keep your guests engaged and delighted throughout the event.</p>
        </div>

        <div className="box">
          <i className="fas fa-utensils fa-3x"></i>
          <h4>Food and Drinks</h4>
          <p>Provide a variety of delicious food and drinks to suit every taste and preference at your event.</p>
        </div>

        <div className="box">
          <i className="fas fa-photo-video fa-3x"></i>
          <h4>Photos and Videos</h4>
          <p>Capture all the special moments of your event with professional photo and video services.</p>
        </div>

        <div className="box">
          <i className="fas fa-birthday-cake fa-3x"></i>
          <h4>Custom Food</h4>
          <p>Design and prepare custom food options, including cakes and specialty dishes, to fit your event's theme.</p>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
