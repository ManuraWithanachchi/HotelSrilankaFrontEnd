import React from "react";
import Slider from "../inc/Slider";
import ProductCardPage from "../inc/ProductCardPage";

function Home() {
  return (
    <div>
      <Slider />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Hotels in Sri Lanka</h4>
              <p>Find the Best Hotels in Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>
      <ProductCardPage />
    </div>
  );
}

export default Home;
