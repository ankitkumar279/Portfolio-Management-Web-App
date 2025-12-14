import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram 
} from "react-icons/fa";
import "../App.css";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/contact")
      .then((res) => setContactInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-header text-center">
        <h2>Let's Connect</h2>
        <p>Have a project in mind or just want to chat? I'd love to hear from you!</p>
      </div>
      <div className="contact-vertical-container-center">
        <form className="contact-form-box">
          <label>Your Name</label>
          <input type="text" placeholder="John Doe" />

          <label>Email Address</label>
          <input type="email" placeholder="john@example.com" />

          <label>Subject</label>
          <input type="text" placeholder="Project Inquiry" />

          <label>Message</label>
          <textarea placeholder="Your message here..."></textarea>

          <button type="submit">Send</button>
        </form>
        <div className="contact-big-box">

          <div className="info-row">
            <FaEnvelope />
            <span className="label">Mail</span>
            <span className="value">{contactInfo.email}</span>
          </div>

          <div className="info-row">
            <FaPhone />
            <span className="label">Phone</span>
            <span className="value">{contactInfo.phone}</span>
          </div>

          <div className="info-row">
            <FaMapMarkerAlt />
            <span className="label">Location</span>
            <span className="value">{contactInfo.location}</span>
          </div>

          <h3 className="follow-title">FOLLOW ME</h3>

          <div className="social-icons-horizontal">
            <a href="https://github.com/ankitkumar279" target="_blank">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/ankit-kumar-026a2b39a/" target="_blank">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:ankitchahar88@gmail.com">
              <FaEnvelope size={28} />
            </a>
            <a href="https://www.instagram.com/ankitchahar_jaat/" target="_blank">
              <FaInstagram size={28} />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;
