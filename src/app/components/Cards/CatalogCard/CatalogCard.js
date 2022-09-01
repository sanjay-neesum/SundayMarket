import React from "react";
import "./CatalogCard.scss";

const CatalogCard = ({ title, color }) => {
  return (
    <div className="catalogcard">
      <div className="card" style={{ backgroundColor: color }}>
        <div className="cat-title">{title}</div>
      </div>
    </div>
  );
};

export default CatalogCard;
