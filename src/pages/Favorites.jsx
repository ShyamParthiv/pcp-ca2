import React from "react";
import { useOrders } from "../context/FoodDeliveryContext";
import OrderCard from "../components/OrderCard";

const Favorites = () => {
  const { favorites } = useOrders();

  return (
    <div className="app-container" data-testid="favorites-page">
      <h1 className="main-title" data-testid="favorites-title">
        Favorite Orders
      </h1>

      <div className="user-list" data-testid="favorites-list">
        {favorites.length === 0 ? (
          <p data-testid="no-favorites">No favorite orders</p>
        ) : (
          favorites.map((order) => <OrderCard key={order.id} order={order} />)
        )}
      </div>
    </div>
  );
};

export default Favorites;
