import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../app/pages/HomePage/HomePage";

// import Dashboard from "../app/pages/Dashboard/Dashboard";
// import LandingPage from "../app/pages/LandingPage/LandingPage";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact>
          <Route path="/" exact element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
