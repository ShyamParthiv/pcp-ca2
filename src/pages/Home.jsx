import React from "react";

import OrderList from "../components/OrderList";
import OrderForm from "./OrderForm";

const Home = () => (
  <div className="app-container" data-testid="home-page">
    <h1 className="main-title" data-testid="app-title">
      Food Delivery Orders
    </h1>
    <OrderForm />
    <OrderList />
  </div>
);

export default Home;
