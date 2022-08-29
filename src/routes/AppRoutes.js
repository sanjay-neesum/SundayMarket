import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../app/pages/Dashboard/Dashboard";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact>
          <Route path="/" exact element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
