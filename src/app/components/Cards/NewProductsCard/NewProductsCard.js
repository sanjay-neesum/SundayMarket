import React from "react";
import "./NewProductsCard.scss";

const NewProductsCard = ({ title, price, weight, shop }) => {
  return (
    <div class="newproducts">
      <div className="card">
        <div className="product-image">
          <img
            src={require("../../../../img/new-product-1.jpg")}
            className="new-product"
            alt="img"
          />
        </div>
        <div className="ptitle">{title}</div>
        <div className="details d-flex ">
          <div className="price">£{price}</div>
          <span>•</span>
          <div className="weight">{weight}</div>
        </div>
        <div className="shop">{shop}</div>
      </div>
    </div>
  );
};

export default NewProductsCard;
