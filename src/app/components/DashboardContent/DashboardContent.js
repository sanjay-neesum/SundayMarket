import React from "react";
import "./DashboardContent.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DashboardTable from "./DashboardTable";

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

        <div className="row">
          <div class="col items-card">
            <div className="card-1">
              <div className="card-title">Total items</div>
              <div className="card-number">150</div>
            </div>
          </div>
          <div class="col items-card">
            <div className="card-2 card-1">
              <div className="card-title">Total orders</div>
              <div className="card-number">164</div>
            </div>
          </div>
          <div class="col items-card">
            <div className="card-3 card-1">
              <div className="card-title">
                <div>Revenue</div>
                <div>
                  <a href="/#">See details</a>
                </div>
              </div>
              <div className="card-number">£3,736</div>
            </div>
          </div>
          <div class="col items-card">
            <div className="card-4 card-1">
              <div className="card-title">Viewers</div>
              <div className="card-number">150</div>
            </div>
          </div>
          <div class="col items-card">
            <div className="card-5 card-1">
              <div className="card-title">Taring</div>
              <div className="card-number">
                4.5
                <span> of 150 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashboardTable />
    </div>
  );
};

export default DashboardContent;
