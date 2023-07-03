import React from 'react';
import './styles.css'; // Import the CSS file
import ChatBox from './ChatBox'; 
import { useState } from 'react';




const ContactUs = () => {
   
   const [isChatOpen, setIsChatOpen] = useState(false);

   const handleOpenChat = () => {
      setIsChatOpen(true);
   };
  
  const handleCloseChat = () => {
      setIsChatOpen(false);
  }; 
  return (
    <div className="contact-us-container">
      <div className="contact-us-info">
        <div className="contact-us-item">
          <h2>Address</h2>
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="contact-us-item">
          <h2>Opening Hours</h2>
          <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 2:00 PM</p>
        </div>
        <div className="contact-us-item">
          <h2>Telephone</h2>
          <p>Phone: +123456789</p>
        </div>
      </div>
      <div className="contact-us-sidebar">
        <h4>Are you a jewelry enthusiast wanting to talk and learn more about this fascinating universe? Join our community group chat.</h4>
        <button onClick={handleOpenChat}>Join chat</button>
      </div>
      <ChatBox isOpen={isChatOpen} onClose={handleCloseChat} />
    </div>
  );
};

export default ContactUs;
