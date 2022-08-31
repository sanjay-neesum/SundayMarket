import React from "react";
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="col-md-6">
          <div className="display-heading">
            Buy and sell local produces instantly
          </div>
          <div className="paragraph">
            SundayMarket is a sustainable e-commerce reimagimed. Be the first to
            join a united community dedicated to simplifying local commerce.
          </div>
          <div className="button-section">
            <div class="input-group input-group-lg">
              <input
                type="email"
                class="form-control"
                placeholder="E-mail"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
              <span class="input-group-text" id="inputGroup-sizing-lg">
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-Img">
        <img src={require("../../../img/hero-bg.png")} alt="logo" />
      </div>
    </div>
  );
};

export default HeroSection;
