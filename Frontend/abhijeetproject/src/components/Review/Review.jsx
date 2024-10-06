import React from 'react';
import './Review.css'; 
import image2 from '../../asserts/person2.jpeg';
import image3 from '../../asserts/person1.jpg';
import image4 from '../../asserts/person3.jpg';

const Review = () => {
  return (
    <div className="rev_cont" id="rev">
      <h1> User Review </h1>

      <div className="inner">
        <div className="col">
          <div className="foto">
            <img src={image2} alt="Bishal Dey" className="" />
          </div>
          <h3>Bishal Dey</h3>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>The event management team did a phenomenal job with our recent event. Their comprehensive planning and coordination ensured that everything ran smoothly from start to finish. Communication was excellent, and their creative approach brought our vision to life in ways we hadn’t imagined. Highly recommended for anyone looking to host a memorable event!</p>
        </div>

        <div className="col">
          <div className="foto">
            <img src={image3} alt="Shreya Singh" className="" />
          </div>
          <h3>Shreya Singh</h3>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
          </div>
          <p>The event management service was outstanding in organizing our corporate event. Their attention to detail in planning and coordination ensured that every aspect, from the venue setup to the catering, was executed flawlessly. Their communication was clear and timely, making the entire process smooth and stress-free. The creative ideas they brought to the table, especially in the event décor and entertainment, truly elevated the experience. I highly recommend their services for anyone seeking a professional and innovative event management team.</p>
        </div>

        <div className="col">
          <div className="foto">
            <img src={image4} alt="Ashutosh Paul" className="" />
          </div>
          <h3>Ashutosh Paul</h3>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>I was thoroughly impressed with the event management service for our wedding. The team's meticulous planning and coordination meant that everything was perfectly organized and on schedule. Their proactive communication kept us well-informed throughout the planning process, which was incredibly reassuring. The creative touches they added, from the unique theme to the personalized décor, made our event truly special. Their ability to handle unexpected challenges with ease was remarkable. I would definitely recommend their services for any high-profile or personal events.</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
