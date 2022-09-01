import React from "react";
import "./OurShop.scss";

const OurShop = ({ title }) => {
  return (
    <div className="our-shop">
      <div className="card-container">
        <img
          src={require("../../../../img/shop-1.jpg")}
          className="shop"
          alt="img"
        />
        <div className="shop-title">{title}</div>
        <div className="details">
            
        </div>
      </div>
    </div>
  );
};

export default OurShop;
