import React from "react";
import { useParams } from "react-router-dom";
import { useOrders } from "../context/FoodDeliveryContext";
import { findOrderByRouteId, calculateItemSubtotal } from "../questions/question2";

const OrderDetails = () => {
  const { id } = useParams();
  const { orders, loading } = useOrders();

  if (loading) {
    return <p data-testid="loading-order-detail">Loading order details...</p>;
  }

  const order = findOrderByRouteId(orders, id);

  if (!order) {
    return (
      <div className="app-container" data-testid="order-not-found">
        <h2>Order Not Found</h2>
      </div>
    );
  }

  return (
    <div className="app-container" data-testid="order-detail-page">
      <h2>Order Detail View</h2>

      <p data-testid="detail-order-id">orderid :{order.orderId}</p>
      <p data-testid="detail-customer-name">customer name :{order.customerName}</p>
      <p data-testid="detail-restaurant">restaurant :{order.restaurant}</p>
      <p data-testid="detail-status">status :{order.status}</p>
      <p data-testid="detail-delivery-time">delivery time :{order.deliveryTime}</p>

      <h3>items</h3>
      <ul data-testid="detail-items-list">
        {order.items.map((item, index) => {
          const subtotal = calculateItemSubtotal(item);
          return (
            <li key={`${order.id}-${item.name}-${index}`}>
              items = name {item.name} subtotal :{subtotal}
            </li>
          );
        })}
      </ul>

      <p data-testid="detail-total-amount">totalamount:{order.totalAmount}</p>
    </div>
  );
};

export default OrderDetails;
