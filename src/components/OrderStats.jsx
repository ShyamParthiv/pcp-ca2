import React, { useEffect } from "react";
import { useOrders } from "../context/FoodDeliveryContext";

const OrderStats = () => {
  const { orders } = useOrders();

  const total = orders.length;

  const deliveredCount = orders.filter((order) => order.status === "Delivered").length;

  const favoriteCount = orders.filter((order) => order.favorite === true).length;

  const flaggedCount = orders.filter((order) => order.flagged === true).length;

  const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);

  const statusCount = orders.reduce((acc, order) => {
    if (!order.status) return acc;
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});

  useEffect(() => {
    window.appState = {
      totalOrders: total,
      deliveredOrders: deliveredCount,
      favoriteOrders: favoriteCount,
      correctedOrders: flaggedCount,
    };
  }, [total, deliveredCount, favoriteCount, flaggedCount]);

  if (!orders.length) return <h3 data-testid="no-stats">No orders available</h3>;

  return (
    <div className="movie-stats fade-in" data-testid="stats-page">
      <h2>Order Stats</h2>

      <p data-testid="total-orders">Total Orders: {total}</p>
      <p data-testid="delivered-orders">Delivered: {deliveredCount}</p>
      <p data-testid="favorite-orders">Favorite: {favoriteCount}</p>
      <p data-testid="flagged-orders">Corrected Invalid Entries: {flaggedCount}</p>
      <p data-testid="total-revenue">Total Revenue: ${totalRevenue.toFixed(2)}</p>

      <div>
        <p>Status Breakdown:</p>
        <ul data-testid="status-list">
          {Object.entries(statusCount).map(([status, count]) => (
            <li key={status}>
              {status}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderStats;
