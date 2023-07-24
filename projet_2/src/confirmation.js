import React from 'react';
import "./jewelry.css";
import Button from 'react-bootstrap/Button';

const Confirmation = () => {
  return (
    <div>
      <h2>Order Confirmed!</h2>
      <p>Your order has been successfully confirmed.</p>
      <a href="/">       
                    <Button className="returnBttn" >Return Home</Button>
     </a>
    </div>
  );
};

export default Confirmation;
