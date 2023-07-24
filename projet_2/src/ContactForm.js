import React, { useState } from 'react';
import styled from 'styled-components';
import ChatBox from './ChatBox';

const FormStyle = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .joinBttn{
    background-color: #000;
    color: white;
    display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  }
`;

export default function ContactForm() {
    const [isChatOpen, setIsChatOpen] = useState(false);


    const handleOpenChat = () => {
       setIsChatOpen(true);
    };
  
   const handleCloseChat = () => {
       setIsChatOpen(false);
   };
 
 
  return (
    <>
      <FormStyle>
       
        <div className="form-group">
          <h2>Are you a jewelry enthusiast wanting to talk and learn more about this fascinating universe? Join our community group chat.</h2>
         
        </div>
        <button  className="joinBttn"onClick={handleOpenChat}>Join chat</button>
      
        <ChatBox isOpen={isChatOpen} onClose={handleCloseChat} />

      </FormStyle>
    </>
  );
}