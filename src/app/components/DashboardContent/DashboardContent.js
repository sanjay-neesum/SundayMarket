import React from "react";
import "./DashboardContent.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DashboardContent = () => {
  return (
    <div className="dashboard-content-section">
      <div className="container">
        <div className="heading-section">
          <div className="title">Dashboard</div>
          <div className="button-section">
            <button>
              Last 30 days
              <ArrowDropDownIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
