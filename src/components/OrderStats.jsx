import React, { useEffect } from "react";
import { useOrders } from "../context/FoodDeliveryContext";
import { getOrderAnalyticsForQuestion5 } from "../questions/question5";

const OrderStats = () => {
  const { orders } = useOrders();
  const analytics = getOrderAnalyticsForQuestion5(orders);

  useEffect(() => {
    window.appState = {
      totalOrders: analytics.totalValidOrders,
      deliveredOrders: analytics.deliveredOrders,
      cancelledOrders: analytics.cancelledOrders,
    };
  }, [analytics.totalValidOrders, analytics.deliveredOrders, analytics.cancelledOrders]);

  if (!orders.length) return <h3 data-testid="no-stats">No orders available</h3>;

  return (
    <div className="movie-stats fade-in" data-testid="stats-page">
      <h2>Orders Analytics Dashboard</h2>
      <p data-testid="total-orders">total oreders:{analytics.totalValidOrders}</p>
      <p data-testid="delivered-orders">delivorders:{analytics.deliveredOrders}</p>
      <p data-testid="cancelled-orders">cancelledorders:{analytics.cancelledOrders}</p>
    </div>
  );
};

export default OrderStats;
