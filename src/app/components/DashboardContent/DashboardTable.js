import React from "react";
import "./DashboardTable.scss";

const DashboardTable = () => {
  return (
    <div className="container">
      <div className="heading-section">
        <div className="title">Profitable items</div>
      </div>
      <div className="dashboard-table">
        <table>
          <th>Number</th>
          <th>Product name</th>
          <th>Views</th>
          <th>Number of orders</th>
          <th className="last-child">Revenue</th>
          <tr>
            <td>#001</td>
            <td>
              <img
                src={require("../../../img/food-1.jpg")}
                className="food"
                alt="img"
              />
              <span>British Fresh Strawberries</span>
            </td>
            <td>35</td>
            <td>12</td>
            <td>£83.00</td>
          </tr>
          <tr>
            <td>#002</td>
            <td>
              <img
                src={require("../../../img/food-4.jpg")}
                className="food"
                alt="img"
              />
              <span>Broccoli</span>
            </td>
            <td>52</td>
            <td>32</td>
            <td>£57.00</td>
          </tr>
          <tr>
            <td>#003</td>
            <td>
              <img
                src={require("../../../img/food-3.jpg")}
                className="food"
                alt="img"
              />
              <span>British apple 4s</span>
            </td>
            <td>25</td>
            <td>15</td>
            <td>£62.00</td>
          </tr>
          <tr>
            <td>#005</td>
            <td>
              <img
                src={require("../../../img/food-5.jpg")}
                className="food"
                alt="img"
              />
              <span>Butter squash</span>
            </td>
            <td>84</td>
            <td>32</td>
            <td>£98.00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
