import React from 'react';
import './styles.css';
import homepage from './homepage.jpg'
import home from './home.jpg'
import homee from './homee.jpg'

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to our site dedicated to the world of jewelry, where elegance and refinement come to life!</h1>
      <h2>Best sellers</h2>
      <div className="image-container">
        <img src={homepage} alt="Article 1" className="article-image" />
        <img src={home} alt="Article 2" className="article-image" />
        <img src={homee} alt="Article 3" className="article-image" />
      </div>
      <footer className="page-footer">
    <p>© 2023 JewelryZ.</p>
  </footer>
    </div>
  );
};
export default Home;

