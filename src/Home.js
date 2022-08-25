import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/JanArt/Gateway/MainBanner_1500_300_1701.jpg"
        />

        <div className="home__row">
          <Product
            id={1234}
            title="The Lean Start"
            price={19.99}
            rating={5}
            image="https://static01.nyt.com/images/2021/04/21/books/review/Smith2/Smith2-superJumbo.jpg?quality=75&auto=webp"
          />
          <Product
            id={12345}
            title="Iphone"
            price={1999.99}
            rating={1}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=441&hei=529&fmt=jpeg&qlt=95&.v=1567022219953"
          />
          <Product
            id={123456}
            title="Apple watch"
            price={100.99}
            rating={3}
            image="https://www.apple.com/v/apple-watch-nike/ab/images/compare/compare_s7__dzu880ampqwm_medium.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={1234567}
            title="i-Mac"
            price={1299.99}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-pink-selection-hero-202104?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1617492407000"
          />
          <Product
            id={12345678}
            title="AirPods"
            price={199.99}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1591634795000"
          />
        </div>
        <div className="home__row">
          <Product
            id={123456789}
            title="TV"
            price={1199.99}
            rating={5}
            image="https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3-eu-west-1.amazonaws.com/accounts-media/SHRP/DAM/origin/a3b0c3c8-6ce9-11ea-aeea-becc10303f49.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
