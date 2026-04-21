import React, { useMemo } from "react";
import { useOrders } from "../context/FoodDeliveryContext";
import { getPendingOrders } from "../questions/question4";

const OrderStatusLogic = () => {
  const { orders, loading, markOrderDelivered } = useOrders();

  const pendingOrders = useMemo(() => getPendingOrders(orders), [orders]);

  if (loading) {
    return <p data-testid="loading-orders-page">Loading orders...</p>;
  }

  return (
    <div className="app-container" data-testid="orders-status-page">
      <h2>Order Status Logic</h2>
      <p>Pending Orders: {pendingOrders.length}</p>

      {pendingOrders.length === 0 ? (
        <p data-testid="no-pending-orders">No pending orders</p>
      ) : (
        <ul data-testid="pending-orders-list">
          {pendingOrders.map((order) => (
            <li key={order.id}>
              <p>orderid :{order.orderId}</p>
              <p>customer name :{order.customerName}</p>
              <p>status :{order.status}</p>
              <button
                type="button"
                data-testid={`mark-delivered-${order.id}`}
                onClick={() => markOrderDelivered(order.id)}
              >
                Mark Delivered
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderStatusLogic;
