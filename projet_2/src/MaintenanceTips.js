import React from 'react';
import './styles.css'; // Import the CSS file

const MaintenanceTips = () => {
  return (
    <div className="maintenance-tips-container">
      <h1 className="maintenance-tips-heading">Maintenance tips</h1>
      
      <ul className="maintenance-tips-list">
        <li>-Appropriate cleaning methods for each material</li>
        <li> -Use of specific cleaning products</li>
        <li>-Precautions to be taken to avoid damage</li>
      </ul>

     
      <div className="maintenance-tips-video">
        <h2>How to Maintain Jewelry</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kZjEp5p4QbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <footer className="page-footer">
        <p>© 2023 JewelryZ.</p>
      </footer>
    </div>
  );
};

export default MaintenanceTips;



