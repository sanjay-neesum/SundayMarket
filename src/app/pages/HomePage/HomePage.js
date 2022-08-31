import React from "react";
import "./Homepage.scss";
import Slider from "react-slick";

import BannerCard from "../../components/Cards/BannerCard/BannerCards";

import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import TuneIcon from "@mui/icons-material/Tune";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Homepage = () => {
  return (
    <>
      <div className="homepage-section">
        {/* Header Mobile */}

        <div className="home-header-top d-flex">
          <div className="icon">
            <FmdGoodRoundedIcon fontSize="medium" />
          </div>
          <div className="details">
            <div className="now">Now</div>
            <div className="address">
              10 Wells Close, Chippenham...
              <ArrowDropDownIcon />
            </div>
          </div>
          <div className="hamburger">
            <MenuIcon />
          </div>
        </div>
        <div className="home-header-bottom">
          <button className="delivery-btn">Delivery</button>
          <button className="pickup-btn">Pickup</button>
        </div>

        <div className="search-section">
          <div className="search">
            <span>
              <SearchSharpIcon />
            </span>
            <input type="search" placeholder="Search" />
          </div>
          <div className="filter">
            <TuneIcon color="black" />
          </div>
        </div>

        <Slider {...settings}>
          <div>
            <BannerCard
              discount="15% discount"
              title="Special Sales"
              subtitle="ONLY THIS WEEK"
            />
          </div>
          <div>
            <BannerCard
              discount="15% discount"
              title="Special Sales"
              subtitle="ONLY THIS WEEK"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Homepage;
