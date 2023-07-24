import React from "react";
import { data } from "./BestSellers";
import homepage from './homepage.jpg'
import home from './home.jpg'
import homee from './homee.jpg'
import JewelryItems from "./JewelryItems";
import { Carousel } from "react-bootstrap";
import "./HomeStyles.css";

function Home() {
  return (
    <div className="home">
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img
            className="carousel-image"
            src={home}
            alt="Carousel Image 1"
          />
          <Carousel.Caption className="carousel-caption">
            <div className="carousel-content">
              <h3>Welcome to our site dedicated to the world of jewelry, where elegance and refinement come to life!</h3>
              <p>Our site offers an extensive collection of carefully selected jewelry, ranging from sparkling rings to sumptuous necklaces, from elegant earrings to charming bracelets. Whether you're looking for jewelry for a special occasion or just to treat yourself, we've got you covered.
</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={homee}
            alt="Carousel Image 2"
          />
          <Carousel.Caption className="carousel-caption">
            <div className="carousel-content">
              <h3>Welcome to our site dedicated to the world of jewelry, where elegance and refinement come to life! </h3>
              <p>Some description about Carousel Item 1</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className="homeTitle">Best sellers</h1>
      <div className="JewelryList">
        {data.map((jewelryItems, key) => {
          return (
            <JewelryItems
              key={key}
              image={jewelryItems.image}
              name={jewelryItems.name}
              price={jewelryItems.price}
             
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
