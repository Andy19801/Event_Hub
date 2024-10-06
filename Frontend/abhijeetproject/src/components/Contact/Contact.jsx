import React from 'react';
import './Contact.css'; // Make sure the CSS file is named 'Contact.css' and is in the same directory

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        Contact <span>Us</span>
      </h1>
      
      <form action="">
        <div className="inputBox">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="inputBox">
        <input type="tel" placeholder="Phone Number" required pattern="[0-9]{10}" />
          <input type="text" placeholder="Subject" />
        </div>
        <textarea 
          name="message" 
          placeholder="Your message" 
          id="message" 
          cols="30" 
          rows="10" 
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;