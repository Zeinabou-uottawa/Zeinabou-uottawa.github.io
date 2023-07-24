import React from 'react';
import './styles.css'; // Import the CSS file
import Button from 'react-bootstrap/Button';

const MaintenanceFr = () => {
  return (
    <div className="maintenance-tips-container">
      <h1 className="maintenance-tips-heading">Conseils d'entretien</h1>
      
      <ul className="maintenance-tips-list">
        <li>-Méthodes de nettoyage appropriées pour chaque matériau</li>
        <li> -Utilisation de produits de nettoyage spécifiques</li>
        <li>-Précautions à prendre pour éviter les dégâts</li>
      </ul>

     
      <div className="maintenance-tips-video">
        <h2>Comment entretenir les bijoux</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kZjEp5p4QbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <a href="/maintenance-tips"><Button className="enBttn" >Version anglaise</Button></a>
      
      <footer className="page-footer">
        <p>© 2023 JewelryZ.</p>
      </footer>
    </div>
  );
};

export default MaintenanceFr;