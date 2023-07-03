import React from 'react';
import './styles.css'; // Import the CSS file

const ChatBox = ({ isOpen, onClose }) => {
  const messages = [
    { sender: 'User', message: 'do people collect vintage jewelry in the group?' },
    { sender: 'Person1', message: 'I do! I have a large collection.' },
    { sender: 'Person2', message: 'Personally I prefer the new models'},
    { sender: 'Person3', message: 'I do! you can find many in the klm store' },
  
  ];

  return (
    <div className={`chat-box ${isOpen ? 'open' : ''}`}>
      <div className="chat-header">
        <h2>Chat Box</h2>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="chat-content">
        {messages.map((message, index) => (
          <div className="chat-message" key={index}>
            <span className="sender">{message.sender}: </span>
            <span className="message">{message.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
