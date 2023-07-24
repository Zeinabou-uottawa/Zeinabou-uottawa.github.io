import React from 'react';
import "./NavbarStyles.css";
import  logo from "./logo.jpeg";
import { useState } from 'react';
import "./styles.css";







const Navbar = () => {
  
// Initialize the cart state
const [cart, setCart] = useState({
  // Your cart data
  totalQty: 0,
  items: [],
});




  return (
    <nav>
      < img src={logo} width="150" height="100"/>
      <div>
      <ul id="navb">
        <li><a href="/">Home</a>
        </li>
        <li><a href="/jewelry">Jewelry</a>
        </li>
        <li><a href="/maintenance-tips">Maintenance tips</a>
        </li>
        <li><a href="/contact-us">Contact-us</a>
        </li>
      </ul>
      </div>  
    </nav>
  );
};


export default Navbar;
