import React from 'react';
import "./NavbarStyles.css";
import { useState } from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [showFacetedSearch, setShowFacetedSearch] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');

  const handleJewelsClick = () => {
    setShowFacetedSearch(!showFacetedSearch);
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  const handleStyleChange = (event) => {
    setSelectedStyle(event.target.value);
  };

  const handleSearchClick = () => {
    // Perform search based on selected product, material, and style
   
    console.log(`Product: ${selectedProduct}, Material: ${selectedMaterial}, Style: ${selectedStyle}`);
  };

  return (
    <nav>
      <h1>JewelryZ</h1>
      <div> 
      <ul id="navb">
        <li><a href="/">Home</a>
        </li>
        <li><a href="#" onClick={handleJewelsClick}>
            Jewelry</a>
            {showFacetedSearch && (
            <div className="faceted-search">
              <div className="faceted-search-window">
                <select value={selectedProduct} onChange={handleProductChange}>
                  <option value="">Select Product</option>
                  <option value="bracelets">Bracelets</option>
                  <option value="necklaces">Necklaces</option>
                  <option value="rings">Rings</option>
                  <option value="buckles">Buckles</option>
                </select>
                <select value={selectedMaterial} onChange={handleMaterialChange}>
                  <option value="">Select Material</option>
                  {selectedProduct === 'bracelets' && (
                    <>
                      <option value="gold">Gold</option>
                      <option value="silver">Silver</option>
                    </>
                  )}
                  {selectedProduct === 'necklaces' && (
                    <>
                      <option value="diamond">Diamond</option>
                      <option value="pearl">Pearl</option>
                    </>
                  )}
                  {selectedProduct === 'rings' && (
                    <>
                      <option value="platinum">Platinum</option>
                      <option value="titanium">Titanium</option>
                    </>
                  )}
                  {selectedProduct === 'buckles' && (
                    <>
                      <option value="leather">Leather</option>
                      <option value="steel">Steel</option>
                    </>
                  )}
                </select>
                <select value={selectedStyle} onChange={handleStyleChange}>
                  <option value="">Select Style</option>
                  <option value="classic">Classic</option>
                  <option value="modern">Modern</option>
                  <option value="vintage">Vintage</option>
                </select>
                <button onClick={handleSearchClick}>Search</button>
              </div>
            </div>
          )}
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

