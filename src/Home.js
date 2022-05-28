import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71-uTDSGAwL._SX3000_.jpg"
          alt="banner_image"
        />
        <div className="home__row">
          <Product
            title="Cracking the Coding Interview"
            price="599"
            image="https://m.media-amazon.com/images/I/61oRH4y27jL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            title="Xbox Series S"
            price="34999"
            image="https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung Galaxy S20 FE 5G"
            price="36990"
            image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            title="JBL Pulse 4, Wireless Portable Bluetooth Speaker"
            price="17999"
            image="https://m.media-amazon.com/images/I/61HXIajZwhL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            title="Dell Alienware x15 R1"
            price="269499"
            image="https://m.media-amazon.com/images/I/61KL3s4A8QL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor"
            price="159999"
            image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
