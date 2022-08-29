import React from "react";
import "./Header.scss";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="container header-section">
      <div className="logo-section">SundayMarket</div>
      <div className="header-links">
        <ul>
          <a href="/#">
            <li>Dashboard</li>
          </a>
          <a href="/#">
            <li>Products</li>
          </a>
          <a href="/#">
            <li>
              Orders
              <button className="badge-icon">2</button>
            </li>
          </a>
        </ul>
      </div>
      <div className="profile-links">
        <div>
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon color="action" />
          </Badge>
        </div>
        <div className="user-profile">
          <div>
            <Avatar alt="user" src="/static/images/avatar/1.jpg" />
          </div>
          <div>
            User Name
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
