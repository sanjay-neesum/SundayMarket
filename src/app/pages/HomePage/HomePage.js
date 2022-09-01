import React from "react";
import "./Homepage.scss";
import Slider from "react-slick";

import BannerCard from "../../components/Cards/BannerCard/BannerCards";

import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import TuneIcon from "@mui/icons-material/Tune";
import CatalogCard from "../../components/Cards/CatalogCard/CatalogCard";
import NewProductsCard from "../../components/Cards/NewProductsCard/NewProductsCard";
import OurShop from "../../components/Cards/OurShop/OurShop";

const bannersettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1.1,
  slidesToScroll: 1,
};

const catsettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.15,
  slideToScroll: 1,
  adaptiveHeight: false,
  touchMove: true,
};

const newproductssettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.9,
  slideToScroll: 1,
  touchMove: true,
  adaptiveHeight: true,
};

const shopsettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.9,
  slideToScroll: 1,
  touchMove: true,
  adaptiveHeight: true,
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

        <Slider {...bannersettings}>
          <div>
            <BannerCard
              discount="15% discount"
              title="Special Sales"
              subtitle="ONLY THIS WEEK"
              color="#000"
            />
          </div>
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
              color="red"
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

        <div className="catalogcard-section">
          <div className="title">Catalog</div>
          <Slider {...catsettings}>
            <div className="col">
              <CatalogCard title="Fruits" color="red" />
            </div>
            <div className="col">
              <CatalogCard title="Vegetable" />
            </div>
            <div className="col">
              <CatalogCard title="Dairy" color="#000" />
            </div>
            <div className="col">
              <CatalogCard title="Fruits" color="red" />
            </div>
            <div className="col">
              <CatalogCard title="Vegetable" />
            </div>
            <div className="col">
              <CatalogCard title="Dairy" color="#000" />
            </div>
            <div className="col">
              <CatalogCard title="Fruits" color="red" />
            </div>
            <div className="col">
              <CatalogCard title="Vegetable" />
            </div>
            <div className="col">
              <CatalogCard title="Dairy" color="#000" />
            </div>
          </Slider>
        </div>

        <div className="newproducts-section">
          <div className="title">New Products</div>
          <Slider {...newproductssettings}>
            <div className="col">
              <NewProductsCard
                title="British Fresh Strawberries"
                price="3.00"
                weight="400g"
                shop="Rawstone farm shop"
              />
            </div>
            <div className="col">
              <NewProductsCard
                title="Broccoli"
                price="1.50"
                weight="400g"
                shop="Wiltshire fish shop"
              />
            </div>
            <div className="col">
              <NewProductsCard
                title="British apple"
                price="2.00"
                weight="400g"
                shop="Madjeston milk shop"
              />
            </div>
            <div className="col">
              <NewProductsCard
                title="British Fresh Strawberries"
                price="3.00"
                weight="400g"
                shop="Rawstone farm shop"
              />
            </div>
            <div className="col">
              <NewProductsCard
                title="Broccoli"
                price="1.50"
                weight="400g"
                shop="Wiltshire fish shop"
              />
            </div>
            <div className="col">
              <NewProductsCard
                title="British apple"
                price="2.00"
                weight="400g"
                shop="Madjeston milk shop"
              />
            </div>
          </Slider>
        </div>

        <div className="our-shop-section">
          <div className="title">Our shops</div>
          <Slider {...shopsettings}>
            <div className="col">
              <OurShop title="Rawstone farm shop" />
            </div>
            <div className="col">
              <OurShop />
            </div>
            <div className="col">
              <OurShop />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Homepage;
