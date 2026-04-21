import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import OrderStats from "../components/OrderStats";
import Favorites from "../pages/Favorites";
import OrderDetails from "../pages/OrderDetails";
import FilterOrders from "../pages/FilterOrders";
import OrderStatusLogic from "../pages/OrderStatusLogic";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/stats" element={<OrderStats />} />
          <Route path="/orders" element={<OrderStatusLogic />} />
          <Route path="/filter" element={<FilterOrders />} />

          <Route path="/orders/:id" element={<OrderDetails />} />

          {/* Fallback */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
