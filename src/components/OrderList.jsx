import { useOrders } from "../context/FoodDeliveryContext";

import OrderCard from "./OrderCard";

const OrderList = () => {
  const { orders, loading } = useOrders();

  if (loading) {
    return <p data-testid="loading">Loading orders...</p>;
  }

  if (orders.length === 0) {
    return (
      <p className="no-movies" data-testid="no-movies">
        No orders available
      </p>
    );
  }

  return (
    <div className="movie-list" data-testid="movie-list">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
