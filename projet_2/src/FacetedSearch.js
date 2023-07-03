import React, { useState } from 'react';

const FacetedSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faceted-search">
      <button className="faceted-search-toggle" onClick={toggleDropdown}>
        Jewelry
      </button>
      {isOpen && (
        <div className="faceted-search-options">
          <div className="facet">
            <h4>Bracelets</h4>
            <div>
              <input type="checkbox" id="material1" />
              <label htmlFor="material1">Material 1</label>
            </div>
            <div>
              <input type="checkbox" id="material2" />
              <label htmlFor="material2">Material 2</label>
            </div>
            {/* Add additional material options as needed */}
            <div>
              <input type="checkbox" id="style1" />
              <label htmlFor="style1">Style 1</label>
            </div>
            <div>
              <input type="checkbox" id="style2" />
              <label htmlFor="style2">Style 2</label>
            </div>
            {/* Add additional style options as needed */}
          </div>
          <div className="facet">
            <h4>Necklaces</h4>
            <div>
              <input type="checkbox" id="m1" />
              <label htmlFor="m1">Material 1</label>
            </div>
            <div>
              <input type="checkbox" id="m2" />
              <label htmlFor="m2">Material 2</label>
            </div>
            {/* Add additional material options as needed */}
            <div>
              <input type="checkbox" id="s1" />
              <label htmlFor="s1">Style 1</label>
            </div>
            <div>
              <input type="checkbox" id="s2" />
              <label htmlFor="s">Style 2</label>
            </div>
            {/* Material and style options for necklaces */}
          </div>
          <div className="facet">
            <h4>Rings</h4>
            <div>
              <input type="checkbox" id="ma1" />
              <label htmlFor="ma1">Material 1</label>
            </div>
            <div>
              <input type="checkbox" id="ma2" />
              <label htmlFor="ma2">Material 2</label>
            </div>
            {/* Add additional material options as needed */}
            <div>
              <input type="checkbox" id="sty1" />
              <label htmlFor="sty1">Style 1</label>
            </div>
            <div>
              <input type="checkbox" id="sty2" />
              <label htmlFor="sty2">Style 2</label>
            </div>
            {/* Material and style options for rings */}
          </div>
          <div className="facet">
            <h4>Buckles</h4>
            <div>
              <input type="checkbox" id="mat1" />
              <label htmlFor="mat1">Material 1</label>
            </div>
            <div>
              <input type="checkbox" id="mat2" />
              <label htmlFor="mat2">Material 2</label>
            </div>
            {/* Add additional material options as needed */}
            <div>
              <input type="checkbox" id="styl1" />
              <label htmlFor="styl1">Style 1</label>
            </div>
            <div>
              <input type="checkbox" id="styl2" />
              <label htmlFor="styl2">Style 2</label>
            </div>
            {/* Material and style options for buckles */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FacetedSearch;
