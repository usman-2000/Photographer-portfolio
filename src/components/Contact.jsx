import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="contactform">
      <div className="heading">
        <h3>Contact Form</h3>
      </div>
      <div className="form">
        <div className="about-form">
          <div className="about-form-inp-container">
          <label htmlfor="Name">Name</label> <br />
          <input type="text" name="Name" className="about-form-input" placeholder=" ..." />
          </div> 
          <br />
          <div className="about-form-inp-container">
          <label htmlfor="email">Email</label> <br />
          <input
            type="email"
            name="email"
            className="about-form-input"
            placeholder=" ...@example.com"
          />
          </div>          
          <br />
          <div className="about-form-inp-container">
          <label htmlfor="Subject">Subject</label> <br />
          <input
            type="text"
            name="Subject"
            className="about-form-input"
            placeholder=" ..."
          />
          </div>
          <br />
          <div className="btn-container-about">
              <button className="btn-send">Send</button>
              <button className="btn-save">Save Draft</button>
            </div>
        </div>
        <div className="message-form">
          <div className="message-form-input-container">
          <label htmlfor="Message">Message</label> <br />
          <textarea
            name="message"
            className="form-control"
            id="message"
            cols={30}
            rows={4}
            placeholder="Your Message..."
          />
          </div>
          <div className="btn-container-message">
              <button className="btn-send">Send</button>
              <button className="btn-save">Save Draft</button>
            </div>        
        </div>
      </div>
    </div>
  );
}

export default Contact;
