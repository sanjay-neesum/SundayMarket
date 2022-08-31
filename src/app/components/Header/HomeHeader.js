import React from "react";
import "./Header.scss";

const HomeHeader = () => {
  return (
    <div className="home-header">
      <div className="container d-flex align-items-center">
        <div>
          <img src={require("../../../img/logo.png")} alt="logo" />
        </div>
        <div className="logo-name">SundayMarket</div>
      </div>
    </div>
  );
};

export default HomeHeader;
