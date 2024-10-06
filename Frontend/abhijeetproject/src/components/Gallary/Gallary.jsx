import React from 'react';
import './Gallary.css'; 
import image10 from '../../asserts/e1.jpeg';
import image11 from '../../asserts/e6.jpg';
import image12 from '../../asserts/e9.jpg';
import image13 from '../../asserts/e10.jpeg';
import image14 from '../../asserts/e11.jpg';
import image15 from '../../asserts/e12.jpg';
import image16 from '../../asserts/e7.jpg';
import image17 from '../../asserts/e13.jpg';

const Gallary = () => {
  return (
    <div className="gal" id="gallery">
      <h1 className="galhead"><span>Our</span> Gallery</h1>

      <div className="galcont">
        <div className="box">
          <img src={image10} alt="Event venue setup with decorations" />
        </div>

        <div className="box">
          <img src={image11} alt="Guests enjoying the event" />
        </div>

        <div className="box">
          <img src={image12} alt="Evening event lighting" />
        </div>

        <div className="box">
          <img src={image13} alt="Event catering setup" />
        </div>

        <div className="box">
          <img src={image14} alt="Entertainment stage setup" />
        </div>

        <div className="box">
          <img src={image15} alt="Group at the event" />
        </div>

        <div className="box">
          <img src={image16} alt="Decorated event hall" />
        </div>

        <div className="box">
          <img src={image17} alt="Event attendees interacting" />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
