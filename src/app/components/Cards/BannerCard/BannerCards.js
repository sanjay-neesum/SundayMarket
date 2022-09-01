import React from "react";
import "./BannerCard.scss";

const BannerCards = ({ discount, title, subtitle, color, image }) => {
  return (
    <div className="bannerCard-Section">
      <div className="card" style={{ backgroundColor: color }}>
        <div className="details">
          <div className="discount">{discount}</div>
          <div className="headings">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCards;
